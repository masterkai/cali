import React, { Component, Fragment, useState } from 'react';
import Link from 'next/link';
import css from '../../styles/main.scss';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Modal from 'react-modal';
import Router from 'next/router';
import Measure from 'react-measure';
import UserStateBar from '../includes/UserStateBar';

const modalStyles = {
  content: {
    width: '320px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#d8d8d8',
    padding: '0',
    top: '35%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    border: 'none'
  }
};

Modal.setAppElement('#__next');

const useStyles = makeStyles({
  list: {
    width: 220
  },
  fullList: {
    width: 'auto'
  }
});

const MainNavMobile = ({ getHeight }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: -1,
    height: -1
  });
  const { width, height } = dimensions;

  const openModal = () => {
    setModalIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    Modal.subtitle.style.color = '#fff';
    Modal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,.65)';
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

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
          <p onClick={openModal}>登入</p>
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
          <Link href="/promotions">
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
          <Link href="/about">
            <a className={css.listItem}>
              <span className="iconfont icon_Cali_logo" />
              <p>關於卡利</p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );

  const hamburger = {
    marginLeft: '10px',
    fontSize: '1.625rem'
  };
  const [isUser, setIsUser] = useState(true);

  return (
    <Fragment>
      <Measure
        bounds
        onResize={contentRect => {
          setDimensions(contentRect.bounds);
        }}
      >
        {({ measureRef }) => (
          <div
            ref={measureRef}
            className={`fixed-top`}
            height={getHeight(height)}
          >
            <nav className={`navbar ${css.navBarFlex}`}>
              <span
                onClick={toggleDrawer('left', true)}
                className="iconfont icon_bars-light"
                style={hamburger}
              />
              <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                {sideList('left')}
              </Drawer>
              <Link href="/">
                <a className={isUser ? css.logoisUser : css.logo}>
                  <img
                    className="img-responsive logo_m"
                    src="/images/Cali_logo_mobile.png"
                    alt=""
                  />
                </a>
              </Link>
              {isUser ? (
                ''
              ) : (
                <div className={css.btnGroup}>
                  <button
                    onClick={() => Router.push('/register')}
                    type="button"
                    className={css.btnOutLine}
                  >
                    註冊
                  </button>
                  <button
                    onClick={openModal}
                    type="button"
                    className={css.btnOutLine}
                  >
                    登入
                  </button>
                </div>
              )}
            </nav>
            {isUser ? <UserStateBar /> : ''}
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={modalStyles}
              contentLabel="Example Modal"
            >
              <div className={css.modalHeader}>
                <div ref={subtitle => (Modal.subtitle = subtitle)}>
                  會員登入
                </div>
                <span
                  className="iconfont icon_times-light"
                  onClick={closeModal}
                />
              </div>

              <div className={css.modalBody}>
                <form className={css.formGroup}>
                  <label className={`${css.userAccount}`}>
                    <input type="text" placeholder="帳號/手機號碼" />
                  </label>
                  <label className={css.userPassword}>
                    <input type="text" placeholder="密碼" />
                  </label>
                </form>
              </div>

              <div className={css.modalBtnGroup}>
                <button type="button" className="btn btn-warning btn-sm">
                  立即註冊
                </button>
                <button type="button" className="btn btn-primary btn-sm">
                  登入
                </button>
              </div>
            </Modal>
          </div>
        )}
      </Measure>
    </Fragment>
  );
};

export default MainNavMobile;
