import React, { Component, Fragment } from 'react';
import DeskTopLayout from '../../components/layouts/deskTopLayout';
import MobileLayout from '../../components/layouts/MobileLayout';
import Footer from '../../components/Footer';
import GameNavigation from '../../components/GameNavigation';
import OutlineBtn from '../../components/OutlineBtn';
import withSizes from 'react-sizes';
import css from '../../styles/main.scss';

const Baccarat = ({ isMobile, isTablet, isDesktop }) => {
  return (
    <Fragment>
      <DeskTopLayout>
        <div className="container container-lg">
          <div className={css.gameFlex}>
            <div
              className={css.gameCardVertical}
              style={{
                backgroundImage:
                  'linear-gradient(180deg, rgba(0,0,0,0.00) 50%, #000000 85%),url(images/beauty/baccarat01.png),url(images/background/baccarat01.png)'
              }}
            >
              <span className="iconfont icon_allbet" />
              <OutlineBtn />
            </div>
            <div className={css.gameCardGroup}>
              <div
                className={css.gameCard}
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, rgba(0,0,0,0.00) 40%, #000000 80%),url(images/beauty/baccarat02.png),url(images/background/baccarat02.png)',
                  marginBottom: '15px'
                }}
              >
                <span className="iconfont icon_Cali_logo" />
                <OutlineBtn />
              </div>
              <div
                className={css.gameCard}
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, rgba(0,0,0,0.00) 40%, #000000 80%),url(images/beauty/baccarat03.png),url(images/background/baccarat03.png)',
                  marginBottom: '15px'
                }}
              >
                <span className="iconfont icon_SAgaming" />
                <OutlineBtn />
              </div>
              <div
                className={css.gameCard}
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, rgba(0,0,0,0.00) 40%, #000000 80%),url(images/beauty/baccarat04.png),url(images/background/baccarat04.png)'
                }}
              >
                <span
                  className="iconfont icon_DreamGaming"
                  style={{ fontSize: '7rem' }}
                />
                <OutlineBtn />
              </div>
              <div
                className={css.gameCard}
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, rgba(0,0,0,0.00) 40%, #000000 80%),url(images/beauty/baccarat05.png),url(images/background/baccarat05.png)'
                }}
              >
                <span className="iconfont icon_WM" />
                <OutlineBtn />
              </div>
            </div>
          </div>
          <GameNavigation />
        </div>
        <Footer />
      </DeskTopLayout>
      {isMobile && (
        <MobileLayout>
          <div className={css.mobileEmpty} />
          <div className={css.gameCardGroup__mobile}>
            <div
              className={css.gameCard}
              style={{
                backgroundImage:
                  'linear-gradient(90deg, rgba(0,0,0,0.00) 40%, #000000 80%),url(images/beauty/baccarat01-m.png),url(images/background/baccarat01.png)'
              }}
            >
              <span className="iconfont icon_allbet" />
              <OutlineBtn />
            </div>
            <div
              className={css.gameCard}
              style={{
                backgroundImage:
                  'linear-gradient(90deg, rgba(0,0,0,0.00) 40%, #000000 80%),url(images/beauty/baccarat02.png),url(images/background/baccarat02.png)'
              }}
            >
              <span className="iconfont icon_Cali_logo" />
              <OutlineBtn />
            </div>
            <div
              className={css.gameCard}
              style={{
                backgroundImage:
                  'linear-gradient(90deg, rgba(0,0,0,0.00) 40%, #000000 80%),url(images/beauty/baccarat03.png),url(images/background/baccarat03.png)'
              }}
            >
              <span className="iconfont icon_SAgaming" />
              <OutlineBtn />
            </div>
            <div
              className={css.gameCard}
              style={{
                backgroundImage:
                  'linear-gradient(90deg, rgba(0,0,0,0.00) 40%, #000000 80%),url(images/beauty/baccarat04.png),url(images/background/baccarat04.png)'
              }}
            >
              <span
                className="iconfont icon_DreamGaming"
                style={{ fontSize: '7rem' }}
              />
              <OutlineBtn />
            </div>
            <div
              className={css.gameCard}
              style={{
                backgroundImage:
                  'linear-gradient(90deg, rgba(0,0,0,0.00) 40%, #000000 80%),url(images/beauty/baccarat05.png),url(images/background/baccarat05.png)'
              }}
            >
              <span className="iconfont icon_WM" />
              <OutlineBtn />
            </div>
          </div>
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
export default withSizes(mapSizesToProps)(Baccarat);
