import React, {Fragment, useState} from 'react';
import css from '../styles/main.scss'
import {createMuiTheme, ThemeProvider, makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Modal from "react-modal";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import BetItem from "./BetItem";
import BonusRecordItem from "./BonusRecordItem";

const modalStyles = {
  content: {
    width:'100%',
    maxWidth: '600px',
    maxHeight: '800px',
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

function BetRecords(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
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

  return (
    <Fragment>
      <span onClick={openModal} className="iconfont icon_gift-light" data-tip="優惠紀錄" style={{marginLeft: 20}}/>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="wallet"
      >
        <div className={css.modalHeader}>
          <div ref={subtitle => (Modal.subtitle = subtitle)}>
            優惠記錄
          </div>
          <span className="iconfont icon_times-light" onClick={closeModal} />
        </div>

        <div className={`${css.modalBody} ${css.modalBody__BetRecordsLayout}`}>
          <BonusRecordItem subject={`首儲`} detail={'/promotions/post/1'} status={false}/>
          <BonusRecordItem subject={`二儲`} detail={'/promotions/post/2'} status={true}/>
          <BonusRecordItem subject={`會員(本次2/25)`} detail={'/promotions/post/3'} status={false}/>
          <BonusRecordItem subject={`會員(本次2/25)`} detail={'/promotions/post/3'} status={false}/>
          <BonusRecordItem subject={`會員(本次2/25)`} detail={'/promotions/post/3'} status={false}/>
          <BonusRecordItem subject={`會員(本次2/25)`} detail={'/promotions/post/3'} status={true}/>
          <BonusRecordItem subject={`會員(本次2/25)`} detail={'/promotions/post/3'} status={true}/>
          <BonusRecordItem subject={`會員(本次2/25)`} detail={'/promotions/post/3'} status={false}/>
          <BonusRecordItem subject={`會員(本次2/25)`} detail={'/promotions/post/3'} status={false}/>

        </div>


      </Modal>

    </Fragment>
  );
}

export default BetRecords;