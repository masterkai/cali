import React, {Fragment, useState} from 'react';
import MobileLayoutLevel2 from '../../components/layouts/MobileLayoutLevel2';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import css from '../../styles/main.scss';
import OutlineBtn from '../../components/OutlineBtn';
import Modal from "react-modal";
import Router from "next/router";

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

const CustomerService = props => {
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
      <MobileLayoutLevel2 title="線上留言" back={true}>
        <div
          className={css.mobileBox_nobg}
          style={{height: 700, paddingBottom: 80}}
        >
          <p style={{color:'white'}}>訊息</p>
          <TextareaAutosize
            style={{
              width: '100%',
              height: 120,
              marginBottom: 20,
              backgroundColor: '#d8d8d8',
              padding: 10
            }}
            rowsMax={4}
            aria-label="maximum height"
            placeholder="說些什麼吧！"
          />
          <OutlineBtn name="送出" func={openModal} style={{width: '60%', margin: '0 auto'}}/>
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
            訊息
          </div>
          <span className="iconfont icon_times-light" onClick={closeModal} />
        </div>

        <div className={css.modalBody} style={{textAlign:'center'}}>
          <p>謝謝您的寶貴意見，<br/>客服人員將在1小時內回覆您！</p>
          <div
            onClick={()=>Router.push('/')}
            className="btn btn-primary">確認</div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default CustomerService;
