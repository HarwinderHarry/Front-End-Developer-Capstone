import React, { useState } from 'react';
import './Bookingpage.css';

function BookingPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: '',
    occasion: '',
    mobile: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Reservation Submitted Successfully!');
  };

  return (
    <div className="booking-form-container">
      {step === 1 && (
        <div className="form-step">
          <h2>Reservation of Table</h2>
          <form>
            <div className='Grp-1 grps'>
            <div className='line-1 text-set'>
              <label> <span>*</span>Name</label>
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className='Line-5 text-set'> 
              <label><span>*</span>Occasion</label>
            <select name="occasion" value={formData.occasion} onChange={handleChange} required>
              <option value="">Select Occasion</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
            </div>
            </div>

            <div className='Grp-2 grps'> <div className='Line-2 text-set'>
            <label><span>*</span>Date</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} required />
            </div>
            <div className='Line-3 text-set'>
            <label> <span>*</span>Time </label>
            <select name="time" value={formData.time} onChange={handleChange} required>
              <option value="">Timeslots</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="3:00 PM">3:00 PM</option>
              <option value="4:00 PM">4:00 PM</option>
              <option value="5:00 PM">5:00 PM</option>

            </select>
            </div>
            <div className='Line-4 text-set'>
            <label><span>*</span>No. of Guests</label>
            <input type="number" name="guests" value={formData.guests} onChange={handleChange} min="1" required />
            </div>
            </div>

            <div className='Grp-3 grps'>
            <div className='Line-6 text-set'>
            <label><span>*</span>Mobile Number</label>
            <input type="text" name="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleChange} required />
            </div>
          <div className='Line-7 text-set'>
          <label><span>*</span>Email</label>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          </div>
            </div>
          <div className='Line-8 text-set'><button type="button" onClick={nextStep}>Continue</button></div>
          </form>
        </div>
      )}

      {step === 2 && (
        <div className="form-step">
                 <h2>Review the Details</h2>
          <div className='details'>
          <div className='set-texting'>
          <p><strong>Reservation for:</strong> {formData.name}</p>
          <p><strong>No. of Guests:</strong> {formData.guests}</p>
          <p><strong>Date:</strong> {formData.date} @ {formData.time}</p>
          <p><strong>Mobile:</strong> {formData.mobile}</p>
          <p><strong>Email:</strong> {formData.email}</p>
         </div>

         <div className='set-imaging'>
          <img src="Images/image-1.png" alt="Image-food"/>
         </div>

          </div>
         <div className="btn-sets">
          <button type="button" onClick={prevStep}>Back</button>
          <button type="button" onClick={nextStep}>Continue</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="form-step">
          <h2>Payment Selection</h2>
          <div className='cha'>
          <p><strong>Reservation Charge:</strong> Rs. 100</p>
          <p><strong>Total Charges:</strong> Rs. 500</p>
          <p><strong>Discount:</strong> -Rs. 50</p>
          <p><strong>Amount to be Paid:</strong> Rs. 450</p>
          </div>
          <div className="btn-sets">
          <button type="button" onClick={prevStep}>Back</button>
          <button type="submit" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookingPage;
