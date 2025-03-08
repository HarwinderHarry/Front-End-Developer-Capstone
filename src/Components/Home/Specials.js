import { FaMotorcycle } from "react-icons/fa"

function Specials() {
  return (
    <section className="specials section__padding">
      <div className="specials-header">
        <h1>This weeks specials</h1>
        <button className="online-menu-button">Online Menu</button>
      </div>
      <div className="specials-container">
        <div className="special-card">
          <img src="Images/image-2.jpg" alt="Greek Salad" />
          <div className="special-info">
            <div className="special-title">
              <h3>Greek Salad</h3>
              <span className="price">$12.99</span>
            </div>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished
              with crunchy garlic and rosemary croutons.
            </p>
            <div className="delivery">
              <span>Order a delivery</span>
              <FaMotorcycle />
            </div>
          </div>
        </div>

        <div className="special-card">
          <img src="Images/image-3.jpeg" alt="Bruschetta" />
          <div className="special-info">
            <div className="special-title">
              <h3>Bruschetta</h3>
              <span className="price">$5.99</span>
            </div>
            <p>
              Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and
              olive oil.
            </p>
            <div className="delivery">
              <span>Order a delivery</span>
              <FaMotorcycle />
            </div>
          </div>
        </div>

        <div className="special-card">
          <img src="Images/icon-5.svg" alt="Lemon Salad" />
          <div className="special-info">
            <div className="special-title">
              <h3>Lemon Salad</h3>
              <span className="price">$12.99</span>
            </div>
            <p>
              This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic
              as can be imagined.
            </p>
            <div className="delivery">
              <span>Order a delivery</span>
              <FaMotorcycle />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Specials

