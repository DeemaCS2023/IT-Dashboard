
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {Logout} from'./Logout';
import About from './About';
import Common_questions from './common_questions';
import Contact_us from './Contact_us';
import Header from './header';
import Footer from './footer';
import { FullScreen, useFullScreenHandle } from "react-full-screen";


function App() {
  const handle = useFullScreenHandle();
  return (


    <> 
    
   

      <section className='mysection'>
   
      <FullScreen  handle={handle}>
     
        <iframe className='myiframe'
         
          src="http://127.0.0.1:7105" 
          allow="fullscreen"
           allowFullScreen={true}
          title="ٌR Report">
            
        </iframe>
     
        </FullScreen>
        <button className='full' onClick={handle.enter}>
        <i className="fa fa-expand"></i> 
      </button>
        <br></br>  <br></br>  <br></br> <br></br>  <br></br>  <br></br>  <br></br>
 
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



