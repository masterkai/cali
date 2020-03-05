import React, {Fragment, useState} from 'react';
import css from '../styles/main.scss'
import {createMuiTheme, ThemeProvider, makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Modal from "react-modal";
import OutlineBtn from "./OutlineBtn";

const modalStyles = {
  content: {
    maxWidth: '800px',
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
    setPassModalIsOpen(true)
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
      <span onClick={openModal} className="iconfont icon_user-alt-light" data-tip="變更資料" style={{marginLeft: 20}}/>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="wallet"
      >
        <div className={css.modalHeader}>
          <div ref={subtitle => (Modal.subtitle = subtitle)}>
            變更資料
          </div>
          <span className="iconfont icon_times-light" onClick={closeModal} />
        </div>

        <div className={`${css.modalBody} ${css.modalBody__InfoLayout}`}>
          <form style={{borderRight:'1px solid white', padding:'0 20px'}}>
            <div className={css.title}>變更暱稱與密碼</div>
            <div className="form-group">
              <label>暱 稱</label>
              <input
                type="text"
                className="form-control"
                placeholder="6-10位英、數字符"
              />
            </div>
            <div className="form-group">
              <label>新帳號密碼</label>
              <input
                type="password"
                className="form-control"
                placeholder="6-10位英、數字符"
              />
            </div>
            <div className="form-group">
              <label>確認新帳號密碼</label>
              <input
                type="password"
                className="form-control"
                placeholder="6-10位英、數字符"
              />
            </div>
            <div className="form-group">
              <label>新提款密碼</label>
              <input
                type="password"
                className="form-control"
                placeholder="6-10位英、數字符"
              />
            </div>
            <div className="form-group">
              <label>確認新提款密碼</label>
              <input
                type="password"
                className="form-control"
                placeholder="6-10位英、數字符"
              />
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                是否使用提款密碼
              </label>
            </div>

            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck2"
              />
              <label className="form-check-label" htmlFor="exampleCheck2">
                是否通過手機接收優惠訊息
              </label>
            </div>

            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck3"
              />
              <label className="form-check-label" htmlFor="exampleCheck3">
                接收存、提款完成通知
              </label>
            </div>

          </form>
          <form style={{padding:'0 20px'}}>
            <div className={css.title}>變更聯繫資料</div>
            <div className="form-group">
              <label>手機號碼</label>
              <input
                type="number"
                className="form-control"
                placeholder="6-10位英、數字符"
              />
            </div>
            <div className="form-group">
              <label>電子信箱</label>
              <input
                type="mail"
                className="form-control"
                placeholder="6-10位英、數字符"
              />
            </div>
            <div className="form-row" style={{ marginBottom: 20 }}>
              <div className="col-12">
                <label>LINE帳號</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="form-row" style={{ marginBottom: 20 }}>
              <div className="col-12">
                <label>微信帳號</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <label>收貨地址</label>
            <div className="form-row" style={{ marginBottom: 20 }}>
              <div className="form-group col-12">
                <select
                  id="inputState"
                  className="form-control"
                  defaultValue="請選擇城市"
                >
                  <option>...</option>
                  <option>...</option>
                </select>
              </div>

              <div className="form-group col-12">
                <select
                  id="inputState"
                  className="form-control"
                  defaultValue="鄉鎮市區"
                >
                  <option>...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="form-group col">
                <input type="text" className="form-control" />
              </div>
            </div>

          </form>

        </div>
        <OutlineBtn name="確認修改" style={{margin:'0 auto 30px', width:'80%'}}/>


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