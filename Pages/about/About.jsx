import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <div className="about-container gradient-bg-welcome">
      <h1>About </h1>
      <p>
        Welcome to Etherra, your trusted platform for cryptocurrency transactions. 
        At Etherra, we are committed to providing secure, fast, and easy-to-use solutions for buying, selling, and transferring digital currencies.
      </p>
     

      <p>
        Our mission is to simplify the crypto world for everyone, ensuring top-level security, low fees, and a smooth user experience. 
        With a team of experienced professionals in blockchain technology, we strive to bring innovative solutions that cater to both beginners and experienced traders alike.
      </p>
      <div class="center">
       
          </div>
      <div className="about-values">
        <div>
          <h2>Our Vision</h2>
          <p>To make cryptocurrency accessible and beneficial for everyone, empowering financial independence across the globe.</p>
        </div>
        <div>
          <h2>Our Mission</h2>
          <p>To offer a seamless and secure platform for managing cryptocurrency transactions, with transparency and ease of use at its core.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
