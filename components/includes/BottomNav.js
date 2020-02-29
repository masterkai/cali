import React from 'react';
import css from '../../styles/main.scss';
import Link from 'next/link';
import UpMenu from '../UpMenu';
import UpSwitch from '../UpSwitch';

const BottomNav = () => {
  return (
    <nav className={`navbar fixed-bottom ${css.BottomNav}`}>
      <Link href="/platform_transfer">
        <a>
          <span className={`iconfont icon_Transfer`} />
          平台轉帳
        </a>
      </Link>
      <Link href="/promotions">
        <a>
          <span className={`iconfont icon_gift-solid`} />
          最新優惠
        </a>
      </Link>
      <UpSwitch name="在線提款" className="iconfont icon_sack-dollar-solid" />
      {/* <Link href="/">
        <a>
          <span className={`iconfont icon_sack-dollar-solid`} />
          在線提款
        </a>
      </Link> */}
      <Link href="/customer_service">
        <a>
          <span className={`iconfont iconHR`} />
          在線客服
        </a>
      </Link>
      <UpMenu name="會員中心" className="iconfont icon_user-solid" />
    </nav>
  );
};

export default BottomNav;
