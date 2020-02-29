import React, { Fragment, Component, useState } from 'react';
import Measure from 'react-measure';
import Marquee from 'react-smooth-marquee';
import Header from '../includes/Header';
import MainNav from '../includes/MainNavMobile';
import Head from 'next/head';
import css from '../../styles/main.scss';
import ScrollButton from '../ScrollButton';
import Drawer from '../Drawer';
import MainNavMobileLevel2 from '../includes/MainNavMobileLevel2';
import BottomNav from '../includes/BottomNav';

const MobileLayoutLevel2 = props => {
  const [navHeight, setNavHeight] = useState(0);
  const getHeight = height => {
    setNavHeight(height);
  };
  return (
    <Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1.0, user-scalable=0"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans+TC:300,400,500,700&display=swap&subset=chinese-traditional"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
          integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link rel="stylesheet" href="/css/styles.css" />
        <link rel="stylesheet" href="/css/iconfont.css" />
        <title>卡利娛樂城</title>
      </Head>
      <MainNavMobileLevel2
        title={props.title}
        getHeight={getHeight}
        path={props.path}
        back={props.back}
      />
      <div className="mainBG" style={{ marginTop: navHeight }}>
        {props.children}
      </div>
      <BottomNav />
      <style jsx>
        {`
          .mainBG::after {
            content: '';
            background: url(/images/stary_sky.png) repeat;
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
            background: linear-gradient(
              to right,
              #000000 0%,
              #6e41c4 50%,
              rgba(0, 0, 0, 1) 100%
            );
          }
        `}
      </style>
    </Fragment>
  );
};

export default MobileLayoutLevel2;
