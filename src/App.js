import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Main/Navbar";
import BookingPage from './Components/Booking/BookingPage';
import HomePage from "./Components/Home/HomePage";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </div>
  );
}

export default App;
