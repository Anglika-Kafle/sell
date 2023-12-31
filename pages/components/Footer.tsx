import React from 'react';
// import './Footer.css'; // Import the CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} SellBuy</p>
        <img src="123.jpg" className="footer-image" />
      </div>
      <div className="footer-contact">
        <h3>Contact Us</h3>
        <p>Email: info@sellbuy.com</p>
        <p>Phone: +977 123-456-7890</p>
        <p>Address: 123 Main Street, Pokhara, Nepal</p>
      </div>
    </footer>
  );
}

export default Footer;
