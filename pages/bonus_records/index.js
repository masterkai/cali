import React, {Fragment, useState} from 'react';
import MobileLayoutLevel2 from '../../components/layouts/MobileLayoutLevel2';
import css from '../../styles/main.scss';
import Modal from 'react-modal';
import BonusRecordItem from '../../components/BonusRecordItem'
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

const BonusRecords = () => {

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
      <MobileLayoutLevel2 title="優惠記錄" path={true}>
        <div
          className={css.mobileBox}
          style={{height: '700px', paddingBottom: 80, overflowY: 'scroll'}}
        >
          <BonusRecordItem subject={`首儲`} detail={'/promotions/post/1'} status={false}/>
          <BonusRecordItem subject={`二儲`} detail={'/promotions/post/2'} status={true}/>
          <BonusRecordItem subject={`會員(本次2/25)`} detail={'/promotions/post/3'} status={false}/>

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
          <div ref={subtitle => (Modal.subtitle = subtitle)}>
            請輸入提款密碼
          </div>
          <span className="iconfont icon_times-light" onClick={closeModal}/>
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
};

export default BonusRecords;
