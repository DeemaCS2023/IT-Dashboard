
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {Logout} from'./Logout';
import About from './About';
import Common_questions from './common_questions';
import Contact_us from './Contact_us';
import Header from './header';
import Footer from './footer';

function App() {
  return (


    <>
   
   <form className="search-container">
        <input type="text" className="search-input" placeholder="Search"/> 
        
        <button className="btn_search" >
        <i className="fa fa-search"></i> </button>
        </form>

      <section className='mysection'>
        
        <iframe className='myiframe'
         
          src="http://127.0.0.1:6579/" 
           allowFullScreen
          title="Power BI Report">
        </iframe>

        <br></br>  <br></br>  <br></br>
 
      </section>
      
   


     
   
  

   
  
   
    
    
    </>
      
  );

}



export default function RouteApp() {
  return (
    
    <Router>
      <Header />
      <Footer/>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/Logout' element={<Logout />} />
        <Route path='/About' element={<About />} />
        <Route path='/common_questions' element={<Common_questions />} /> 
        <Route path='/Contact_us' element={<Contact_us />} /> 
       

      </Routes>
    </Router>
  );
}



