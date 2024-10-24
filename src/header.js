import React, { useState, useEffect } from 'react';     // usestate تستخدم لـ تحديث شي معين مثل عبارة الوقت 
                                                        // useeffect تستتخدم لاصدار حدث

import { useNavigate } from 'react-router-dom';         // يسمح لي بالانتقال من صفحة لأخرى
import './header.css';



 function Header(){

    const [message, setMessage] = useState('');   // مصفوفة عبارة عن قيمتين الاولى القيمة الافتراضية والثانيه عندما تتحدث 
    const navigate = useNavigate();

    useEffect(() => {       
        message_time();
    },
     []);           

    function message_time() {       // دالة  تعرض عبارة صباح او مساء الخير بناء على الوقت
                                      
        let date = new Date();
        let currnet_time = date.getHours();
        var my_time;

        if (currnet_time < 12) {
            my_time = "Good Morning";
        } else {
            my_time = "Good Afternoon";
        }
        setMessage(my_time);    // يحدث لي العبارة 
    }
         
    function goTologout () {    // طريقة تقليدية لكتابة الدوال
      localStorage.removeItem('userToken');
     
        
        window.location.href="http://localhost:8080/log_out.php";
    }
    const goToHome = () => {  // طريقة مختصرة لكتابة الدوال خاصة بالجافاسكريبت
        navigate('/'); 
    };
                
function toggleNotifications() {
        var dropdown = document.querySelector(".notifications-dropdown");   //id or class name البحث عن العنصر بواسطة 
        if (dropdown.style.display === "block") {         // اذا كانت القائمة ظاهرة
            dropdown.style.display = "none";               // قم بإخفائها
        } else {
            dropdown.style.display = "block";               // قم بإظهارها
          
              document.getElementById("notificationBadge").style.display = "none";    // قم باخفاء رقم الاشعارات
        }
    }
    
                       
    useEffect(() => {              
        window.onclick = function(event) {  //عندما يضغط على اي مكان في المتصفح
            if (!event.target.matches('.btn4') && !event.target.closest('.notifications-dropdown')) {   // يتحقق من ان العنصر الذي تم الضغط عليه ليس زر اشعارات او مابداخل القائمة
                var dropdowns = document.querySelectorAll(".notifications-dropdown");    // يحصل على جميع العناصر التي تحتوي على قائمة الاشعارات
                dropdowns.forEach(openDropdown => {                    // يكرر هذا الشي على كل قائمة مفتوحة
                    if (openDropdown.style.display === "block") {      // اذا كانت القائمة مفتوحه قم باخفائها
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
        
        <ul> <i>  تم تعديل الموقع </i></ul>
        
         
        
       </div>

        </header>


        
      





    );
    
}

export default Header;