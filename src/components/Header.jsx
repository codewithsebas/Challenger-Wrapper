import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { useState } from "react";

export default function Header() {
  const [slideMenu, setSlideMenu] = useState(false);
  return (
    <header>
      <div className="logo">
        <img src="/Vector.svg" alt="Logo" />
      </div>
      <ul className="menu">
        <li>How We Work</li>
        <li>Services</li>
        <li>Free Quote</li>
        <li>Contact</li>
      </ul>
      <div onClick={() => setSlideMenu(true)} className="menuMobile">
        <img src={menu} alt="Menu" />
      </div>
      <div className={`${slideMenu ? "backClose" : "backCloseSlide"}`}>
        <div className={`${slideMenu ? "menuSlide" : " menuSlideClose"}`}>
          <div className="top">
            <div className="logo">
              <img src="/Vector.svg" alt="Logo" />
            </div>
            <div className="close" onClick={() => setSlideMenu(false)}>
              <img src={close} alt="Logo" />
            </div>
          </div>
          <div className="mobile">
            <li>How We Work</li>
            <li>Services</li>
            <li>Free Quote</li>
            <li>Contact</li>
          </div>
        </div>
      </div>
    </header>
  );
}
