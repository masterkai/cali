import React, { Component, Fragment } from 'react';
import DeskTopLayout from '../../components/layouts/deskTopLayout';
import withSizes from 'react-sizes';
import css from '../../styles/main.scss';
import OutlineBtn from '../../components/OutlineBtn';
import Footer from '../../components/Footer';
import MobileLayoutLevel2 from '../../components/layouts/MobileLayoutLevel2';
import StaticBanner from '../../components/includes/StaticBanner';
import Bonus from '../../components/Bonus';
import bonus from '../../data/bonus';
import Link from 'next/link';

const banner = {
  title: '優惠活動',
  desc:
    '卡利娛樂城致力為廣大玩家提供優質頂尖的網上博彩平臺，業務服務全力以赴，開立賬戶完全免費，存款5分鐘、取款10分鐘迅速完成。',
  pic: '/images/background/bonus.png'
};

const Promotions = ({ isMobile }) => {
  const renderBonusList = bonus =>
    bonus.map((b, i) => (
      <div key={i} className={css.bonus}>
        <img src={b.pic} alt="" className="img-responsive" />
        <div className={css.title}>{b.title}</div>
        <p>{b.context}</p>
        <div className={css.bottom}>
          <p className={css.time}>{b.time}</p>
          <Link
            as={`/promotions/post/${b.postid}`}
            href={{
              pathname: '/promotions/post',
              query: {
                postId: b.postid
              }
            }}
          >
            <a style={{ whiteSpace: 'nowrap' }}>更多</a>
          </Link>
        </div>
      </div>
    ));
  return (
    <Fragment>
      <DeskTopLayout>
        <div className="container">
          <StaticBanner
            title={banner.title}
            desc={banner.desc}
            bannerIMG={banner.pic}
          />
          <div className={css.bonusBox}>{renderBonusList(bonus)}</div>
        </div>

        <Footer />
      </DeskTopLayout>
      {isMobile && (
        <MobileLayoutLevel2 title="優惠活動" path={true}>
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
            <div className={css.bonusBox}>{renderBonusList(bonus)}</div>
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
export default withSizes(mapSizesToProps)(Promotions);
