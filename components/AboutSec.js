import React, { Fragment } from 'react';
import SectionTitle from './includes/SectionTitle';
import Card from './Card';

const cardDataSet = [
  {
    pic: 'images/about/img-about1.png',
    title: '誠信與服務'
  },
  {
    pic: 'images/about/img-about2.png',
    title: '付款'
  },
  {
    pic: 'images/about/img-about3.png',
    title: '責任博彩'
  },
  {
    pic: 'images/about/img-about4.png',
    title: '嚴格保密及安全性維護'
  }
];

const AboutSec = () => (
  <Fragment>
    <div className="AboutSec">
      <div className="container">
        <SectionTitle subject="關於卡利" textShadow={true} />
        <div className="subTitle">亞洲最新興的博彩娛樂集團</div>
        <p>
          卡利娛樂城 (官方直營網址: cali99.net)
          為卡利集團專營的線上博奕平台，我們秉持誠信美譽、效率快速的宗旨，為會員提供優良完善的遊戲環境。
        </p>
        <div className="row">
          <div className="flex">
            {cardDataSet.map((c, index) => (
              <Card key={index} pic={c.pic} title={c.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
    <style jsx>
      {`
        @media (max-width: 479px){
                .subTitle {
                font-size: 1.5rem!important;
                margin-top: 20px;
                }
            }
        p {
          font-weight: 300;
          letter-spacing: 1px;
          line-height: 1.8;
          max-width: 620px;
          margin: 0 auto 38px;
          color: #fff;
          text-align: center;
          text-shadow: 0 2px 4px #000000;
        }
        .flex {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
        }

        .subTitle {
          color: #fff;
          font-size: 2.125rem;
          margin: -10px auto 20px;
          text-align: center;
          letter-spacing: 0;
          text-shadow: 0 2px 4px #000000;
        }
        .AboutSec::after {
          content: '';
          background: url(images/AboutSecBG.png) no-repeat;
          background-size: cover;
          opacity: 0.32;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          position: absolute;
          z-index: -1;
          filter: blur(3px);
        }
        .AboutSec {
          padding: 0 0 78px;
          position: relative;
          z-index: 0;
          background: rgba(0, 0, 0, 0.65);
        }
      `}
    </style>
  </Fragment>
);

export default AboutSec;
