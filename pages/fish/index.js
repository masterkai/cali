import React, { Component, Fragment } from 'react';
import DeskTopLayout from '../../components/layouts/deskTopLayout';
import withSizes from 'react-sizes';
import css from '../../styles/main.scss';
import OutlineBtn from '../../components/OutlineBtn';
import GameNavigation from '../../components/GameNavigation';
import Footer from '../../components/Footer';
import MobileLayoutLevel2 from '../../components/layouts/MobileLayoutLevel2';

const Fish = ({ isMobile, under768 }) => {
  return (
    <Fragment>
      <DeskTopLayout>
        <div className="container container-lg">
          <div className={`${css.gameFlex} ${css.gameFlex__fish}`}>
            <div
              className={`${css.gameCardVertical__fish}`}
              style={
                under768
                  ? {
                      backgroundImage:
                        'linear-gradient(90deg, rgba(0,0,0,0.00) 50%, #000000 85%),url(images/beauty/fish01.png),url(images/background/fish01.png)'
                    }
                  : {
                      backgroundImage:
                        'linear-gradient(180deg, rgba(0,0,0,0.00) 50%, #000000 85%),url(images/beauty/fish01.png),url(images/background/fish01.png)'
                    }
              }
            >
              <OutlineBtn name="開始" />
            </div>
            <div
              className={`${css.gameCardVertical__fish}`}
              style={
                under768
                  ? {
                      backgroundImage:
                        'linear-gradient(90deg, rgba(0,0,0,0.00) 50%, #000000 85%),url(images/beauty/fish02.png),url(images/background/fish02.png)'
                    }
                  : {
                      backgroundImage:
                        'linear-gradient(180deg, rgba(0,0,0,0.00) 50%, #000000 85%),url(images/beauty/fish02.png),url(images/background/fish02.png)'
                    }
              }
            >
              <OutlineBtn name="開始" />
            </div>
          </div>
          <GameNavigation />
        </div>
        <Footer />
      </DeskTopLayout>
      {isMobile && (
        <MobileLayoutLevel2 title="捕魚王" path={true}>
          <div
            className={css.gameCardGroup__mobile}
            style={{ height: '650px' }}
          >
            <div
              className={css.gameCard}
              style={{
                backgroundImage:
                  'linear-gradient(90deg, rgba(0,0,0,0.00) 40%, rgba(0,0,0,0.75) 100%),url(images/beauty/fish01.png),url(images/background/fish01.png)',
                backgroundSize: 'cover, 55%, cover',
                backgroundPosition: 'center, left top, center'
              }}
            >
              <OutlineBtn name="開始" />
            </div>
            <div
              className={css.gameCard}
              style={{
                backgroundImage:
                  'url(images/beauty/fish02.png),linear-gradient(90deg, rgba(0,0,0,0.00) 40%, rgba(0,0,0,0.75) 100%),url(images/background/fish02.png)',
                backgroundSize: ' 73%,cover, cover',
                backgroundPosition: 'left top,center,  center'
              }}
            >
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
export default withSizes(mapSizesToProps)(Fish);
