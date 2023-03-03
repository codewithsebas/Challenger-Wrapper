import twitter from "../assets/socials/twitter.svg";
import facebook from "../assets/socials/facebook.svg";
import instagram from "../assets/socials/instagram.svg";
import whatsapp from "../assets/socials/whatsapp.svg";

export default function Footer() {
  return (
    <footer>
      <div className="logoFooter">
        <div>
        <img src="/Vector.svg" alt="Logo" />
        <p className="footerDescrip">
          It is a long established fact that a <br /> reader will be distracted
          by the <br />
          readable content of a page <br /> whenters.
        </p>
        <div className="socials">
          <div className="twitter">
            <img src={twitter} alt="Twitter" />
          </div>

          <div className="facebook">
            <img src={facebook} alt="Facebook" />
          </div>

          <div className="instagram">
            <img src={instagram} alt="Instagram" />
          </div>
        </div>
        </div>
      </div>
      <div className="menuFooter">
        <div className="minMenu">
          <h2 className="minTitle">About Us</h2>
          <div className="column">
            <li>About</li>
            <li>Privacy & Policy</li>
            <li>Terms & Conditions</li>
            <li>Faq</li>
          </div>
        </div>

        <div className="minMenu">
          <h2 className="minTitle">Navigate</h2>
          <div className="column">
            <li>How We Work</li>
            <li>Services</li>
            <li>Faq</li>
            <li>Contact</li>
            <li>Free Quote</li>
          </div>
        </div>

        <div className="minMenu">
          <h2 className="minTitle">About Us</h2>
          <div className="column">
            <li>Ricardo Margain 444</li>
            <li>Call +52 81 1234 5678</li>
            <li>Email: info@challenge.com</li>
            <div className="whatsapp">
                <img src={whatsapp} alt="Whatsapp" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
