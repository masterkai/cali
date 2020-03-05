import React, {Fragment, useState} from 'react';
import MobileLayoutLevel2 from '../../components/layouts/MobileLayoutLevel2';
import css from '../../styles/main.scss';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {createMuiTheme, ThemeProvider, makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import OutlineBtn from '../../components/OutlineBtn';
import Modal from 'react-modal';
import NoticeItem from '../../components/noticeItem';
import Item from '../../components/Item';
import Router from 'next/router';

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    palette: {
      primary: 'info',
      secondary: '#6DD400',
    },
    status: {
      danger: 'orange',
    },
    MuiButtonGroup: {
      root: {
        width: '100%',
      }
    },
    MuiButtonBase: {
      root: {
        flex: '1 1 25%',
      }
    },
    MuiButton: {
      contained: {
        padding: '6px 12px',
        color: 'white',
        backgroundColor: '#6D7278'
      },
      containedSecondary: {
        color: 'white',
        backgroundColor: '#6DD400'
      },
      containedPrimary: {
        color: 'white',
        backgroundColor: '#0091FF'
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

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    padding: '6px 12px'
  },
}));

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

const Notice = () => {
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

  const _class = {
    true: 'iconfont icon_chevron-up-light',
    false: 'iconfont icon_chevron-down-light'
  };

  const [accordian, setAccordian] = useState(false);
  const showAccordian = () => {
    setAccordian(!accordian);
  };
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <Fragment>
      <MobileLayoutLevel2 title="通知" path={true}>
        <div
          className={css.mobileBox}
          style={{height: '650px', paddingBottom: 80, overflowY: 'scroll'}}
        >
          <Tabs defaultIndex={0} onSelect={index => console.log(index)}>
            <TabList>
              <Tab>個人訊息</Tab>
              <Tab>公告專區</Tab>
            </TabList>
            <TabPanel>
              <ThemeProvider theme={theme}>
                <div className={css.buttonGroup}>
                  <Button
                    variant="contained" color="primary"
                  >全選
                  </Button>
                  <Button variant="contained" color="primary">
                    取消
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<DeleteIcon/>}
                  >
                    刪除
                  </Button>
                  <Button
                    onClick={()=>Router.push('/online_message')}
                    variant="contained"
                    color="secondary">
                    線上留言
                  </Button>
                </div>
              </ThemeProvider>
              <NoticeItem
                selectable={true}
                from="專屬儲值帳號更改通知"
                content='親愛的會員您好：
即日起，您的儲值帳號已經更改，由於本公司儲值帳號會不定時做更換，
請您務必在儲值前先登入官網查詢《儲值帳號》，確認您的《專屬銀行帳號》，
後再進行儲值，轉入舊儲值帳號恕不接受轉換點數，不便之處，敬請見諒。'
                time="2020-01-16 07:09"
              />
              <NoticeItem
                selectable={true}
                from="線上留言"
                content='親愛的會員您好：
即日起，您的儲值帳號已經更改，由於本公司儲值帳號會不定時做更換，
請您務必在儲值前先登入官網查詢《儲值帳號》，確認您的《專屬銀行帳號》，
後再進行儲值，轉入舊儲值帳號恕不接受轉換點數，不便之處，敬請見諒。'
                time="2020-01-16 07:09"
              />
            </TabPanel>
            <TabPanel>
              <div className={css.itemContainer}>
                <div
                  onClick={showAccordian}
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    width: '100%',
                    height: 50
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      position: 'absolute',
                      left: '50%',
                      transform: 'translateX(-50%)'
                    }}
                  >
                    <div style={{fontSize: '1rem', color: 'black'}}>
                      搜尋條件
                    </div>
                  </div>

                  <span
                    className={_class[accordian]}
                    style={{fontSize: '1rem', color: '#9BA2AA'}}
                  />
                </div>
                {accordian && (
                  <div
                    style={{
                      width: '100%',
                      padding: '20px 0',
                      borderTop: '1px solid #979797',
                      display: 'flex',
                      justifyContent:'space-between',
                      flexWrap:'wrap'
                    }}
                  >
                   <div style={{flexBasis:'50%',textAlign:'center'}}><div style={{border:'1px solid #979797',margin:'4px 6px',borderRadius:'5px',padding:'5px',backgroundColor:'#c0c0c0'}}>全部</div></div>
                   <div style={{flexBasis:'50%',textAlign:'center'}}><div style={{border:'1px solid #979797',margin:'4px 6px',borderRadius:'5px',padding:'5px',backgroundColor:'#c0c0c0'}}>系統</div></div>
                   <div style={{flexBasis:'50%',textAlign:'center'}}><div style={{border:'1px solid #979797',margin:'4px 6px',borderRadius:'5px',padding:'5px',backgroundColor:'#c0c0c0'}}>特殊</div></div>
                   <div style={{flexBasis:'50%',textAlign:'center'}}><div style={{border:'1px solid #979797',margin:'4px 6px',borderRadius:'5px',padding:'5px',backgroundColor:'#c0c0c0'}}>存提款</div></div>
                   <div style={{flexBasis:'50%',textAlign:'center'}}><div style={{border:'1px solid #979797',margin:'4px 6px',borderRadius:'5px',padding:'5px',backgroundColor:'#c0c0c0'}}>銀行維護</div></div>
                  </div>
                )}
              </div>
              <NoticeItem
                selectable={false}
                from="專屬儲值帳號更改通知"
                content='親愛的會員您好：
即日起，您的儲值帳號已經更改，由於本公司儲值帳號會不定時做更換，
請您務必在儲值前先登入官網查詢《儲值帳號》，確認您的《專屬銀行帳號》，
後再進行儲值，轉入舊儲值帳號恕不接受轉換點數，不便之處，敬請見諒。'
                time="2020-01-16 07:09"
              />
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

export default Notice;
