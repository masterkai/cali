import React, {Component, Fragment} from 'react';
import DeskTopLayout from '../../components/layouts/deskTopLayout';
import withSizes from 'react-sizes';
import css from '../../styles/main.scss';
import OutlineBtn from '../../components/OutlineBtn';
import Footer from '../../components/Footer';
import MobileLayoutLevel2 from '../../components/layouts/MobileLayoutLevel2';

import StaticBanner from '../../components/includes/StaticBanner';
import SwitchTabs from '../../components/SwitchTabs';
import {withTheme} from '@material-ui/core';
import SectionTitle from "../../components/includes/SectionTitle";
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Router from "next/router";


const UserEvaluation = ({isMobile}) => {
  return (
    <Fragment>
      <DeskTopLayout>
        <div className="container">
          <div style={{backgroundColor: 'rgba(0,0,0,.65)'}}>
            <SectionTitle subject={`卡利玩家實測`}/>
            <div className={`${css.flexContainer} ${css.flexContainer__userEvaluation}`}>
              <div className={css.profile}>
                <img src="/images/userTest.png" alt="" className="img-responsive"/>
                <div className={css.profileContainer}>
                  <div><span className='iconfont icon_star-solid'/> 4.8 玩家評測</div>
                  <div><span className='iconfont icon_user-solid'/> 20,008位玩家</div>
                  <div><span className='iconfont icon_user-solid'/> 共168則評論</div>
                </div>
              </div>
              <div className={css.content}>
                <div className={css.title}>卡利娛樂城</div>
                <p>卡利系統玩家實際遊玩回饋，以上會員即可評價，
                  認證機制保證真實性，各位會員提出對卡利娛樂城的意見，卡利集團更加進步，出更讓各為喜愛的線上博弈平台。</p>
                <p>交進史方求驚升不最獲識有子文著……如生最、病何大在：對業大面化頭別活灣美張家小時有班到明靈中為色信，運交時、臉觀易飯：師戰斯一雄，證計投？自口主能條在本中效快據阿來國不流大夫。</p>
              </div>
            </div>
            <div className={`${css.flexContainer} ${css.flexContainer__rating}`}>
              <div className={css.mainRatingContainer}>
                <div className={css.ratingValue}>4.8</div>
                <div className={css.starsGroup}>
                  <span className='iconfont icon_star-solid'/>
                  <span className='iconfont icon_star-solid'/>
                  <span className='iconfont icon_star-solid'/>
                  <span className='iconfont icon_star-solid'/>
                  <span className='iconfont icon_star-solid'/>
                </div>
                <div className={css.commentSum}>
                  共168則評論
                </div>
              </div>
              <div className={css.ratingContainer}>
                <div className={css.ratingItem}>
                  <div className={css.progress}>
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: '75%'}}/>
                  </div>
                  <Box component="fieldset" ml={3} borderColor="transparent">
                    <Rating name="read-only" value={5} readOnly/>
                  </Box>
                  <div className={css.percentage}>76%</div>
                </div>
                <div className={css.ratingItem}>
                  <div className={css.progress}>
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: '21%'}}/>
                  </div>
                  <Box component="fieldset" ml={3} borderColor="transparent">
                    <Rating name="read-only" value={4} readOnly/>
                  </Box>
                  <div className={css.percentage}>21%</div>
                </div>
                <div className={css.ratingItem}>
                  <div className={css.progress}>
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: '3%'}}/>
                  </div>
                  <Box component="fieldset" ml={3} borderColor="transparent">
                    <Rating name="read-only" value={3} readOnly/>
                  </Box>
                  <div className={css.percentage}>3%</div>
                </div>
                <div className={css.ratingItem} style={{opacity: 0.25}}>
                  <div className={css.progress}>
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: '0%'}}/>
                  </div>
                  <Box component="fieldset" ml={3} borderColor="transparent">
                    <Rating name="read-only" value={2} readOnly/>
                  </Box>
                  <div className={css.percentage}>0%</div>
                </div>
                <div className={css.ratingItem} style={{opacity: 0.25}}>
                  <div className={css.progress}>
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: '0%'}}/>
                  </div>
                  <Box component="fieldset" ml={3} borderColor="transparent">
                    <Rating name="read-only" value={1} readOnly/>
                  </Box>
                  <div className={css.percentage}>0%</div>
                </div>

              </div>
            </div>

            <div className={css.memberFeedbackContainer}>
              <div className={css.memberBox}>
                <div className={css.avatar}>NL</div>
                <div className={css.memberInfo}>
                  <div className={css.commentTime}>2 weeks ago</div>
                  <div className={css.memberNumbering}>VIP8 會員1658432</div>
                </div>
              </div>
              <div className={css.commentBox}>
                <div className={css.starsGroup}>
                  <span className='iconfont icon_star-solid'/>
                  <span className='iconfont icon_star-solid'/>
                  <span className='iconfont icon_star-solid'/>
                  <span className='iconfont icon_star-solid'/>
                  <span className='iconfont icon_star-solid'/>
                </div>
                <div className={css.comment}>
                  卡利娛樂城是真心能信賴的~就算我贏了15萬，出金也很快不囉嗦，而且遊戲種類很多，也有很多優惠，喜歡!
                </div>
              </div>
            </div>
            <div className={css.memberFeedbackContainer}>
              <div className={css.memberBox}>
                <div className={css.avatar}>NL</div>
                <div className={css.memberInfo}>
                  <div className={css.commentTime}>2 weeks ago</div>
                  <div className={css.memberNumbering}>VIP8 會員1658432</div>
                </div>
              </div>
              <div className={css.commentBox}>
                <div className={css.starsGroup}>
                  <span className='iconfont icon_star-solid'/>
                  <span className='iconfont icon_star-solid'/>
                  <span className='iconfont icon_star-solid'/>
                  <span className='iconfont icon_star-solid'/>
                  <span className='iconfont icon_star-solid'/>
                </div>
                <div className={css.comment}>
                  卡利娛樂城是真心能信賴的~就算我贏了15萬，出金也很快不囉嗦，而且遊戲種類很多，也有很多優惠，喜歡!
                </div>
              </div>
            </div>
            <div className={css.memberFeedbackContainer}>
              <div className={css.memberBox}>
                <div className={css.avatar}>NL</div>
                <div className={css.memberInfo}>
                  <div className={css.commentTime}>2 weeks ago</div>
                  <div className={css.memberNumbering}>VIP8 會員1658432</div>
                </div>
              </div>
              <div className={css.commentBox}>
                <div className={css.starsGroup}>
                  <span className='iconfont icon_star-solid'/>
                  <span className='iconfont icon_star-solid'/>
                  <span className='iconfont icon_star-solid'/>
                  <span className='iconfont icon_star-solid'/>
                  <span className='iconfont icon_star-solid'/>
                </div>
                <div className={css.comment}>
                  卡利娛樂城是真心能信賴的~就算我贏了15萬，出金也很快不囉嗦，而且遊戲種類很多，也有很多優惠，喜歡!
                </div>
              </div>
            </div>
            <div className={css.memberFeedbackContainer}>
              <div className={css.memberBox}>
                <div className={css.avatar}>NL</div>
                <div className={css.memberInfo}>
                  <div className={css.commentTime}>2 weeks ago</div>
                  <div className={css.memberNumbering}>VIP8 會員1658432</div>
                </div>
              </div>
              <div className={css.commentBox}>
                <div className={css.starsGroup}>
                  <span className='iconfont icon_star-solid'/>
                  <span className='iconfont icon_star-solid'/>
                  <span className='iconfont icon_star-solid'/>
                  <span className='iconfont icon_star-solid'/>
                  <span className='iconfont icon_star-solid'/>
                </div>
                <div className={css.comment}>
                  卡利娛樂城是真心能信賴的~就算我贏了15萬，出金也很快不囉嗦，而且遊戲種類很多，也有很多優惠，喜歡!
                </div>
              </div>
            </div>
            <div style={{borderTop: '1px solid rgba(255,255,255,.5)', padding: '40px'}}>
              <button
                type="button" className="btn btn-block btn-sm"
                style={{
                  'backgroundColor': '#6236FF',
                  'color': 'white',
                  'width': '40%',
                  'margin': '10px auto'
                }}>查看更多
              </button>
            </div>
          </div>
        </div>

        <Footer/>
      </DeskTopLayout>
      {isMobile && (
        <MobileLayoutLevel2 title="卡利玩家實測" path={true}>
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
            <div
              style={{
                height: '138px',
                backgroundImage:'url(/images/userTest.png)',
                backgroundSize:'cover',
                width:'100%',
                color:'white',
                padding:'10px 20px',
                fontSize:'22px',
                fontWeight:700,
                textShadow:'1px 1px 4px rgba(0,0,0,0.85)'
              }}
            >
              卡利玩家實測
            </div>
            <div className={`${css.flexContainer} ${css.flexContainer__userEvaluation}`}>
              <div className={css.profile}>
                <div className={css.profileContainer}>
                  <div><span className='iconfont icon_star-solid'/> 4.8 玩家評測</div>
                  <div><span className='iconfont icon_user-solid'/> 20,008位玩家</div>
                  <div><span className='iconfont icon_user-solid'/> 共168則評論</div>
                </div>
              </div>
              <div className={css.content}>
                <div className={css.title}>卡利娛樂城</div>
                <p>卡利系統玩家實際遊玩回饋，以上會員即可評價，
                  認證機制保證真實性，各位會員提出對卡利娛樂城的意見，卡利集團更加進步，出更讓各為喜愛的線上博弈平台。</p>
              </div>
            </div>
            <div className={`${css.flexContainer} ${css.flexContainer__rating}`}>
              <div className={css.mainRatingContainer}>
                <div className={css.ratingValue}>4.8</div>
                <div className={css.starsGroup}>
                  <span className='iconfont icon_star-solid'/>
                  <span className='iconfont icon_star-solid'/>
                  <span className='iconfont icon_star-solid'/>
                  <span className='iconfont icon_star-solid'/>
                  <span className='iconfont icon_star-solid'/>
                </div>
                <div className={css.commentSum}>
                  共168則評論
                </div>
              </div>
              <div className={css.ratingContainer}>
                <div className={css.ratingItem}>
                  <div className={css.progress}>
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: '75%'}}/>
                  </div>
                  <Box component="fieldset" ml={1} borderColor="transparent">
                    <Rating name="read-only" value={5} readOnly/>
                  </Box>
                  <div className={css.percentage}>76%</div>
                </div>
                <div className={css.ratingItem}>
                  <div className={css.progress}>
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: '21%'}}/>
                  </div>
                  <Box component="fieldset" ml={1} borderColor="transparent">
                    <Rating name="read-only" value={4} readOnly/>
                  </Box>
                  <div className={css.percentage}>21%</div>
                </div>
                <div className={css.ratingItem}>
                  <div className={css.progress}>
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: '3%'}}/>
                  </div>
                  <Box component="fieldset" ml={1} borderColor="transparent">
                    <Rating name="read-only" value={3} readOnly/>
                  </Box>
                  <div className={css.percentage}>3%</div>
                </div>
                <div className={css.ratingItem} style={{opacity: 0.25}}>
                  <div className={css.progress}>
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: '0%'}}/>
                  </div>
                  <Box component="fieldset" ml={1} borderColor="transparent">
                    <Rating name="read-only" value={2} readOnly/>
                  </Box>
                  <div className={css.percentage}>0%</div>
                </div>
                <div className={css.ratingItem} style={{opacity: 0.25}}>
                  <div className={css.progress}>
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: '0%'}}/>
                  </div>
                  <Box component="fieldset" ml={1} borderColor="transparent">
                    <Rating name="read-only" value={1} readOnly/>
                  </Box>
                  <div className={css.percentage}>0%</div>
                </div>

              </div>
            </div>
            <div className={css.memberFeedbackContainer}>
              <div className={css.memberBox}>
                <div className={css.avatar}>NL</div>
                <div className={css.memberInfo}>
                  <div className={css.commentTime}>2 weeks ago</div>
                  <div className={css.memberNumbering}>VIP8 會員1658432</div>
                </div>
              </div>
              <div className={css.commentBox}>
                <div className={css.starsGroup}>
                  <span className='iconfont icon_star-solid'/>
                  <span className='iconfont icon_star-solid'/>
                  <span className='iconfont icon_star-solid'/>
                  <span className='iconfont icon_star-solid'/>
                  <span className='iconfont icon_star-solid'/>
                </div>
                <div className={css.comment}>
                  卡利娛樂城是真心能信賴的~就算我贏了15萬，出金也很快不囉嗦，而且遊戲種類很多，也有很多優惠，喜歡!
                </div>
              </div>
            </div>
            <div className={css.memberFeedbackContainer}>
              <div className={css.memberBox}>
                <div className={css.avatar}>NL</div>
                <div className={css.memberInfo}>
                  <div className={css.commentTime}>2 weeks ago</div>
                  <div className={css.memberNumbering}>VIP8 會員1658432</div>
                </div>
              </div>
              <div className={css.commentBox}>
                <div className={css.starsGroup}>
                  <span className='iconfont icon_star-solid'/>
                  <span className='iconfont icon_star-solid'/>
                  <span className='iconfont icon_star-solid'/>
                  <span className='iconfont icon_star-solid'/>
                  <span className='iconfont icon_star-solid'/>
                </div>
                <div className={css.comment}>
                  卡利娛樂城是真心能信賴的~就算我贏了15萬，出金也很快不囉嗦，而且遊戲種類很多，也有很多優惠，喜歡!
                </div>
              </div>
            </div>
            <div className={css.memberFeedbackContainer}>
              <div className={css.memberBox}>
                <div className={css.avatar}>NL</div>
                <div className={css.memberInfo}>
                  <div className={css.commentTime}>2 weeks ago</div>
                  <div className={css.memberNumbering}>VIP8 會員1658432</div>
                </div>
              </div>
              <div className={css.commentBox}>
                <div className={css.starsGroup}>
                  <span className='iconfont icon_star-solid'/>
                  <span className='iconfont icon_star-solid'/>
                  <span className='iconfont icon_star-solid'/>
                  <span className='iconfont icon_star-solid'/>
                  <span className='iconfont icon_star-solid'/>
                </div>
                <div className={css.comment}>
                  卡利娛樂城是真心能信賴的~就算我贏了15萬，出金也很快不囉嗦，而且遊戲種類很多，也有很多優惠，喜歡!
                </div>
              </div>
            </div>
            <div className={css.memberFeedbackContainer}>
              <div className={css.memberBox}>
                <div className={css.avatar}>NL</div>
                <div className={css.memberInfo}>
                  <div className={css.commentTime}>2 weeks ago</div>
                  <div className={css.memberNumbering}>VIP8 會員1658432</div>
                </div>
              </div>
              <div className={css.commentBox}>
                <div className={css.starsGroup}>
                  <span className='iconfont icon_star-solid'/>
                  <span className='iconfont icon_star-solid'/>
                  <span className='iconfont icon_star-solid'/>
                  <span className='iconfont icon_star-solid'/>
                  <span className='iconfont icon_star-solid'/>
                </div>
                <div className={css.comment}>
                  卡利娛樂城是真心能信賴的~就算我贏了15萬，出金也很快不囉嗦，而且遊戲種類很多，也有很多優惠，喜歡!
                </div>
              </div>
            </div>
            <div style={{borderTop: '1px solid rgba(255,255,255,.5)', padding: '40px'}}>
              <button
                type="button" className="btn btn-block btn-sm"
                style={{
                  'backgroundColor': '#6236FF',
                  'color': 'white',
                  'width': '40%',
                  'margin': '10px auto'
                }}>查看更多
              </button>
            </div>
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
export default withSizes(mapSizesToProps)(UserEvaluation);
