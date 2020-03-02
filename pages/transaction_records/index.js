import React, {Fragment, useState} from 'react';
import MobileLayoutLevel2 from '../../components/layouts/MobileLayoutLevel2';
import css from '../../styles/main.scss';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import OutlineBtn from '../../components/OutlineBtn';
import Modal from 'react-modal';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
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
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  textField: {
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
    width: 200
  }
}));

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiButtonGroup: {
      root:{
        width:'100%',
      }
    },
    MuiButtonBase: {
      root:{
        flex:'1 1 25%',
      }
    },
    MuiButton: {
      outlinedPrimary: {
        color: 'white',
        border: '1px solid rgba(255,255,255, 0.68)'
      }
    },
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
          style={{height: '700px', paddingBottom: 80, overflowY: 'scroll'}}
        >
          <Tabs defaultIndex={0} onSelect={index => console.log(index)}>
            <TabList>
              <Tab>未完成</Tab>
              <Tab>已完成</Tab>
            </TabList>
            <TabPanel>
              <ThemeProvider theme={theme}>
                <form style={{marginBottom:30}} className={classes.container} noValidate>
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
                  <ButtonGroup style={{marginBottom: 20}} color="primary"
                               aria-label="large outlined primary button group">
                    <Button>明日</Button>
                    <Button>今日</Button>
                    <Button>昨日</Button>
                    <Button>本週</Button>
                  </ButtonGroup>
                  <ButtonGroup style={{margin: '0 0 20px'}} color="primary"
                               aria-label="large outlined primary button group">
                    <Button>上週</Button>
                    <Button>本月</Button>
                    <Button>上月</Button>
                    <Button>近一個月</Button>
                  </ButtonGroup>
                  <Button variant="contained">清除時間</Button>
                  <Button variant="contained" color="primary">搜尋</Button>
                </form>
                <div className={`${css.itemContainer} ${css.itemContainer__norecords}`} style={{height:48}}>
                  尚無任何記錄
                </div>
                <div className={`${css.itemContainer} ${css.itemContainer__records}`} style={{height:'auto'}}>
                  <div>單號：xxxxx</div>
                  <div>2020/02/27/15:28</div>
                  <div>金額：1000</div>
                  <div>狀態：<span style={{color:'#E02020'}}>失敗</span></div>
                </div>

              </ThemeProvider>
            </TabPanel>
            <TabPanel>
              <ThemeProvider theme={theme}>
                <form style={{marginBottom:30}} className={classes.container} noValidate>
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
                  <ButtonGroup style={{marginBottom: 20}} color="primary"
                               aria-label="large outlined primary button group">
                    <Button>明日</Button>
                    <Button>今日</Button>
                    <Button>昨日</Button>
                    <Button>本週</Button>
                  </ButtonGroup>
                  <ButtonGroup style={{margin: '0 0 20px'}} color="primary"
                               aria-label="large outlined primary button group">
                    <Button>上週</Button>
                    <Button>本月</Button>
                    <Button>上月</Button>
                    <Button>近一個月</Button>
                  </ButtonGroup>
                  <Button variant="contained">清除時間</Button>
                  <Button variant="contained" color="primary">搜尋</Button>
                </form>
                <div className={`${css.itemContainer} ${css.itemContainer__norecords}`} style={{height:48}}>
                  尚無任何記錄
                </div>
                <div className={`${css.itemContainer} ${css.itemContainer__records}`} style={{height:'auto'}}>
                  <div>單號：xxxxx</div>
                  <div>2020/02/27/15:28</div>
                  <div>金額：1000</div>
                  <div>狀態：<span style={{color:'#0091FF'}}>成功</span></div>
                </div>

              </ThemeProvider>
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

export default TransactionRecords;
