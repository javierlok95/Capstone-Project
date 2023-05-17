import React from 'react';
import "./menu.css";


const Menu = () => {
  return (
    <div className="container-menu">
      <div className="menu-group">
        <div className="menu-item">
          <img src="https://www.thechunkychef.com/wp-content/uploads/2021/07/Greek-Salad-Recipe-recipe-card-680x680.jpg" alt="Greek Salad" />
          <div className="menu-item-text">
            <h3 className="menu-item-heading">
              <span className="menu-item-name">Greek Salad</span>
              <span className="menu-item-price">$12.99</span>
            </h3>
            <p className="menu-item-description">
              Greek salad, also known as horiatiki, is a fresh and healthy salad that originates from Greece. It typically consists of chopped tomatoes,
              cucumbers, red onions, green peppers, and kalamata olives, topped with feta cheese and dressed with olive oil and oregano. Some variations of the salad may also include capers or anchovies. Other ingredients such as salt and pepper.
            </p>
            <button onClick={() => alert("Your Order is Coming Soon!")} className="button-order-menu">ORDER NOW</button>
          </div>
        </div>
        <div className="menu-item">
          <img src="https://chatelaine.com/wp-content/uploads/2020/02/Tagine-istock-feature-image-810x608.jpg" alt="Moroccan Tagine" />
          <div className="menu-item-text">
            <h3 className="menu-item-heading">
              <span className="menu-item-name">Moroccan Tagine</span>
              <span className="menu-item-price">$10.29</span>
            </h3>
            <p className="menu-item-description">
              Moroccan tagine is a traditional North African dish that consists of a savory stew made with a variety of ingredients such as meat (usually chicken, lamb, or beef), vegetables, and fragrant spices such as cumin, ginger, and turmeric.
              The dish is named after the conical earthenware pot in which it is cooked and served, also called a "tagine."
            </p>
            <button onClick={() => alert("Your Order is Coming Soon!")} className="button-order-menu">ORDER NOW</button>
          </div>
        </div> <div className="menu-item">
          <img src="https://images.ctfassets.net/nw5k25xfqsik/64VwvKFqxMWQORE10Tn8pY/200c0538099dc4d1cf62fd07ce59c2af/20220211142754-margherita-9920.jpg?w=1024" alt="Pizza Margherita" />
          <div className="menu-item-text">
            <h3 className="menu-item-heading">
              <span className="menu-item-name">Pizza Margherita</span>
              <span className="menu-item-price">$24.99</span>
            </h3>
            <p className="menu-item-description">
              Pizza Margherita is a classic Italian pizza that has a simple yet delicious flavor profile. It is named after Queen Margherita of Savoy
              was served a pizza with the colors of the Italian flag: red tomato sauce, white mozzarella cheese, and green basil leaves. The pizza is made with a thin crust that is topped with tomato sauce, fresh mozzarella cheese, and fresh basil leaves.
            </p>
            <button onClick={() => alert("Your Order is Coming Soon!")} className="button-order-menu">ORDER NOW</button>
          </div>
        </div> <div className="menu-item">
          <img src="https://www.recipetineats.com/wp-content/uploads/2019/03/Greek-Moussaka_3-re-edited-SQ.jpg" alt="Moussaka" />
          <div className="menu-item-text">
            <h3 className="menu-item-heading">
              <span className="menu-item-name">Moussaka</span>
              <span className="menu-item-price">$18.99</span>
            </h3>
            <p className="menu-item-description">
              Moussaka is a classic dish that is popular in many Mediterranean and Middle Eastern countries. It is typically made with layers of sliced eggplant, ground meat (usually lamb or beef),
              tomatoes, onions, and a creamy béchamel sauce. The dish is then baked in the oven until the top is golden and crispy. It comes with different type of meat and vegetables
            </p>
            <button onClick={() => alert("Your Order is Coming Soon!")} className="button-order-menu">ORDER NOW</button>
          </div>
        </div> <div className="menu-item">
          <img src="https://hips.hearstapps.com/hmg-prod/images/190508-bruschetta-horizontal-2-1558014808.png?crop=0.888421052631579xw:1xh;center,top&resize=1200:*" alt="Bruschetta" />
          <div className="menu-item-text">
            <h3 className="menu-item-heading">
              <span className="menu-item-name">Bruschetta</span>
              <span className="menu-item-price">$7.99</span>
            </h3>
            <p className="menu-item-description">
              Bruschetta is a traditional Italian antipasto that consists of toasted bread that is rubbed with garlic and topped with fresh tomatoes, olive oil, and salt. The bread used for bruschetta is typically a rustic, crusty Italian bread, such as ciabatta or sourdough.
              The topping is often made with diced fresh tomatoes, mozzarella cheese, basil, or roasted vegetables can also be found.
            </p>
            <button onClick={() => alert("Your Order is Coming Soon!")} className="button-order-menu">ORDER NOW</button>
          </div>
        </div> <div className="menu-item">
          <img src="https://www.feastingathome.com/wp-content/uploads/2020/07/lebanese-tabouli_-4.jpg" alt="Tabouli" />
          <div className="menu-item-text">
            <h3 className="menu-item-heading">
              <span className="menu-item-name">Tabouli</span>
              <span className="menu-item-price">$11.49</span>
            </h3>
            <p className="menu-item-description">
              Tabouli, also known as tabbouleh, is a refreshing Middle Eastern salad that is made with finely chopped parsley, tomatoes, onions, and bulgur wheat.
              The salad is dressed with olive oil, lemon juice, and salt, and is often seasoned with fresh mint or other herbs. Tabouli is known for its bright, fresh flavors and healthy ingredients, and is a popular vegetarian and vegan option.
            </p>
            <button onClick={() => alert("Your Order is Coming Soon!")} className="button-order-menu">ORDER NOW</button>
          </div>
        </div> <div className="menu-item">
          <img src="https://fullofplants.com/wp-content/uploads/2017/06/magical-green-falafels-thumb-500x500.jpg" alt="Falafel" />
          <div className="menu-item-text">
            <h3 className="menu-item-heading">
              <span className="menu-item-name">Falafel</span>
              <span className="menu-item-price">$3.69</span>
            </h3>
            <p className="menu-item-description">
              Falafel is a popular Middle Eastern dish that is made from ground chickpeas, fava beans, or a combination of both.
              The balls or patties are then deep-fried until they are crispy on the outside and soft on the inside. Falafel is often served in a pita bread with vegetables such as lettuce, tomato, and cucumber, along with tahini sauce or hummus.
            </p>
            <button onClick={() => alert("Your Order is Coming Soon!")} className="button-order-menu">ORDER NOW</button>
          </div>
        </div> <div className="menu-item">
          <img src="https://whatshouldimakefor.com/wp-content/uploads/2017/06/Lemon-Meringue-Tart-2.jpg" alt="Lemon Meringue Tart" />
          <div className="menu-item-text">
            <h3 className="menu-item-heading">
              <span className="menu-item-name">Lemon Meringue Tart</span>
              <span className="menu-item-price">$5.99</span>
            </h3>
            <p className="menu-item-description">
              Lemon meringue tart is a classic dessert that features a buttery, flaky pastry crust filled with a tangy and creamy lemon filling, topped with a fluffy and sweet meringue topping.
              The lemon filling is made from fresh lemon juice, sugar, eggs, and butter, and is cooked on the stovetop until thick and creamy. It comes with variety of size small, medium or large.
            </p>
            <button onClick={() => alert("Your Order is Coming Soon!")} className="button-order-menu">ORDER NOW</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu;
