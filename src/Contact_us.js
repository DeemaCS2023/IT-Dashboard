import React from 'react';

import './Contact_us.css';

export default function Contact_us(){


    return (
        <>
          <div className="main">
            <div className="container">
              <div className="image">
                <img src="https://cdn-icons-png.flaticon.com/512/4833/4833912.png" alt="here" />
              </div>
              <div className="form-area">
                <h2>Contact US</h2>
                <form action="">
                  <input type="text" placeholder="Full Name" />
                  <input type="email" placeholder="Email" />
                  <textarea cols="30" rows="3" placeholder="Your Message"></textarea>
                  <button type="submit">Send Message</button>
                </form>
                <div className="social-icons">
                
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }