import React from "react";
import Title from "./title";
import "./header.css";
import Logo from "../logo";

const Header = () => {
  return (
    <header>
      <div id='logo'>
        <Logo size={48} />
        <Title />
      </div>
      <div id='links'>
        <a href='https://github.com/sn8z/morningbrew' target='_blank'>
          <img
            src='/src/assets/github.png'
            alt='GitHub logo'
            width={32}
            height={32}
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
