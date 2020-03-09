import React, {Fragment, useState} from 'react';
import css from '../../styles/main.scss';
import DDWallet from "../DDWallet";
import Wallet from "../Wallet";
import InfoModify from "../InfoModify";
import BetRecords from "../BetRecords";
import BonusRecords from "../BonusRecords";
import ReactTooltip from 'react-tooltip'
import MemberNotification from "../MemberNotification";



const StatefulHeader = ({setUser}) => {
  const logOut = ()=> {
    setUser(false)
  }

  return (
    <Fragment>
      <div className={css.headerBG}>
        <div className={`${css.flexContainer} ${css.flexContainer__status}`}>

          <div className={css.userLevel} style={{color: '#F70000'}}>
            <span className="iconfont icon_star-solid" style={{fontSize: '1.2rem'}}/>
            <span className="iconfont icon_star-solid" style={{fontSize: '1.2rem'}}/>
            <span className="iconfont icon_star-solid" style={{fontSize: '1.2rem'}}/>
            <span className="iconfont icon_star-light" style={{fontSize: '1.2rem'}}/>
            <span className="iconfont icon_star-light" style={{fontSize: '1.2rem'}}/>
            <span className="iconfont icon_star-light" style={{fontSize: '1.2rem'}}/>
          </div>
          <div className={css.userInfo} style={{marginLeft: 20}}>歡迎test123</div>
          <span className="iconfont icon_usd-circle-light" style={{marginLeft: 20}}/>
          <div className={css.userInfo} style={{marginLeft: 20,marginRight:20}}>250.00</div>
          <DDWallet/>
          <Wallet/>
          <InfoModify/>
          <BetRecords/>
          <BonusRecords/>
          <MemberNotification/>
          <ReactTooltip place='bottom' effect='solid'/>


          <span
            onClick={logOut}
            className="iconfont icon_sign-out-light"
            style={{marginLeft: 20}}
            data-tip="會員登出"
          />

        </div>
      </div>



    </Fragment>
  );
}


export default StatefulHeader;
