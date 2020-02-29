import React, { Fragment, useState } from 'react';
import withSizes from 'react-sizes';
import DeskTopLayout from '../components/layouts/deskTopLayout';
import MobileLayout from '../components/layouts/MobileLayout';
import StartPlayingDesktop from '../components/StartPlayingDesktop';
import UserEvaluationSec from '../components/UserEvaluationSec';
import Bonus from '../components/Bonus';
import AboutSec from '../components/AboutSec';
import Footer from '../components/Footer';
import Slider from 'react-slick';
import SectionTitle from '../components/includes/SectionTitle';
import css from '../styles/main.scss';
import Marquee from 'react-smooth-marquee';
import MobileIndex from '../components/mobileIndex';
import bonus from '../data/bonus';

const settings = {
  autoplay: true,
  dots: true,
  infinite: true,
  arrows: true,
  fade: true,
  speed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1
};
const settings_mobile = {
  autoplay: true,
  dots: true,
  infinite: true,
  arrows: false,
  fade: true,
  speed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1
};
const settings_bonus = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const Index = ({ isMobile, isTablet, isDesktop }) => {
  return (
    <Fragment>
      <DeskTopLayout>
        <Slider {...settings}>
          <img
            src="images/banner/banner01.jpg"
            alt=""
            className="img-responsive"
          />
          <img
            src="images/banner/banner02.jpg"
            alt=""
            className="img-responsive"
          />
          <img
            src="images/banner/banner03.jpg"
            alt=""
            className="img-responsive"
          />
          <img
            src="images/banner/banner04.jpg"
            alt=""
            className="img-responsive"
          />
        </Slider>
        <div className="container">
          <SectionTitle subject="開始遊玩" />

          <StartPlayingDesktop />

          <SectionTitle subject="優惠活動" />

          <Slider {...settings_bonus}>
            {bonus.map((b, i) => (
              <Bonus
                key={i}
                pic={b.pic}
                title={b.title}
                time={b.time}
                context={b.context}
              />
            ))}
          </Slider>
        </div>
        <UserEvaluationSec />
        <AboutSec />
        <Footer />
      </DeskTopLayout>
      {isMobile && (
        <MobileLayout>
          <Slider {...settings_mobile}>
            <img
              src="images/banner/banner01.jpg"
              alt=""
              className="img-responsive"
            />
            <img
              src="images/banner/banner02.jpg"
              alt=""
              className="img-responsive"
            />
            <img
              src="images/banner/banner03.jpg"
              alt=""
              className="img-responsive"
            />
            <img
              src="images/banner/banner04.jpg"
              alt=""
              className="img-responsive"
            />
          </Slider>
          <div className={css.marquee}>
            <span className="iconfont icon_volume-up-solid" />

            <div className={css.marquee_flexContainer}>
              <Marquee velocity={0.05}>
                <p className={css.marquee_text}>
                  溫馨提示：尊敬的【卡利娛樂城】會員您好！
                  2020-01-08號天天返水最高1.8%，已經返回到您的遊戲賬號中，請您登入查收！轉賬到公司指定銀行卡，提交入款信息可得到次次存次次送1.3%入款優惠，謝謝。
                </p>
              </Marquee>
            </div>
          </div>
          <MobileIndex />
        </MobileLayout>
      )}
    </Fragment>
  );
};

const mapSizesToProps = ({ width }) => ({
  isTablet: width >= 480 && width < 1024,
  isDesktop: width >= 1024,
  isMobile: width <= 480
});
export default withSizes(mapSizesToProps)(Index);
