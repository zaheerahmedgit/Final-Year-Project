import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS service integration
    emailjs.send(
      'service_vtyytph', // Replace with your EmailJS Service ID
      'template_y9c4l6r', // Replace with your EmailJS Template ID
      {
        from_name: form.name,          // Add sender's name
        from_email: form.email,        // Add sender's email
        to_email: 'muhammadtayyab82csit@gmail.com', // Receiver's email
        message: form.message           // Add message content
      },
      'zU27MtR-tZU3G9RS3' // Replace with your EmailJS User ID
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      alert('Thank you for reaching out! We will get back to you shortly.');
      setForm({ name: '', email: '', message: '' }); // Clear form fields
    })
    .catch((error) => {
      console.log('Error sending email:', error); // Log complete error object
      alert('There was an error sending your message. Please try again later.');
    });
  };

  return (
    <div className="contact-container gradient-bg-welcome">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Whether you have a question or feedback, feel free to reach out.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Enter your message"
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className="contact-submit-button">Send Message</button>
      </form>

      <div className="contact-details">
        <h3>Our Contact Info:</h3>
        <p>Email: muhammadtayyab82csit@gmail.com</p>
        <p>Address: UAJK KAC Muzaffarabad</p>
      </div>
    </div>
  );
};

export default Contact;
