import React , { useRef }  from 'react';

import './Contact_us.css';
import emailjs from '@emailjs/browser';

export default function Contact_us(){


    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm("service_dmcoe4q", "template_3nrbwjr",    form.current,"i4rzji3jw5-tCGIfR")
        .then(
          (resulte) => {
            console.log(resulte.text)
            alert("The message was sent successfully");
            form.current.reset();
          },
          (error) => {
            console.log(error.text);
            alert("Something went wrong, please resubmit");
          },
        );
    };
    return (
        <>
          <div className="main">
            <div className="container">
              <div className="image">
                <img src="https://cdn-icons-png.flaticon.com/512/4833/4833912.png" alt="here" />
              </div>
              <div className="form-area">
                <h2>Contact US</h2>
                <form ref={form} onSubmit={sendEmail}>

                  <input type="text" name="user_name" placeholder="Full Name"  required />
                  <input type="email" name="user_email" placeholder="Email"required />
                  <textarea cols="30" rows="3"name="message" placeholder="Your Message" required></textarea>

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