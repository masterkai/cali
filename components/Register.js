import React, {Fragment, useState} from 'react';
import css from '../styles/main.scss'
import {createMuiTheme, ThemeProvider, makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Modal from "react-modal";
import OutlineBtn from "./OutlineBtn";

const modalStyles = {
  content: {
    width: '100%',
    maxWidth: '580px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'black',
    padding: '0',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    border: 'none'
  }
};
Modal.setAppElement('#__next');

function InfoModify(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [passModalIsOpen, setPassModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };


  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    Modal.subtitle.style.color = 'white';
    Modal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,.65)';
  };

  const closeModal = () => {
    setModalIsOpen(false);

  };


  const closePassModal = () => {
    setPassModalIsOpen(false)

  };

  return (
    <Fragment>
      <button
        onClick={openModal}
        style={{marginRight: '5px'}}
        type="button"
        className="btn btn-dark btn-sm"
      >
        立即註冊&nbsp;
        <span
          className="iconfont icon_user-plus-light"
          style={{color: 'white'}}
        />
      </button>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="wallet"
      >
        <div className={css.modalHeader}>
          <div ref={subtitle => (Modal.subtitle = subtitle)}>
            加入會員
          </div>
          <span className="iconfont icon_times-light" onClick={closeModal}/>
        </div>

        <div className={`${css.modalBody} ${css.modalBody__InfoLayout}`}>
          <form style={{padding: '40px 20px'}}>
            <div className="form-group row">
              <label className='col-sm-3 col-form-label'><span className={css.red}>*</span>用戶名</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  placeholder="1 ~ 5位中、英、數字符"
                />
              </div>

            </div>
            <div className="form-group row">
              <label className='col-sm-3 col-form-label'><span className={css.red}>*</span>密碼</label>
              <div className="col-sm-9"><input
                type="password"
                className="form-control"
                placeholder="6-10位英、數字符"
              /></div>
            </div>
            <div className="form-group row">
              <label className='col-sm-3 col-form-label'><span className={css.red}>*</span>確認密碼</label>
              <div className="col-sm-9"><input
                type="password"
                className="form-control"
                placeholder="請再次輸入密碼"
              /></div>
            </div>
            <div className="form-group row">
              <label className='col-sm-3 col-form-label'><span className={css.red}>*</span>姓名</label>
              <div className="col-sm-9"><input
                type="password"
                className="form-control"
                placeholder="請輸入正確姓名"
              /></div>
            </div>
            <div className="form-group row">
              <label className='col-sm-3 col-form-label'><span className={css.red}>*</span>LineID</label>
              <div className="col-sm-9"><input
                type="text"
                className="form-control"
                placeholder="請留下正確ID,方便客服聯系與接收最新優惠"
              /></div>
            </div>
            <div className={css.line}/>
            <div className="form-group row">
              <label className='col-sm-3 col-form-label'>帳號/手機號碼</label>
              <div className="col-sm-9">
                <input
                  style={{paddingRight: 67}}
                  type="text"
                  className={`form-control ${css.input_box}`}
                />
                <a className={`${css.btn_ver_code} ${css.btn_ver_code__message}`}>簡訊</a>
              </div>
            </div>
            <div className="form-group row">
              <label className='col-sm-3 col-form-label'>驗證碼</label>
              <div className="col-sm-9">
                <input
                  style={{paddingRight: 67}}
                  type="text"
                  className={`form-control ${css.input_box}`}
                />
                <a className={css.btn_ver_code}>送出</a>
              </div>
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                是否通過手機接收優惠訊息
              </label>
            </div>

            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck2"
              />
              <label className="form-check-label" htmlFor="exampleCheck2">
                我已年滿18歲，並同意投注相關規範以及<span className={css.blue}>服務條款</span>
              </label>
            </div>

          </form>

        </div>
        <OutlineBtn name="確認送出" style={{margin: '0 auto 30px', width: '80%'}}/>


      </Modal>

      <Modal
        isOpen={passModalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closePassModal}
        style={modalStyles}
        contentLabel="enterPassWords"
      >
        <div className={css.modalHeader}>
          <div ref={subtitle => (Modal.subtitle = subtitle)}>
            請輸入提款密碼
          </div>
          <span className="iconfont icon_times-light" onClick={closePassModal}/>
        </div>
        <div className={css.modalBody}>
          <form className={css.formGroup}>
            <div className="inputWithBtn">
              <input type="text" placeholder="6-10位英、數字符"/>
              <button type="button" className="btn btn-primary btn-sm">
                忘記密碼
              </button>
            </div>
            <style jsx>
              {`
                .inputWithBtn {
                  display: flex;
                  margin-top: 20px;
                  margin-bottom: 10px;
                }
                .inputWithBtn .btn {
                  flex: 1 1 40%;
                  margin-left: 10px;
                }
                .btn-submit {
                  background-color: #32c5ff;
                  color: white;
                }
              `}
            </style>
            <button type="button" className="btn btn-submit btn-sm">
              確認送出
            </button>
          </form>
        </div>
      </Modal>
    </Fragment>
  );
}

export default InfoModify;