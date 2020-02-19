import React from 'react'
import css from "../../styles/main.scss"
import Link from "next/link";

const BottomNav = () => {
  return (
    <nav className={`navbar fixed-bottom ${css.BottomNav}`}>

      <Link href='/'><a><span className={`iconfont icon_Transfer`}/>平台轉帳</a></Link>
      <Link href='/'><a><span className={`iconfont icon_gift-solid`}/>最新優惠</a></Link>
      <Link href='/'><a><span className={`iconfont icon_sack-dollar-solid`}/>在線提款</a></Link>
      <Link href='/'><a><span className={`iconfont iconHR`}/>在線客服</a></Link>
      <Link href='/'><a><span className={`iconfont icon_user-solid`}/>會員中心</a></Link>
    </nav>
  );
}

export default BottomNav;