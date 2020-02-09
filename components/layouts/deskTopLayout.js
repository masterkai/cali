import React, {Fragment} from 'react'
import Marquee from "react-smooth-marquee"
import Header from '../includes/Header'
import NainNav from '../includes/NainNav'
import Head from 'next/head';
import css from "../../styles/main.scss"


const DeskTopLayout = props => (
  <Fragment>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Noto+Sans+TC:300,400,500,700&display=swap&subset=chinese-traditional"
        rel="stylesheet"/>
      <link rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css"/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <link rel="stylesheet" type="text/css" charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
      <link rel="stylesheet" type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
      <link rel="stylesheet" href="/css/styles.css"/>
      <link rel="stylesheet" href="/css/iconfont.css"/>
      <script src="js/light.min.js"/>
      <script src="js/brands.min.js"/>
      <script src="js/fontawesome.min.js"/>
      <title>卡利娛樂城</title>
    </Head>
    <div className="superAwesome">
      <Header/>
      <NainNav/>
      <div className={css.marquee}>
        <i className="fal fa-volume-up"></i>

        <div className={css.marquee_flexContainer}>
          <Marquee>
            <p className={css.marquee_text}>溫馨提示：尊敬的【卡利娛樂城】會員您好！
              2020-01-08號天天返水最高1.8%，已經返回到您的遊戲賬號中，請您登入查收！轉賬到公司指定銀行卡，提交入款信息可得到次次存次次送1.3%入款優惠，謝謝。</p>
          </Marquee>
        </div>
      </div>
      <div className='mainBG'>
        {props.children}
      </div>
      <style jsx>{
        `
          .mainBG::after {
          content: "";
          background: url(images/stary_sky.png) repeat;
          background-size: 30%;
          filter: contrast(100%);
          opacity: 0.32;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          position: absolute;
          z-index: -1;   
          }
          .mainBG {
          position: relative;
          z-index: 0;
          background: linear-gradient(to right, #000000 0%, #6e41c4 50%, rgba(0,0,0,1) 100%);
          }`
      }

      </style>
    </div>

  </Fragment>
);

export default DeskTopLayout