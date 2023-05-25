import React, { useState, useReducer } from 'react';
import "./reservations.css";
import { fetchAPI } from "./FetchData.js";


const Reservations = () => {
  /*Step1: Create Local State*/
  /*setName("") is to clear out the input*/
  const [name, setName] = useState("")
  const [date, setDate] = useState("")
  const [guests, setGuests] = useState("")
  const [time, setTime] = useState("")
  const [occasion, setOccasion] = useState("")

  const initializeTimes = () => {
    // empty because user hasn't picked a date
    return {
      availableTimes: []
    };
  }

  function availableTimesReducer(state, action) {
    // console.log(state);
    switch (action.type) {
      case 'update':
        // return new state
        return { availableTimes: action.value };
      default:
    }
  }

  const [state, dispatch] = useReducer(availableTimesReducer, initializeTimes());

  const updateTimes = (timeParameter) => {
    // update state
    dispatch({
      type: 'update',
      value: timeParameter
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setDate("");
    setGuests("");
    setTime("");
    setOccasion("");
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleDateChange = (e) => {
    setDate(e.target.value)
    updateTimes(fetchAPI(new Date(e.target.value)))
  }

  const handleGuestsChange = (e) => {
    setGuests(e.target.value)
  }

  const handleTimeChange = (e) => {
    setTime(e.target.value)
  }

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value)
  }

  /* Step 2: Hook Up the text input via two props on Line 16 adding value and onChange*/
  /* Step 3: to control the submission of the form, use onSubmit prop*/

  return (
    <div className="reservation-field" >
      <div className="reservation-title">
        <h2>Reservation Form</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="reservation-name">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={handleNameChange}
            />
            <label htmlFor="res-date">Choose date:</label>
            <input
              type="date"
              id="res-date"
              placeholder="Choose a date"
              value={date}
              onChange={handleDateChange}
              required
            />
            <label htmlFor="res-time">Choose time:</label>
            <select id="res-time" value={time} onChange={handleTimeChange}>
              {state.availableTimes && state.availableTimes.map((timeOption) => (
                <option key={timeOption} value={timeOption}>{timeOption}</option>
              ))}
            </select>
            <label htmlFor="guests">Number of guests:</label>
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              value={guests}
              onChange={handleGuestsChange}
              required
            />
            <label htmlFor="occasion">Occasion:</label>
            <select id="occasion" value={occasion} onChange={handleOccasionChange}>
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </div>
          <button className="submit-button" disabled={!name} type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  )
}

export default Reservations;