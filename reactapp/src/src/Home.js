import { Link } from 'react-router-dom';
import './Home.css';
import { ArrowRight,FacebookLogo,TwitterLogo,InstagramLogo } from "phosphor-react";
import './footer.css';


const Home =()=>{
    return(
        <div className="home">
<div>
 
</div>
<img src="https://usercontent2.hubstatic.com/14134431_f1024.jpg" height="500px" width="100%" style={{borderRadius:0}} />
<button className='ho1'><Link to="/shop"><ArrowRight size={25} /></Link></button>
<h2 style={{textAlign:'left'}}>Featured Products</h2>
<div className="cards-wrapper">
    <div className="card"><img src="https://grandmascatering.com/images/thumbs/0000080_assorted-canned-soft-drinks_550.jpeg" height="250" width="300" style={{borderRadius:0}} /> </div>
    <div className="card"><img src="https://www.msc.com/-/media/images/msc-cargo/sectors/agriculture/vegetables/msc21008136/msc21008136/msc21008136_s.jpg?w=1920&hash=4F7A45F7D8E97A1735462E3E3FDA80AC" height="250" width="300" style={{borderRadius:0}} /></div>
    <div className="card"><img src="https://assets.editorial.aetnd.com/uploads/2014/02/chocolate-gettyimages-473741340.jpg" height="250" width="300" style={{borderRadius:0}} /></div>
    <div className="card"><img src="https://media.istockphoto.com/id/941858854/photo/herbs-and-spices-for-cooking-on-dark-background.jpg?s=612x612&w=0&k=20&c=-quRLbD1Hkd2-i_I-uqJltiA516alqGNojlobB6nZ7A=" height="250" width="300"style={{borderRadius:0}} /></div>
</div>

<footer className="footer">
        <div className="background">
          <div className="row">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
               
                <li><a href="/privacy">PRIVACY POLICY</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li><a href="/faq">FAQ</a></li> 
                <li><a href="#">PAYMENT OPTIONS</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="https://www.facebook.com/"><i className="fab fa-facebook-f" /><FacebookLogo size={30} weight="fill" /></a>
                <a href="https://www.twitter.com/"><i className="fab fa-twitter" /><TwitterLogo size={30} weight="fill" /></a>
                <a href="https://www.instagram.com/"><i className="fab fa-linkedin-in"/><InstagramLogo size={30} weight="fill" /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
</div>
)
};
export default Home;