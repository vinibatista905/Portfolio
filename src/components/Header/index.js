import React, { useState } from "react";
import Web from "./web";
import Mobile from "./mobile";

import "./Header.scss";
import { HiMenu } from "react-icons/hi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <div className="logo">
        <img className='logo-img' src={require('../../assets/code-2.png').default} />
        Portfolio</div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={() => setIsOpen(!isOpen)}>
            <HiMenu className='menu-icon' />
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
