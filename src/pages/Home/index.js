import React from 'react';
import PageLayout from '../../components/PageLayout';
import './index.less';

const Home = () => {
  const challenges = [
    'A High-context Culture',
    'Different Business Environment',
    'Domestic Regional Differentiation',
    'Diversity of digital expression',
    'Different user preferences',
    'Different technical rules and requirements',
  ];
  const solutions = [
    'Market research & Digital strategy',
    'Product localisation',
    'Local companies visiting',
    'Cooperation & Partner searching',
    'Sales & marketing support',
  ];
  const partnersSubtitle = [
    'Digital marketing',
    'Cloud servers',
    'HR & Accounting',
    'Gov. & Institutions',
    'Demestic IT & Business Partners',
  ];
  const serviceTitle = [
    'Localised language',
    'Localised UX',
    'Localised App/Web/System',
    'WeChat/Mini program development',
    'Localised IT architecture',
  ];
  return (
    <PageLayout>
      <div className="main ">
        <div className="tech">
          <div className="tech-left-text">
            <div className="heading3">Entering the Chinese Market</div>
            <div className="body3">Market Access Strategy and Localisation Service</div>
            <div className="title2">Market Access Solution</div>
            <div className="body3">
              Whether your business is oriented towards the B2B or B2C market, we will support it in
              entering China as efficiently as possible. The only thing you need to do is to focus
              on your core business, and we provide the strategies, operations, IT management and
              Sales and Marketing.
            </div>
          </div>
          <img className="tech-right-img" src="/img/banner 1.png" alt="banner1" />
        </div>
        <div className="tech">
          <div className="tech-left-img">
            <img className="tech-left-img" src="/img/banner 2 .png" alt="banner2" />
          </div>
          <div className="tech-right-text">
            <div className="title2">Product Localisation</div>
            <div className="body3">
              Scale your B2C business. We transform your digital product to a localised one, or
              develop a brand new one to match the needs of the Chinese users. We usually start the
              process with the UX research based on the business model, then we build the agile
              IT-architecture corresponding to the local characteristics. Finally we deliver the
              product in the highest possible quality.
            </div>
          </div>
        </div>
      </div>
      <div className="challenges">
        <div className="challenges-title  heading3">
          6 Challenges Clients Face when Entering China
        </div>
        <div className="container">
          {challenges.map((item) => {
            return (
              <div key={item}>
                <div className="challenges-text title2"> {item}</div>{' '}
                <div className="yellow-block"></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="solution">
        <div className="solution-left">
          <ul className="solution-text">
            <li className="title2">Market Access Solution</li>
            <li className="heading3">
              Focus On <br />
              your Core Business
            </li>
            <li className="body3">
              To speeden up the process of entering the Chinese market, we help our clients
              establish the action plans by consulting and developing business strategies, processes
              for digital transformation, IT, being the client’s spokespeople, constructing local
              teams etc.{' '}
            </li>
          </ul>
        </div>
        <div className="solution-right">
          <div className="solution-right-bottom">
            {solutions.map((item) => {
              return (
                <div key={item}>
                  <div className="solution-box">
                    {' '}
                    <div className="title2">{item}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="partner">
        <div className="partner-text">
          <div className="heading3">Solution Partners and Offerings</div>
          <div className="partner-mid body3">
            In addition to consulting on your go-to-market strategy and plan, we also collaborate
            with partners that provide the below. This means that we are available and can support
            the client every step of the way.
          </div>
        </div>
        <div className="partner-subtitle">
          {partnersSubtitle.map((item) => {
            return (
              <div key={item}>
                <div className="subtitle-box title2"> {item}</div>
              </div>
            );
          })}
        </div>
        <img src="/img/logo(1).png" alt="partner" />
      </div>
      <div className="service">
        <ul className="service-text">
          <li className="title2">Product Localisation</li>
          <li className="heading3">Perfect Digital Actions in the Local Market</li>
          <li className="body3">
            When our global clients target the Chinese market, we offer product localisation
            services. We offer the whole package from translations to developing products matching
            the Chinese users’ behaviour, needs and culture.
          </li>
        </ul>
        <img src="/img/配图.png" alt="service-img" />
        <div className="service-title">
          {serviceTitle.map((item) => {
            return (
              <div key={item}>
                <div className="title2"> {item}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="service2">
        <ul className="service2-text">
          <li className="title2">Product Localisation</li>
          <li className="heading3">Local & Global Delivery Model</li>
          <li className="body3">
            As our localisation partner, AWS China will offer global servers and data services in
            line with Chinese standards, to solve basic structural problems, and build better local
            digital experiences. It is very stable and the security is at the highest, but above
            all, your existing databases can be transferred into a Chinese account easily and fast.
          </li>
          <br />
          <li className="body3">
            We will recommend AliCloud when you plan to operate a new product in China, it can meet
            most of the development and data requirements in high security and speed, and have
            stable performance.
          </li>
        </ul>
        <div className="service2-right">
          <div className="service2-main">
            <img src="/img/AWS.png" alt="aws" />
            <div className="aws">
              <ul className="aws-text">
                <li className="title2">AWS Migration Strategy/Execution</li>
                <li className="body3">
                  <ul>
                    <li>Database synchronization </li>
                    <li>Links optimization</li>
                    <li> Alternative architecture for services not available in domestic market</li>
                  </ul>
                </li>
                <li className="title2">Account agent</li>
                <li className="body3">
                  Proxy services such as filing of records for transactions that require a domestic
                  corporation
                </li>
                <li className="title2">AWS maintenance and operation</li>
              </ul>
            </div>
            <img src="/img/阿里云.png" alt="ali" />
            <div className="aliCloud">
              <ul className="aliCloud-text title2">
                <li>Server</li>
                <li>Database</li>
                <li>Domain names and Websites</li>
                <li>Storage and networking</li>
                <li>Chinese SDK</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="case">
        <div className="case-text">
          <div className="heading3">Cases that Optimised Penetration in the Chinese Market</div>
          <div className="readMore">
            <div className="body3">
              We use our strategic toolbox to define a true valuable and actionable strategy which
              in turn delivers success for our clients.
            </div>
            <div className="link1">Read more about the services and cases</div>
          </div>
        </div>
        <div className="case-bottom">
          <div>
            <img src="/img/案例 1.png" alt="case" />
            <div className="description title2">
              <div className="width">
                {' '}
                Localization of the Japan Second-hand Luxury E- commerce Platform
              </div>
            </div>
          </div>
          <div>
            <img src="/img/案例 2.png" alt="case" />
            <div className="description title2">
              <div className="width">
                {' '}
                Maternal and parenting short video WeChat Mini Program product.
              </div>
            </div>
          </div>
          <div>
            {' '}
            <img src="/img/案例 3.png" alt="case" />
            <div className="description title2">
              <div className="width">
                {' '}
                Chinese UX Research for large luxury resort catered to Chinese tourists
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="boss">
        <img src="/img/人物.png" alt="boss" />
        <div className="boss-text">
          <div className="paragraph1 body3">Talk to our experts today, they are here to help.</div>
          <div className="paragraph2 body3">
            “The Chinese market is relatively closed, highly digitalized, but with a huge potential.
            Since 2010, we have collaborated with global clients supporting them in entering the
            market. In our experience there are three keys to success:{' '}
          </div>
          <div className="paragraph3 heading4">
            <ul>
              <li> 1) China business mindset </li>
              <li> 2) Efficient digitalization </li>
              <li> 3) Trusted local partners.”</li>
            </ul>
          </div>
          <div className="introduction body3">Anthea Zhang, CEO, Monstar Lab China</div>
        </div>
      </div>
    </PageLayout>
  );
};
export default Home;
