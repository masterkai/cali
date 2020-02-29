import React, { Component, Fragment } from 'react';
import DeskTopLayout from '../../components/layouts/deskTopLayout';
import withSizes from 'react-sizes';
import css from '../../styles/main.scss';
import OutlineBtn from '../../components/OutlineBtn';
import Footer from '../../components/Footer';
import MobileLayoutLevel2 from '../../components/layouts/MobileLayoutLevel2';

import StaticBanner from '../../components/includes/StaticBanner';
import SwitchTabs from '../../components/SwitchTabs';
import { withTheme } from '@material-ui/core';

const banner = {
  title: '關於卡利',
  desc:
    '卡利娛樂城 (官方直營網址: cali99.net) 為卡利集團專營的線上博奕平台，我們秉持誠信美譽、效率快速的宗旨，為會員提供優良完善的遊戲環境。',
  pic: 'images/background/about.png'
};
const banner02 = {
  title: '亞洲最頂級的線上博彩娛樂平台',
  desc:
    '卡利集團（Calibet），以研發優質線上博奕平臺為宗旨。隨著近年來網路博彩的風潮而起，在高超網路技術團隊之下，將數十位博彩專家的精隨發揮得淋漓盡致，成功打造出一個以真人百家樂遊戲為主的頂級博彩平臺。',
  pic: 'images/background/about02.png'
};

const About = ({ isMobile }) => {
  return (
    <Fragment>
      <DeskTopLayout>
        <div className="container">
          <div style={{ backgroundColor: 'rgba(0,0,0,.65)' }}>
            <StaticBanner
              title={banner.title}
              desc={banner.desc}
              bannerIMG={banner.pic}
            />
            <div
              className={css.banner02}
              style={{ backgroundImage: `url(${banner02.pic})` }}
            >
              <div>
                <div className={css.title}>{banner02.title}</div>
                <div className={css.desc}>{banner02.desc}</div>
              </div>
            </div>
            <div style={{ padding: '5px 40px 20px' }}>
              <div
                style={{
                  padding: '20px 40px',
                  border: '1px solid white',
                  color: 'white',
                  lineHeight: '2'
                }}
              >
                卡利集團為政府的發牌及監管單位First Cagayan Leisure & Resort
                Corporation (FCLRC) 和 Cagayan Economic Zone Authority (CEZA)
                認可與授權的線上博奕平台，合法經營網路博彩遊戲。
                真人直播視頻的攝影棚皆符合國際標章，利用頂尖的技術在網路上將真實賭場完美呈現。以玩家的使用角度來開發優質的功能，給玩家高畫質流暢的視訊體驗，簡易操作的頁面，讓玩家只要在有網路的環境下，都能致勝千里！
              </div>
            </div>
            <SwitchTabs />
          </div>
        </div>

        <Footer />
      </DeskTopLayout>
      {isMobile && (
        <MobileLayoutLevel2 title="關於卡利" path={true}>
          <div
            className={css.mobileBox_nobg}
            style={{
              height: 'auto',
              paddingBottom: 80,
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 0
            }}
          >
            <StaticBanner
              title={banner.title}
              desc={banner.desc}
              bannerIMG={banner.pic}
            />
            <div style={{ padding: 20 }}>
              <div style={{ color: '#FFCF4C', marginBottom: 10 }}>
                亞洲最頂級的線上博彩娛樂平台
              </div>
              <div
                style={{ color: 'white', textAlign: 'justify', fontSize: 12 }}
              >
                卡利集團（Calibet），以研發優質線上博奕平臺為宗旨。隨著近年來網路博彩的風潮而起，在高超網路技術團隊之下，將數十位博彩專家的精隨發揮得淋漓盡致，成功打造出一個以真人百家樂遊戲為主的頂級博彩平臺。
              </div>
            </div>
            <div style={{ padding: '20px' }}>
              <div
                style={{
                  padding: '20px',
                  border: '1px solid white',
                  borderRadius: 5,
                  color: 'white',
                  lineHeight: '2'
                }}
              >
                卡利集團為政府的發牌及監管單位First Cagayan Leisure & Resort
                Corporation (FCLRC) 和 Cagayan Economic Zone Authority (CEZA)
                認可與授權的線上博奕平台，合法經營網路博彩遊戲。
                真人直播視頻的攝影棚皆符合國際標章，利用頂尖的技術在網路上將真實賭場完美呈現。以玩家的使用角度來開發優質的功能，給玩家高畫質流暢的視訊體驗，簡易操作的頁面，讓玩家只要在有網路的環境下，都能致勝千里！
              </div>
            </div>
            <SwitchTabs />
          </div>
        </MobileLayoutLevel2>
      )}
    </Fragment>
  );
};

const mapSizesToProps = ({ width }) => ({
  isTablet: width >= 480 && width < 1024,
  isDesktop: width >= 1024,
  under768: width <= 768,
  isMobile: width <= 480
});
export default withSizes(mapSizesToProps)(About);
