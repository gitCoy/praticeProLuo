import React from 'react';
import './index.less';

const Footer = () => {
  const menu = [
    'Services',
    'Cases',
    'About us',
    'Thought Leadership',
    'Expert Insights',
    'Banking Financial Services and Industries',
    'Life Science',
    'Engineering blog',
  ];
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="footer-info">
          <div className="text heading3">Get in touch.</div>
          <span className="body3">
            Tell us how we can assist you and one of our
            <br />
          </span>
          <span className="body3">experienced mobile strategists will get in touch shortly.</span>
          <div className="footer-form">
            <div className="mini-form body2">
              <input placeholder="Name" required />
              <input placeholder="Company" required />
              <input placeholder="Phone" required />
              <input placeholder="Email" required />
            </div>
            <div className="big">
              <textarea className="detailed" placeholder="Name" />
              <button>Send message</button>
            </div>
          </div>
        </div>
        <div className="footer-right ">
          <div className="position">
            <div className="footer-logo">
              <img src="/img/logo(2).png" alt="logo" />
            </div>
            <div className="footer-menu link1">
              {menu.map((item, index) => {
                return (
                  <div className={`menu ${index > 3 ? 'menu-sub' : ''}`} key={index}>
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-message">
        <span className="title3">© 2020 Monstar Lab</span>
        <ul className="menu  link3">
          <li>Information Security Policy</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
