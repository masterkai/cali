import React, { Component, Fragment } from 'react';
import Link from 'next/link';
import css from '../../styles/main.scss';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
  list: {
    width: 220
  },
  fullList: {
    width: 'auto'
  }
});

const MainNavMobile = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={`${classes.list} ${css.slideMenu}`}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <div className={css.menuBlock}>
        <div className={css.menuMainMobile}>
          <span className={`iconfont icon_user-circle-solid ${css.user}`} />
          <span
            className={`iconfont icon_times-light ${css.icon_times}`}
            style={{ color: 'white' }}
          />
          <p>登入</p>
        </div>
        <div className={css.menuItemsMobile}>
          <Link href="/">
            <a className={css.listItem}>
              <span className="iconfont icon_home-solid" />
              <p>首頁</p>
            </a>
          </Link>
          <Link href="/online_baccarat">
            <a className={css.listItem}>
              <span className="iconfont icon_baccarat" />
              <p>真人娛樂</p>
            </a>
          </Link>
          <Link href="/sports">
            <a className={css.listItem}>
              <span className="iconfont icon_futbol-solid" />
              <p>體育博彩</p>
            </a>
          </Link>
          <Link href="/lottery">
            <a className={css.listItem}>
              <span className="iconfont icon_ticket-alt-solid" />
              <p>賓果彩票</p>
            </a>
          </Link>
          <Link href="/electronics">
            <a className={css.listItem}>
              <span className="iconfont icon_alien-monster-solid" />
              <p>電子遊戲</p>
            </a>
          </Link>
          <Link href="/fish">
            <a className={css.listItem}>
              <span className="iconfont icon_fish" />
              <p>捕魚王</p>
            </a>
          </Link>
        </div>

        <div className={css.menuItemsMobile}>
          <Link href="/online_baccarat">
            <a className={css.listItem}>
              <span className="iconfont icon_gift-light" />
              <p>優惠活動</p>
            </a>
          </Link>
          <Link href="/sports">
            <a className={css.listItem}>
              <span className="iconfont icon_star-solid" />
              <p>玩家評價</p>
            </a>
          </Link>
          <Link href="/lottery">
            <a className={css.listItem}>
              <span className="iconfont icon_wallet-light" />
              <p>存取流程</p>
            </a>
          </Link>
          <Link href="/electronics">
            <a className={css.listItem}>
              <span className="iconfont icon_cloud-download-light" />
              <p>APP下載</p>
            </a>
          </Link>
          <Link href="/fish">
            <a className={css.listItem}>
              <span className="iconfont icon_handshake-alt-light" />
              <p>代理加盟</p>
            </a>
          </Link>
          <Link href="/fish">
            <a className={css.listItem}>
              <span className="iconfont icon_Cali_logo" />
              <p>關於卡利</p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <Fragment>
      <header>
        <nav className={`navbar fixed-top ${css.navBarFlex}`}>
          <span
            onClick={toggleDrawer('left', true)}
            className="iconfont icon_bars-light"
          />
          <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
            {sideList('left')}
          </Drawer>
          <Link href="/">
            <a className={css.logo}>
              <img
                className="img-responsive logo_m"
                src="images/Cali_logo_mobile.png"
                alt=""
              />
            </a>
          </Link>
          <div className={css.btnGroup}>
            <button type="button" className={css.btnOutLine}>
              註冊
            </button>
            <button type="button" className={css.btnOutLine}>
              登入
            </button>
          </div>
        </nav>
        <style jsx>
          {`
            span.iconfont {
              margin-left: 10px;
              font-size: 1.625rem;
              background: linear-gradient(
                180deg,
                #fdf8a2 3%,
                #f4d97a 47%,
                #eec462 100%
              );
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          `}
        </style>
      </header>
    </Fragment>
  );
};

export default MainNavMobile;
