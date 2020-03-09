import React, {Component, Fragment, useState} from 'react';
import DeskTopLayout from '../../components/layouts/deskTopLayout';
import withSizes from 'react-sizes';
import css from '../../styles/main.scss';
import OutlineBtn from '../../components/OutlineBtn';
import Footer from '../../components/Footer';
import MobileLayoutLevel2 from '../../components/layouts/MobileLayoutLevel2';

import StaticBanner from '../../components/includes/StaticBanner';
import SwitchTabs from '../../components/SwitchTabs';
import {withTheme} from '@material-ui/core';


const AppDownload = ({isMobile}) => {
  const banner = {
    title: '下載平台',
    desc: '卡利存取款簡易有效率，存款5分鐘完成、取款30分鐘內到帳！',
    pic: 'images/background/appDownload.png'
  };

  return (
    <Fragment>
      <DeskTopLayout>
        <div className="container">
          <div style={{backgroundColor: 'rgba(0,0,0,.65)'}}>
            <StaticBanner
              title={banner.title}
              desc={banner.desc}
              bannerIMG={banner.pic}
            />
            <div className={css.appDownload}>
              <div className={css.gameProvider}>
                <div className={css.gameProvider__header}>
                  <img src="/images/allbbet.png" alt="" className="img-responsive"/>
                  <div className={css.gameName}>
                    ALLBET<br/>
                    下載
                  </div>
                </div>
                <div className={css.downloadBody}>
                  <div className={css.downloadBody__group}>
                    <div className={css.platforum}>
                      <span className='iconfont icon_mobile-solid'/>
                      <div>APP版本</div>
                    </div>
                    <img src="/images/img-qr-cord-html5.png" alt="" className="img-responsive qr-code"/>
                  </div>
                  <div className={css.downloadBody__group}>
                    <div className={css.platforum}>
                      <span className='iconfont icon_html-brands'/>
                      <div>HTML5版本</div>
                    </div>
                    <img src="/images/img-qr-cord.png" alt="" className="img-responsive qr-code"/>
                  </div>
                </div>
              </div>
              <div className={css.gameProvider}>
                <div className={css.gameProvider__header}>
                  <img src="/images/DreamGaming.png" alt="" className="img-responsive" style={{width: 130}}/>
                  <div className={css.gameName}>
                    DREAM GAMING<br/>
                    下載
                  </div>
                </div>
                <div className={css.downloadBody}>
                  <div className={css.downloadBody__group}>
                    <div className={css.platforum}>
                      <span className='iconfont icon_apple-brands'/>
                      <div>iPhone</div>
                    </div>
                  </div>
                  <div className={css.downloadBody__group}>
                    <div className={css.platforum}>
                      <span className='iconfont icon_android'/>
                      <div>Android</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer/>
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

          </div>
        </MobileLayoutLevel2>
      )}
    </Fragment>
  );
};

const mapSizesToProps = ({width}) => ({
  isTablet: width >= 480 && width < 1024,
  isDesktop: width >= 1024,
  under768: width <= 768,
  isMobile: width <= 480
});
export default withSizes(mapSizesToProps)(AppDownload);
