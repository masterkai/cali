import React from 'react';
import DDWallet from '../DDWallet';
import css from '../../styles/main.scss';
const UserStateBar = props => {
  return (
    <div className={css.userStateBar}>
      <div className={css.userStateColumn}>
        <div className={css.userInfo}>test123</div>
        <div className={css.userLevel}>
          <span className="iconfont icon_star-solid" />
          <span className="iconfont icon_star-solid" />
          <span className="iconfont icon_star-solid" />
          <span className="iconfont icon_star-light" />
          <span className="iconfont icon_star-light" />
          <span className="iconfont icon_star-light" />
        </div>
        <span className="iconfont icon_bell-light" />
      </div>
      <div className={css.userStateColumn}>
        <span className="iconfont icon_usd-circle-light" />
        <div className={css.userInfo}>250.00</div>
        <DDWallet />
      </div>
    </div>
  );
};

export default UserStateBar;
