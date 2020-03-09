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


const AccessProcess = ({isMobile}) => {
  const [switchTab, setSwitchTab] = useState([true, false]);
  const desc = switchTab[0] ?
    '卡利存取款簡易有效率，存款5分鐘完成、取款30分鐘內到帳！' : '若需取款只需聯繫客服提供資料即可辦理。'
  const banner = {
    title: '存取流程',
    desc: desc,
    pic: 'images/background/accessProcess.png'
  };
  const ActivateSwitchTab = index => {
    const reset = switchTab.map(() => false);
    reset[index] = true;
    setSwitchTab(reset);
  };

  const _class = {
    true: `${css.tab} ${css.active}`,
    false: `${css.tab}`
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
            <div className={css.accessProcessTabs}>
              <div className={css.accessProcessTabs__container}>
                <div
                  onClick={() => ActivateSwitchTab(0)}
                  className={_class[switchTab[0]]}><span style={{fontSize: '1.25rem'}}
                                                         className='iconfont icon_turnIN1'/> 存款步驟
                </div>
                <div
                  onClick={() => ActivateSwitchTab(1)}
                  className={_class[switchTab[1]]}>
                  <span style={{fontSize: '1.25rem'}}
                        className='iconfont icon_turnOUT1'/> 提款規定
                </div>
              </div>
            </div>
            {switchTab[0] &&
            <div className={`${css.accessProcessFlex} ${css.accessProcessFlex__column}`}>
              <div style={{padding: '5px 40px 20px'}}>
                <div
                  style={{
                    padding: '20px 40px',
                    border: '1px solid rgba(255,255,255, 0.5)',
                    color: 'white',
                    lineHeight: '2',
                    textAlign: 'center'
                  }}
                >
                  卡利娛樂城提供線上儲值及超商儲值，<br/>若您已經註冊
                  並成為本網站會員，並綁定銀行帳戶，<br/>
                  就可依照此步驟進行存款。此為線上儲值的存款步驟。
                </div>
              </div>
              <div className={`${css.accessProcessFlex} ${css.accessProcessBox}`}>
                <img style={{maxWidth: 456}} src="/images/wallet_deposit.png" alt="" className="img-responsive"/>
                <ol>
                  <li>至「會員存款」介面。</li>
                  <li>選擇「信用卡」或「銀行」。(信用卡需收8%手續費、銀行轉入虛擬帳號)</li>
                  <li>輸入金額。</li>
                  <li>若為以優惠方案儲值，請選擇對應的優惠名稱。</li>
                  <li>點擊提交送出資料。</li>

                </ol>
              </div>
            </div>}
            {switchTab[1] &&
            <div className={css.withdrawBox}>
              <div style={{marginBottom: 30}} className={css.withdrawBox}>
                <div className={css.withdrawBox__row}>
                  <div>出款條件</div>
                  <div>出款次數</div>
                  <div>出款收取％數</div>
                </div>
                <div className={css.withdrawBox__row}>
                  <div>使用第三方金流存款</div>
                  <div> 一周可申請3次取款，免手續費</div>
                  <div>第四次取款，收取3%手續費</div>
                </div>
                <div className={css.withdrawBox__row}>
                  <div>使用指定收款帳戶存款(VIP存款區）</div>
                  <div>一天可申請1次取款，免手續費</div>
                  <div>第二次取款，收取1%手續費</div>
                </div>
              </div>
              <div className={css.withdrawNoticeBox}>
                <div className={css.title}>取款注意事項</div>
                <ul>
                  <li>銀行帳戶持有人姓名必須與開戶的會員姓名一致，否則無法受理。?</li>
                  <li>所有取款均不限次數、不限金額且不收取任何手續費。?注：為避免洗黑錢以及不必要的資源浪費，取款時會檢查賬戶內從上一次取款到該次取款之間進行的投注，期間內有效投注額(流水)需達到充值總額100%相同金額，若未達到會收取儲值總額的10%作為手續費。?*若是以優惠方案儲值，則流水另計，以活動公告為準。</li>
                </ul>
              </div>
              <div className={css.withdrawBox} style={{margin: '30px auto'}}>
                <div className={css.withdrawBox__row}>
                  <div>申請VIP存款帳戶條件</div>
                </div>
                <div className={css.withdrawBox__row}>
                  <div>使用5次第三方金流存款，可向客服申請指定收款帳戶</div>
                </div>
              </div>
            </div>}
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
            <div className={css.accessProcessTabs}>
              <div className={css.accessProcessTabs__container}>
                <div
                  onClick={() => ActivateSwitchTab(0)}
                  className={_class[switchTab[0]]}><span style={{fontSize: '1.25rem'}}
                                                         className='iconfont icon_turnIN1'/> 存款步驟
                </div>
                <div
                  onClick={() => ActivateSwitchTab(1)}
                  className={_class[switchTab[1]]}>
                  <span style={{fontSize: '1.25rem'}}
                        className='iconfont icon_turnOUT1'/> 提款規定
                </div>
              </div>
            </div>
            <div style={{padding:'0 20px'}}>
              {switchTab[0] &&
              <div className={`${css.accessProcessFlex} ${css.accessProcessFlex__column}`}>
                <div style={{padding: '0 20px 20px'}}>
                  <div
                    style={{
                      padding: '20px 40px',
                      border: '1px solid rgba(255,255,255, 0.5)',
                      color: 'white',
                      lineHeight: '2',
                      textAlign: 'center'
                    }}
                  >
                    卡利娛樂城提供線上儲值及超商儲值，<br/>若您已經註冊
                    並成為本網站會員，並綁定銀行帳戶，<br/>
                    就可依照此步驟進行存款。此為線上儲值的存款步驟。
                  </div>
                </div>
                <div className={`${css.accessProcessFlex} ${css.accessProcessBox}`}>
                  <img style={{maxWidth: 456, padding:'0 20px'}} src="/images/wallet_deposit.png" alt="" className="img-responsive"/>
                  <ol>
                    <li>至「會員存款」介面。</li>
                    <li>選擇「信用卡」或「銀行」。(信用卡需收8%手續費、銀行轉入虛擬帳號)</li>
                    <li>輸入金額。</li>
                    <li>若為以優惠方案儲值，請選擇對應的優惠名稱。</li>
                    <li>點擊提交送出資料。</li>

                  </ol>
                </div>
              </div>}
              {switchTab[1] &&
              <div className={css.withdrawBox}>
                <div style={{marginBottom: 30}} className={css.withdrawBox}>
                  <div className={css.withdrawBox__row}>
                    <div>出款條件</div>
                    <div>出款次數</div>
                    <div>出款收取％數</div>
                  </div>
                  <div className={css.withdrawBox__row}>
                    <div>使用第三方金流存款</div>
                    <div> 一周可申請3次取款，免手續費</div>
                    <div>第四次取款，收取3%手續費</div>
                  </div>
                  <div className={css.withdrawBox__row}>
                    <div>使用指定收款帳戶存款(VIP存款區）</div>
                    <div>一天可申請1次取款，免手續費</div>
                    <div>第二次取款，收取1%手續費</div>
                  </div>
                </div>
                <div className={css.withdrawNoticeBox}>
                  <div className={css.title}>取款注意事項</div>
                  <ul>
                    <li>銀行帳戶持有人姓名必須與開戶的會員姓名一致，否則無法受理。?</li>
                    <li>所有取款均不限次數、不限金額且不收取任何手續費。?注：為避免洗黑錢以及不必要的資源浪費，取款時會檢查賬戶內從上一次取款到該次取款之間進行的投注，期間內有效投注額(流水)需達到充值總額100%相同金額，若未達到會收取儲值總額的10%作為手續費。?*若是以優惠方案儲值，則流水另計，以活動公告為準。</li>
                  </ul>
                </div>
                <div className={css.withdrawBox} style={{margin: '30px auto'}}>
                  <div className={css.withdrawBox__row}>
                    <div>申請VIP存款帳戶條件</div>
                  </div>
                  <div className={css.withdrawBox__row}>
                    <div>使用5次第三方金流存款，<br/>可向客服申請指定收款帳戶</div>
                  </div>
                </div>
              </div>}
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
export default withSizes(mapSizesToProps)(AccessProcess);
