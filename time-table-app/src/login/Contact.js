import React from 'react';
import './Contact.css';
import { FaFacebook, FaEnvelope, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <>
      <h2><strong>Contact Us </strong></h2>
      <div className='flex'>
        <div className='contactinfo'>
          <h3>Contact Information</h3>
          <p>Call: 92 232 262079 </p>
          <p>Email: tiest@neduet.edu.pk</p>
        </div>
        <div className='socialmedia'>
          <h3>Social Media</h3>
          <div className='flex icon'>
          <a href="https://www.facebook.com">
              <FaFacebook size='30' /> {/* Facebook icon */}
            </a>
            <a href="mailto:tiest@neduet.edu.pk">
              <FaEnvelope size='30' /> {/* Gmail icon */}
            </a>
            <a href="https://www.twitter.com">
              <FaTwitter size='30' /> {/* Twitter icon */}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
