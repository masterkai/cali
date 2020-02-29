import React, { Fragment, useState } from 'react';
import MobileLayoutLevel2 from '../../components/layouts/MobileLayoutLevel2';
import css from '../../styles/main.scss';
import OutlineBtn from '../../components/OutlineBtn';
import Modal from 'react-modal';
import Router from 'next/router';

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

const Register = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

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

  return (
    <Fragment>
      <MobileLayoutLevel2 title="加入會員" back={true}>
        <div className={css.mobileBox} style={{ height: '700px' }}>
          <form>
            <div className="form-group">
              <label>＊用戶名</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label>＊密碼</label>
              <input
                type="password"
                className="form-control"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label>＊確認密碼</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label>＊姓名/暱稱</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label>Line ID</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group" style={{ marginBottom: '30px' }}>
              <label htmlFor="exampleInputPassword1">驗證碼</label>
              <input type="password" className="form-control" />
            </div>

            <OutlineBtn func={openModal} name="確認送出" />
          </form>
        </div>
      </MobileLayoutLevel2>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Example Modal"
      >
        <div className={css.modalHeader}>
          <div ref={subtitle => (Modal.subtitle = subtitle)}>會員註冊</div>
          <span className="iconfont icon_times-light" onClick={closeModal} />
        </div>

        <div className={css.modalBody}>
          <p>恭喜你，已成功加入會員</p>
        </div>

        <div className={css.modalBtnGroup}>
          <button type="button" className="btn btn-warning btn-sm">
            我要存款
          </button>
          <button
            onClick={() => Router.push('/')}
            type="button"
            className="btn btn-primary btn-sm"
          >
            進入逛逛
          </button>
        </div>
      </Modal>
    </Fragment>
  );
};

export default Register;
