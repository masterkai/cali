import React, { Component, Fragment } from 'react';
import DeskTopLayout from '../../components/layouts/deskTopLayout';
import withSizes from 'react-sizes';
import css from '../../styles/main.scss';
import OutlineBtn from '../../components/OutlineBtn';
import GameNavigation from '../../components/GameNavigation';
import Footer from '../../components/Footer';
import MobileLayoutLevel2 from '../../components/layouts/MobileLayoutLevel2';

const Lottery = ({ isMobile, under768 }) => {
  return (
    <Fragment>
      <DeskTopLayout>
        <div className="container container-lg">
          <div className={`${css.gameFlex} ${css.gameFlex__bingo}`}>
            <div
              className={`${css.gameCardVertical__bingo}`}
              style={
                under768
                  ? {
                      backgroundImage:
                        'linear-gradient(90deg, rgba(0,0,0,0.00) 50%, #000000 85%),url(images/beauty/bingo01.png),url(images/background/bingo01.png)'
                    }
                  : {
                      backgroundImage:
                        'linear-gradient(180deg, rgba(0,0,0,0.00) 50%, #000000 85%),url(images/beauty/bingo01.png),url(images/background/bingo01.png)'
                    }
              }
            >
              <span className="iconfont icon_SUPERbingo" />
              <OutlineBtn name="開始" />
            </div>
            <div
              className={`${css.gameCardVertical__bingo}`}
              style={
                under768
                  ? {
                      backgroundImage:
                        'linear-gradient(90deg, rgba(0,0,0,0.00) 50%, #000000 85%),url(images/beauty/bingo02.png),url(images/background/bingo02.png)'
                    }
                  : {
                      backgroundImage:
                        'linear-gradient(180deg, rgba(0,0,0,0.00) 50%, #000000 85%),url(images/beauty/bingo02.png),url(images/background/bingo02.png)'
                    }
              }
            >
              <span className="iconfont icon_Klottery" />
              <OutlineBtn name="開始" />
            </div>
          </div>
          <GameNavigation />
        </div>
        <Footer />
      </DeskTopLayout>
      {isMobile && (
        <MobileLayoutLevel2 title="賓果彩票" path={true}>
          <div
            className={css.gameCardGroup__mobile}
            style={{ height: '650px' }}
          >
            <div
              className={css.gameCard}
              style={{
                backgroundImage:
                  'linear-gradient(90deg, rgba(0,0,0,0.00) 40%, #000000 80%),url(images/beauty/bingo01.png),url(images/background/bingo01.png)',
                backgroundSize: 'cover, 50%, cover',
                backgroundPosition: 'center, left top, center'
              }}
            >
              <span className="iconfont icon_SUPERbingo" />
              <OutlineBtn name="開始" />
            </div>
            <div
              className={css.gameCard}
              style={{
                backgroundImage:
                  'linear-gradient(90deg, rgba(0,0,0,0.00) 40%, #000000 80%),url(images/beauty/bingo02.png),url(images/background/bingo02.png)',
                backgroundSize: 'cover, 50%, cover',
                backgroundPosition: 'center, left top, center'
              }}
            >
              <span className="iconfont icon_Klottery" />
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
export default withSizes(mapSizesToProps)(Lottery);
