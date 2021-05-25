import React from 'react';
import './index.less';
const Header = () => {
  const menu = ['Services', 'Cases', 'About', 'Careers', 'Thought Leadership', 'Contact'];
  return (
    <div className="header-wrap">
      <div className="header-left">
        <div className="header-language">
          Global
          <div className="dropdown-content">chinese</div>
        </div>
        <div className="header-logo">
          <img src="/logo.png" alt="logo" />
        </div>
      </div>
      <div className="header-right">
        {menu.map((item, index) => {
          return (
            <a className="menu" key={index}>
              {item}
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Header;
