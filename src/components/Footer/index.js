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
    <div className="footer grid">
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
              <input className="input-field" placeholder="Name" required />
              <input className="input-field" placeholder="Company" required />
              <input className="input-field" placeholder="Phone" type="email" required />
              <input className="input-field" placeholder="Email" type="tel" required />
              <label className="form-costom">
                <input
                  className="custom-checkbox"
                  type="checkbox"
                  name="agreement"
                  id="agreement"
                />
                <span>
                  I agree to Monstar Labs’{' '}
                  <a className="link3" href="/policy-cn/" target="_blank">
                    Data Policy
                  </a>{' '}
                </span>
              </label>
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
                  <div
                    className={`menu-hover ${index > 3 ? 'menu-sub' : ''} ${
                      index < 2 ? 'menu' : ''
                    } `}
                    key={index}
                  >
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
