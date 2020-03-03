import React, {useState, Fragment} from 'react';
import Modal from "react-modal";
import css from "../styles/main.scss";

const modalStyles = {
  content: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#d8d8d8',
    padding: '0',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%,-50%)',
    border: 'none'
  }
};

Modal.setAppElement('#__next');
const ConvenienceStoreItem = ({logo, processImg}) => {
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

  const renderImg = processImg => {
    return processImg.map( (p,i)=><img style={{width: '100%'}} key={i} src={`/images/convenienceStore/${p}`} alt={`流程${i+1}`} className="img-responsive"/>)
  }
  return (
    <Fragment>
      <div onClick={openModal}>
        <img style={{maxWidth: 100,maxHeight: 100}} src={logo} alt="" className="img-responsive"/>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Example Modal"
      >
        <div className={css.modalHeader}>
          <div ref={subtitle => (Modal.subtitle = subtitle)}>
            超商繳費流程
          </div>
          <span className="iconfont icon_times-light" onClick={closeModal}/>
        </div>

        <div className={css.modalBody} style={{height:350,overflowY:'scroll'}}>
          {renderImg(processImg)}
        </div>
      </Modal>
    </Fragment>
  );
};

export default ConvenienceStoreItem;