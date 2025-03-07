import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  return (
    // <nav className="navbar section__padding">
    //   <div className="navbar-container">
    //     <div className="logo">
    //       <img src="Images/Logo.svg" alt="Little Lemon Logo" />
    //     </div>
    //     <ul className="nav-menu">
    //       <li className="nav-item">
    //         <a href="#home">Home</a>
    //       </li>
    //       <li className="nav-item">
    //         <a href="#about">About</a>
    //       </li>
    //       <li className="nav-item">
    //         <a href="#menu">Menu</a>
    //       </li>
    //       <li className="nav-item">
    //         <a href="#reservations">Reservations</a>
    //       </li>
    //       <li className="nav-item">
    //         <a href="#order">Order Online</a>
    //       </li>
    //       <li className="nav-item">
    //         <a href="#login">Login</a>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>

    <nav className="navbar section__padding">
      <div className="navbar-container">
        <div className="logo">
          <img src="Images/Logo.svg" alt="Little Lemon Logo" />
        </div>
        
        {/* Hamburger Icon */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        
        {/* Navigation Menu */}
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item"><a href="#home">Home</a></li>
          <li className="nav-item"><a href="#about">About</a></li>
          <li className="nav-item"><a href="#menu">Menu</a></li>
          <li className="nav-item"><a href="#reservations">Reservations</a></li>
          <li className="nav-item"><a href="#order">Order Online</a></li>
          <li className="nav-item"><a href="#login">Login</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

