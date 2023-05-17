import React, { useState } from 'react';
import "./main.css";

const TextToggle = ({ initialText, fullText }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <p className="description" onClick={toggleText}>
      {showFullText ? fullText : initialText}
      {!showFullText && <span>...</span>}
    </p>
  );
};

const Main = () => {
  return (
    <main>
      <div className="hero-container">
        <div className="hero-content">
          <h1>Welcome to the Little Lemon Restaurant!</h1>
          <p className="hero-paragraph">
            <TextToggle
              initialText="Little Lemon is a Mediterranean restaurant that offers a variety of delicious and healthy dishes.
              Our menu is inspired by the flavors and ingredients of the Mediterranean region,
              and we use only the freshest ingredients in all of our dishes."
              fullText="Little Lemon is a Mediterranean restaurant that offers a variety of delicious and healthy dishes.
              Our menu is inspired by the flavors and ingredients of the Mediterranean region,
              and we use only the freshest ingredients in all of our dishes.
              Learn more about our menu and our commitment to using locally sourced, organic ingredients.
              Whether you're a vegetarian, vegan, or just looking for a healthy and delicious meal, Little Lemon has something for everyone.
              Come visit us and experience the flavors of the Mediterranean for yourself!"
            />
          </p>
          <a href="/reservations" className="reserve-table-button">RESERVE TABLE NOW!</a>
        </div>
        <div className="hero-image">
          <img src="https://www.todaystraveller.net/wp-content/uploads/2021/11/Sizzler-768x768.jpg" alt="Sizzling Mediterranean food" />
        </div>
      </div>

      <article>
        <div className="specials-container">
          <div className="special-of-the-week">
            <h2>Special of the Week</h2>
          </div>
          <div className="specials-content">
            <div className="greek-salad">
              <h3 className="greek-salad-heading">
                <span className="greek-salad-name">Greek Salad</span>
                <span className="greek-salad-price">$12.99</span>
              </h3>
              <div className="salad-image">
                <img src="https://cdn.loveandlemons.com/wp-content/uploads/2019/07/greek-salad-2-786x1024.jpg" alt="Greek Salad" />
              </div>
              <p className="description-salad">
                <TextToggle
                  initialText="Enjoy the freshness of a classic Greek Salad made with crisp lettuce, juicy tomatoes, tangy feta cheese, and kalamata olives..."
                  fullText="Enjoy the freshness of a classic Greek Salad made with crisp lettuce, juicy tomatoes, tangy feta cheese, and kalamata olives, drizzled with a zesty lemon and olive oil dressing.
                  Perfect to share with friends and family."
                />
              </p>
              <button onClick={() => alert("Your Order is Coming Soon!")} className="order-btn1">ORDER NOW</button>
            </div>

            <div className="bruschetta">
              <h3 className="bruschetta-heading">
                <span className="bruschetta-name">Greek Salad</span>
                <span className="bruschetta-price">$7.99</span>
              </h3>
              <div className="bruschetta-image">
                <img src="https://kitchendivas.com/wp-content/uploads/bruschetta-with-cheese-3-768x1152.jpg" alt="bruschetta with bread" />
              </div>
              <p className="description-bruschetta">
                <TextToggle
                  initialText="Indulge in our delicious bruschetta, a traditional Italian antipasto consisting of grilled bread rubbed with garlic..."
                  fullText="Indulge in our delicious bruschetta, a traditional Italian antipasto consisting of grilled bread rubbed with garlic and topped with juicy diced tomatoes, fresh basil, and a drizzle of olive oil.
                The perfect appetizer to share or as a light meal on its own."
                />
              </p>
              <button onClick={() => alert("Your Order is Coming Soon!")} className="order-btn2">ORDER NOW</button>
            </div>

            <div className="lemon-dessert">
              <h3 className="lemon-dessert-heading">
                <span className="lemon-dessert-name">Lemon Meringue Tart</span>
                <span className="lemon-dessert-price">$7.99</span>
              </h3>
              <div className="dessert-image">
                <img src="https://www.homecookingadventure.com/wp-content/uploads/2022/01/lemon_meringue_tart_main.jpg" alt="Lemon Meringue Tart" />
              </div>
              <p className="description-dessert">
                <TextToggle
                  initialText="Enjoy the freshness of a classic Greek Salad made with crisp lettuce, juicy tomatoes, tangy feta cheese, and kalamata olives..."
                  fullText="Enjoy the freshness of a classic Greek Salad made with crisp lettuce, juicy tomatoes, tangy feta cheese, and kalamata olives, drizzled with a zesty lemon and olive oil dressing.
                  Perfect to share with friends and family."
                />
              </p>
              <button onClick={() => alert("Your Order is Coming Soon!")} className="order-btn3">ORDER NOW</button>
            </div>
          </div>
        </div>
      </article>

      <section className="testimonials-content" style={{ color: '#000', backgroundColor: '#f3f2f2' }}>
        <div className="container py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-10 col-xl-8 text-center">
              <h3 className="fw-bold mb-4">Testimonials</h3>
              <p className="mb-4 pb-2 mb-md-5 pb-md-0">
                At our restaurant, we believe that customer satisfaction is key, and we strive to provide exceptional dining experiences that exceed our guests' expectations.
                We value all feedback from our customers and are proud to share some of the positive testimonials we have received.
              </p>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="card">
                <div className="card-body py-4 mt-2">
                  <div className="d-flex justify-content-center mb-4">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                      className="rounded-circle shadow-1-strong" width="100" height="100" alt="peer review" />
                  </div>
                  <h5 className="font-weight-bold">Teresa May</h5>
                  <h6 className="font-weight-bold my-3">Founder at ET Company</h6>
                  <ul className="list-unstyled d-flex justify-content-center">
                    <li>
                      <i className="fas fa-star fa-sm text-info"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-info"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-info"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-info"></i>
                    </li>
                    <li>
                      <i className="fas fa-star-half-alt fa-sm text-info"></i>
                    </li>
                  </ul>
                  <p className="mb-2">
                    <i className="fas fa-quote-left pe-2"></i>I've been coming to this restaurant for years and it never disappoints.
                    The cozy atmosphere and friendly staff make it feel like home, and the food is always top-notch.
                    I highly recommend the lamb chops - they are tender and full of flavor.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="card">
                <div className="card-body py-4 mt-2">
                  <div className="d-flex justify-content-center mb-4">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(15).webp"
                      className="rounded-circle shadow-1-strong" width="100" height="100" alt="peer review1" />
                  </div>
                  <h5 className="font-weight-bold">Maggie McLoan</h5>
                  <h6 className="font-weight-bold my-3">Photographer at Studio LA</h6>
                  <ul className="list-unstyled d-flex justify-content-center">
                    <li>
                      <i className="fas fa-star fa-sm text-info"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-info"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-info"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-info"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-info"></i>
                    </li>
                  </ul>
                  <p className="mb-2">
                    <i className="fas fa-quote-left pe-2"></i>The service at this restaurant is exceptional. The staff is attentive and friendly, and
                    they go above and beyond to make sure you have a great experience.
                    And the food is just as impressive - the steak was cooked to perfection and the garlic mashed potatoes were heavenly.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-0">
              <div className="card">
                <div className="card-body py-4 mt-2">
                  <div className="d-flex justify-content-center mb-4">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp"
                      className="rounded-circle shadow-1-strong" width="100" height="100" alt="peer review2" />
                  </div>
                  <h5 className="font-weight-bold">Alexa Horwitz</h5>
                  <h6 className="font-weight-bold my-3">Front-end Developer in NY</h6>
                  <ul className="list-unstyled d-flex justify-content-center">
                    <li>
                      <i className="fas fa-star fa-sm text-info"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-info"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-info"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-info"></i>
                    </li>
                    <li>
                      <i className="far fa-star fa-sm text-info"></i>
                    </li>
                  </ul>
                  <p className="mb-2">
                    <i className="fas fa-quote-left pe-2"></i>This restaurant is a hidden gem. The food is fresh and flavorful, and the portions are generous.
                    The grilled salmon was perfectly cooked and paired perfectly with the roasted vegetables.
                    And the cheesecake was the best I've ever had!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about-us" className="py-6">
        <div className="about-us-container">
          <div className="row justify-content-center">
            <div className="col-md-5 order-md-2">
              <img src="https://www.escoffier.edu/wp-content/uploads/2020/01/Two-Chefs-smiling-for-a-photo-in-a-commercial-kitchen-768.jpg" alt="Restaurant" className="img-fluid rounded shadow" />
            </div>
            <div className="col-md-5 order-md-1">
              <div className="d-flex align-items-center" style={{ height: "100%" }}>
                <div>
                  <h2 className="mb-4">About Us</h2>
                  <p className="mb-4">At our restaurant, we believe that dining is more than just eating. It’s about coming together with friends and family
                    to share experiences, stories, and memories. Our menu is designed to evoke these feelings and create an atmosphere of warmth and hospitality.</p>
                  <p className="mb-4">We pride ourselves on sourcing only the freshest ingredients and preparing each dish with care and attention to detail.
                    Whether you’re here for a romantic dinner or a family celebration, we strive to make your experience with us unforgettable.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main;