import React, { Component, Fragment } from 'react';
import DeskTopLayout from '../../components/layouts/deskTopLayout';
import withSizes from 'react-sizes';
import css from '../../styles/main.scss';
import OutlineBtn from '../../components/OutlineBtn';
import GameNavigation from '../../components/GameNavigation';
import Footer from '../../components/Footer';
import MobileLayoutLevel2 from '../../components/layouts/MobileLayoutLevel2';

const Electronics = ({ isMobile, under768 }) => {
  return (
    <Fragment>
      <DeskTopLayout>
        <div className="container container-lg">
          <div className={`${css.gameFlex} ${css.gameFlex__electronics}`}>
            <div
              className={`${css.gameCardVertical__electronics}`}
              style={
                under768
                  ? {
                      backgroundImage:
                        'linear-gradient(90deg, rgba(0,0,0,0.00) 50%, #000000 85%),url(images/beauty/elec01.png),url(images/background/elec01.png)'
                    }
                  : {
                      backgroundImage:
                        'linear-gradient(180deg, rgba(0,0,0,0.00) 50%, #000000 85%),url(images/beauty/elec01.png),url(images/background/elec01.png)'
                    }
              }
            >
              <span className="iconfont icon_realtime-gaming" />
              <OutlineBtn name="開始" />
            </div>
            <div
              className={`${css.gameCardVertical__electronics}`}
              style={
                under768
                  ? {
                      backgroundImage:
                        'linear-gradient(90deg, rgba(0,0,0,0.00) 50%, #000000 85%),url(images/beauty/elec02.png),url(images/background/elec02.png)'
                    }
                  : {
                      backgroundImage:
                        'linear-gradient(180deg, rgba(0,0,0,0.00) 50%, #000000 85%),url(images/beauty/elec02.png),url(images/background/elec02.png)'
                    }
              }
            >
              <span className="iconfont iconicon_SAGAMING_horizontal" />
              <OutlineBtn name="開始" />
            </div>
            <div
              className={`${css.gameCardVertical__electronics}`}
              style={
                under768
                  ? {
                      backgroundImage:
                        'linear-gradient(90deg, rgba(0,0,0,0.00) 50%, #000000 85%),url(images/beauty/elec03.png),url(images/background/elec03.png)'
                    }
                  : {
                      backgroundImage:
                        'linear-gradient(180deg, rgba(0,0,0,0.00) 50%, #000000 85%),url(images/beauty/elec03.png),url(images/background/elec03.png)'
                    }
              }
            >
              <span className="iconfont icon_betixion" />
              <OutlineBtn name="開始" />
            </div>
            <div
              className={`${css.gameCardVertical__electronics}`}
              style={
                under768
                  ? {
                      backgroundImage:
                        'linear-gradient(90deg, rgba(0,0,0,0.00) 50%, #000000 85%),url(images/beauty/elec04.png),url(images/background/elec04.png)'
                    }
                  : {
                      backgroundImage:
                        'linear-gradient(180deg, rgba(0,0,0,0.00) 50%, #000000 85%),url(images/beauty/elec04.png),url(images/background/elec04.png)'
                    }
              }
            >
              <span className="iconfont icon_betsoft" />
              <OutlineBtn name="開始" />
            </div>
          </div>
          <GameNavigation />
        </div>
        <Footer />
      </DeskTopLayout>
      {isMobile && (
        <MobileLayoutLevel2 title="電子遊戲" path={true}>
          <div
            className={css.gameCardGroup__mobile}
            style={{ height: '750px' }}
          >
            <div
              className={css.gameCard}
              style={{
                backgroundImage:
                  'linear-gradient(90deg, rgba(0,0,0,0.00) 40%, #000000 80%),url(images/beauty/elec01.png),url(images/background/elec01.png)',
                backgroundSize: 'cover, 50%, cover',
                backgroundPosition: 'center, left top, center'
              }}
            >
              <span className="iconfont icon_realtime-gaming" />
              <OutlineBtn name="開始" />
            </div>
            <div
              className={css.gameCard}
              style={{
                backgroundImage:
                  'linear-gradient(90deg, rgba(0,0,0,0.00) 40%, #000000 80%),url(images/beauty/elec02.png),url(images/background/elec02.png)',
                backgroundSize: 'cover, 50%, cover',
                backgroundPosition: 'center, left top, center'
              }}
            >
              <span className="iconfont iconicon_SAGAMING_horizontal" />
              <OutlineBtn name="開始" />
            </div>
            <div
              className={css.gameCard}
              style={{
                backgroundImage:
                  'linear-gradient(90deg, rgba(0,0,0,0.00) 40%, #000000 80%),url(images/beauty/elec03.png),url(images/background/elec03.png)',
                backgroundSize: 'cover, 50%, cover',
                backgroundPosition: 'center, left top, center'
              }}
            >
              <span className="iconfont icon_betixion" />
              <OutlineBtn name="開始" />
            </div>
            <div
              className={css.gameCard}
              style={{
                backgroundImage:
                  'linear-gradient(90deg, rgba(0,0,0,0.00) 40%, #000000 80%),url(images/beauty/elec04.png),url(images/background/elec04.png)',
                backgroundSize: 'cover, 50%, cover',
                backgroundPosition: 'center, left top, center'
              }}
            >
              <span className="iconfont icon_betsoft" />
              <OutlineBtn name="開始" />
            </div>
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
export default withSizes(mapSizesToProps)(Electronics);
