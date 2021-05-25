import React from 'react';
import PageLayout from '../../components/PageLayout';
import './index.less';

const Home = () => {
  return (
    <PageLayout>
      <div className="main ">
        <div className="tech">
          <div className="tech-left-text">
            <h1>Entering the Chinese Market</h1>
            <span>Market Access Strategy and Localisation Service</span>
            <span>
              Whether your business is oriented towards the B2B or B2C market, we will support it in
              entering China as efficiently as possible. The only thing you need to do is to focus
              on your core business, and we provide the strategies, operations, IT management and
              Sales and Marketing.
            </span>
          </div>
          <img className="tech-right-img" src="/banner 1.png" alt="banner1" />
        </div>
        <div className="tech">
          <div className="tech-left-img">
            <img className="tech-left-img" src="/banner 2 .png" alt="banner2" />
          </div>
          <div className="tech-right-text"></div>
        </div>
      </div>
      <div className="challenges">
        <h1>6 Challenges Clients Face when Entering China</h1>
        <div className="container">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>

        </div>
      </div>
    </PageLayout>
  );
};
export default Home;
