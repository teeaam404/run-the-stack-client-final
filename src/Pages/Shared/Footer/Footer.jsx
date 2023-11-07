import "./Footer.css"
import logo from "../../../../src/assets/logo.png"


const Footer = () => {
  return (
    <div id="animation" className="">
      <footer className="footer p-10 text-white">
        <div>
       
           
        <img src={logo} alt="" className="w-[150px] h-[80px]" />
         
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Run The Stack
          </p>
        </div>
        <div>
          <span className="footer-title">THE STACK</span>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Press</a>
          <a className="link link-hover">Work Here</a>
          <a className="link link-hover">Contact Us</a>
        </div>
        <div>
          <span className="footer-title">PRODUCTS</span>
          <a className="link link-hover">Teams</a>
          <a className="link link-hover">Advertising</a>
          <a className="link link-hover">Collectives</a>
          <a className="link link-hover">Talent</a>
        </div>
        <div>
          <span className="footer-title">POLICIES</span>
          <a className="link link-hover">Legal</a>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">CHANNELS</span>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Twitter</a>
          <a className="link link-hover">Linkedin</a>
          <a className="link link-hover">Instagram</a>
        </div>
      </footer>
    </div>

  );
};

export default Footer;
