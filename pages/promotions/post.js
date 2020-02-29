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

class Post extends Component {
  static getInitialProps({ query }) {
    // console.log('query:', post);
    // console.log(bonus);
    let post = bonus[query.postId - 1];
    return { post };
  }
  showPostDesktop = post => (
    <div className={`${css.bonusBox} ${css.bonusBox__innerpage}`}>
      <img
        style={{ width: '100%' }}
        src={post.mpic}
        alt=""
        className="img-responsive"
      />
      <div className={css.bonusTitle}>{post.title}</div>
      <div className={css.bonusContext}>{post.context}</div>
      <OutlineBtn name="返回" back={true} />
    </div>
  );
  showPost = post => (
    <div className={css.bonusBox}>
      <img
        style={{ width: '100%' }}
        src={post.pic}
        alt=""
        className="img-responsive"
      />
      <div className={css.bonusTitle}>{post.title}</div>
      <div className={css.bonusContext}>{post.context}</div>
      <OutlineBtn name="返回" back={true} />
    </div>
  );

  render() {
    // console.log(this.props);
    const { post } = this.props;
    return (
      <Fragment>
        <DeskTopLayout>
          <div className="container">
            <StaticBanner
              title={banner.title}
              desc={banner.desc}
              bannerIMG={banner.pic}
            />
            {this.showPostDesktop(post)}
          </div>

          <Footer />
        </DeskTopLayout>
        <div className={css.displayMobile}>
          <MobileLayoutLevel2 title="優惠活動" back={true}>
            <div
              className={css.mobileBox_nobg}
              style={{
                height: '650px',
                paddingBottom: 80,
                paddingTop: 0
              }}
            >
              {this.showPost(post)}
            </div>
          </MobileLayoutLevel2>
        </div>
      </Fragment>
    );
  }
}
// const Post = ({ isMobile }) => (
//   <Fragment>
//     <DeskTopLayout>
//       <div className="container">
//         <StaticBanner
//           title={banner.title}
//           desc={banner.desc}
//           bannerIMG={banner.pic}
//         />
//         <div className={css.bonusBox}></div>
//       </div>

//       <Footer />
//     </DeskTopLayout>
//     {isMobile && <MobileLayout></MobileLayout>}
//   </Fragment>
// );

// Post.getInitialProps= ({query})=>{
//   console.log(query);
//   return {};
// }

// const mapSizesToProps = ({ width }) => ({
//   isTablet: width >= 480 && width < 1024,
//   isDesktop: width >= 1024,
//   under768: width <= 768,
//   isMobile: width <= 480
// });
// export default withSizes(mapSizesToProps)(Post);
export default Post;
