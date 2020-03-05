import React, {Fragment, useState} from 'react';
import css from '../styles/main.scss'
import {createMuiTheme, ThemeProvider, makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Modal from "react-modal";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import BetItem from "./BetItem";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import DeleteIcon from "@material-ui/icons/Delete";
import Router from "next/router";
import NoticeItem from "./noticeItem";

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

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
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

Modal.setAppElement('#__next');

function MemberNotification(props) {
  const classes = useStyles();
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

  const _class = {
    true: 'iconfont icon_chevron-up-light',
    false: 'iconfont icon_chevron-down-light'
  };

  const [accordian, setAccordian] = useState(false);
  const showAccordian = () => {
    setAccordian(!accordian);
  };

  return (
    <Fragment>
      <span
        onClick={openModal}
        className="iconfont icon_bell-light"
        data-tip="會員通知"
        style={{marginLeft: 20}}/>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="wallet"
      >
        <div className={css.modalHeader}>
          <div ref={subtitle => (Modal.subtitle = subtitle)}>
            會員通知
          </div>
          <span className="iconfont icon_times-light" onClick={closeModal}/>
        </div>

        <div className={`${css.modalBody} ${css.modalBody__BetRecordsLayout}`}>
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
                    onClick={() => Router.push('/online_message')}
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
              <NoticeItem
                selectable={true}
                from="線上留言"
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
                      justifyContent: 'space-between',
                      flexWrap: 'wrap'
                    }}
                  >
                    <div style={{flexBasis: '50%', textAlign: 'center'}}>
                      <div style={{
                        border: '1px solid #979797',
                        margin: '4px 6px',
                        borderRadius: '5px',
                        padding: '5px',
                        backgroundColor: '#c0c0c0'
                      }}>全部
                      </div>
                    </div>
                    <div style={{flexBasis: '50%', textAlign: 'center'}}>
                      <div style={{
                        border: '1px solid #979797',
                        margin: '4px 6px',
                        borderRadius: '5px',
                        padding: '5px',
                        backgroundColor: '#c0c0c0'
                      }}>系統
                      </div>
                    </div>
                    <div style={{flexBasis: '50%', textAlign: 'center'}}>
                      <div style={{
                        border: '1px solid #979797',
                        margin: '4px 6px',
                        borderRadius: '5px',
                        padding: '5px',
                        backgroundColor: '#c0c0c0'
                      }}>特殊
                      </div>
                    </div>
                    <div style={{flexBasis: '50%', textAlign: 'center'}}>
                      <div style={{
                        border: '1px solid #979797',
                        margin: '4px 6px',
                        borderRadius: '5px',
                        padding: '5px',
                        backgroundColor: '#c0c0c0'
                      }}>存提款
                      </div>
                    </div>
                    <div style={{flexBasis: '50%', textAlign: 'center'}}>
                      <div style={{
                        border: '1px solid #979797',
                        margin: '4px 6px',
                        borderRadius: '5px',
                        padding: '5px',
                        backgroundColor: '#c0c0c0'
                      }}>銀行維護
                      </div>
                    </div>
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
              <NoticeItem
                selectable={false}
                from="專屬儲值帳號更改通知"
                content='親愛的會員您好：
即日起，您的儲值帳號已經更改，由於本公司儲值帳號會不定時做更換，
請您務必在儲值前先登入官網查詢《儲值帳號》，確認您的《專屬銀行帳號》，
後再進行儲值，轉入舊儲值帳號恕不接受轉換點數，不便之處，敬請見諒。'
                time="2020-01-16 07:09"
              />
              <NoticeItem
                selectable={false}
                from="專屬儲值帳號更改通知"
                content='親愛的會員您好：
即日起，您的儲值帳號已經更改，由於本公司儲值帳號會不定時做更換，
請您務必在儲值前先登入官網查詢《儲值帳號》，確認您的《專屬銀行帳號》，
後再進行儲值，轉入舊儲值帳號恕不接受轉換點數，不便之處，敬請見諒。'
                time="2020-01-16 07:09"
              />
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


      </Modal>

    </Fragment>
  );
}

export default MemberNotification;