
import './footer.css';
import { Link} from 'react-router-dom';


function Footer(){



return(


<footer className='myfooter'>
   <p className='myp1'> Alahli &copy;</p>
   <Link to="/Contact_us"  className="a1"> <i> </i>Contact us</Link>
   <Link to="/common_questions"  className="a2"><i> </i>Common questions</Link> 
   <Link to="/About"  className="a3"><i> </i>About us</Link>



   </footer >



  



);




}



export default Footer;