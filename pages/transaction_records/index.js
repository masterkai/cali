import React, { Fragment, useState } from 'react';
import MobileLayoutLevel2 from '../../components/layouts/MobileLayoutLevel2';
import css from '../../styles/main.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import OutlineBtn from '../../components/OutlineBtn';
import Modal from 'react-modal';
import Router from 'next/router';
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiFormLabel: {
      root: {
        color: 'white',
        '&$focused': {
          color: 'rgba(157, 1, 255, 1)'
        }
      }
    },
    MuiInputBase: {
      // Name of the rule
      root: {
        // Some CSS
        color: 'white',
      }
    },
    MuiInput: {
      underline: {
        '&:before': {
          borderBottom: `1px solid rgba(255, 255, 255, 0.42)`
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: `1px solid rgba(255, 255, 255, 0.42)`
        },
        '&:after': {
          borderBottom: `1px solid rgba(157, 1, 255, 0.85)`
        }
      }
    }
  }
});

const style = {
  borderRadius: 3,
  border: 0,
  color: 'white',
  width: '100%',
  marginBottom: 30
};

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

const TransactionRecords = () => {
  const classes = useStyles();

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

  const [startDate, setStartDate] = useState(new Date());
  return (
    <Fragment>
      <MobileLayoutLevel2 title="交易資料" path={true}>
        <div
          className={css.mobileBox}
          style={{ height: 'auto', paddingBottom: 80 }}
        >
          <Tabs defaultIndex={0} onSelect={index => console.log(index)}>
            <TabList>
              <Tab>未完成</Tab>
              <Tab>已完成</Tab>
            </TabList>
            <TabPanel>
              <ThemeProvider theme={theme}>
                <form className={classes.container} noValidate>
                  <TextField
                    style={style}
                    id="datetime-local"
                    label="開始時間"
                    type="datetime-local"
                    defaultValue="2020-02-01T00:00"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                  <TextField
                    style={style}
                    id="datetime-local"
                    label="結束時間"
                    type="datetime-local"
                    defaultValue="2020-02-29T10:30"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </form>
              </ThemeProvider>
            </TabPanel>
            <TabPanel>
              <form>
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
                  <div className="col">
                    <label>LINE帳號</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col">
                    <label>微信帳號</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <label>收貨地址</label>
                <div className="form-row" style={{ marginBottom: 20 }}>
                  <div className="form-group col-6">
                    <select
                      id="inputState"
                      className="form-control"
                      defaultValue="請選擇城市"
                    >
                      <option>...</option>
                      <option>...</option>
                    </select>
                  </div>

                  <div className="form-group col-6">
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

                <OutlineBtn name="確認送出" />
              </form>
            </TabPanel>
          </Tabs>
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
          <span className="iconfont icon_times-light" onClick={closeModal} />
        </div>

        <div className={css.modalBody}>
          <form className={css.formGroup}>
            <div className="inputWithBtn">
              <input type="text" placeholder="6-10位英、數字符" />
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

export default TransactionRecords;
