import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';



 function Header(){
   
 
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        message_time();
    }, []);

    function message_time() {
        let date = new Date();
        let currnet_time = date.getHours();
        var my_time;
        if (currnet_time < 12) {
            my_time = "Good morning";
        } else {
            my_time = "Good evening";
        }
        setMessage(my_time);
    }

    const goTologout = () => {
        navigate('/Logout'); 
    };
    const goToHome = () => {
        navigate('/'); 
    };
   
function toggleNotifications() {
        var dropdown = document.querySelector(".notifications-dropdown");
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        } else {
            dropdown.style.display = "block";
            // Reset notification count when opened
              document.getElementById("notificationBadge").style.display = "none";
        }
    }
    
    // Close the dropdown if the user clicks outside of it
    useEffect(() => {
        window.onclick = function(event) {
            if (!event.target.matches('.btn4') && !event.target.closest('.notifications-dropdown')) {
                var dropdowns = document.querySelectorAll(".notifications-dropdown");
                dropdowns.forEach(openDropdown => {
                    if (openDropdown.style.display === "block") {
                        openDropdown.style.display = "none";
                    }
                });
            }
        };
    }, []);
   

    return (
        <header className='myheader'>
            <img src="https://sky-saudia.net/user_images/news/18-09-24-285560643.webp" alt="Alahli Logo" width="150" height="100" className='image' />

            <h1 className='myh1'>{message} , Welcome to the IT Dashboard</h1> 

            <button className="btn" onClick={goTologout}>
                <i className="fas fa-sign-out-alt"></i> &nbsp; Logout
            </button>

            <button className="btn2"onClick={goToHome}>
                <i className="fas fa-home"></i> &nbsp; Home
            </button>

            <button className="btn3" onClick={window.print}> 
                <i className="fa fa-print"></i> &nbsp; Print
            </button>

            <button className="btn4"onClick={toggleNotifications} > 
                <i className="fa fa-bell" ></i> &nbsp; Notifications 
                <span className="notification-badge" id="notificationBadge">1</span>
            </button>
            <div className="notifications-dropdown" id="notificationsDropdown">
        
        <ul> <i> إشعار جديد </i></ul>
        
         
          
       
          
       </div>

        </header>


        
      





    );
    
}

export default Header;