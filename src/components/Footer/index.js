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
          <div className="text">Get in touch.</div>
          <span>
            Tell us how we can assist you and one of our
            <br />
          </span>
          <span>experienced mobile strategists will get in touch shortly.</span>
          <div className="footer-form">
            <div className="mini-form">
              <input placeholder="Name" />
              <input placeholder="Company" />
              <input placeholder="Phone" />
              <input placeholder="Email" />
            </div>
            <div className="big">
              <input placeholder="Name" />
              <button>Send message</button>
            </div>
          </div>
        </div>
        <div className="footer-right ">
          <div className="position">
            <div className="footer-logo">
              <img src="/logo(2).png" alt="logo" />
            </div>
            <div className="footer-menu">
              {menu.map((item, index) => {
                return (
                  <a
                    className={`menu ${index > 3 ? 'menu-sub' : ''} ${
                      index == 3 ? 'sub-color' : ''
                    } `}
                    key={index}
                  >
                    {item}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-message">
        <span>© 2020 Monstar Lab</span>
        <span>Information Security Policy</span>
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
      </div>
    </div>
  );
};
export default Footer;
