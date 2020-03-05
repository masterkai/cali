import React, {Fragment, useState} from 'react';
import css from '../styles/main.scss'
import {createMuiTheme, ThemeProvider, makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Modal from "react-modal";

const modalStyles = {
  content: {
    position: 'relative',
    backgroundImage: 'linear-gradient(225deg, #32C5FF 0%, #B620E0 51%, #F7B500 100%)',
    maxWidth: '994px',
    maxHeight: '574px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#d8d8d8',
    padding: '0',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    overflow: 'unset'
  }
};
Modal.setAppElement('#__next');

const walletData = [
  {name: '主錢包', value: 250},
  {name: 'DG百家樂', value: 0},
  {name: '歐博', value: 0},
  {name: '沙龍百家樂', value: 0},
  {name: 'WM百家樂', value: 0},
  {name: '任你博體育', value: 0},
  {name: 'Super體育', value: 0},
  {name: 'AFB88', value: '維護中'},
  {name: 'RTG天地', value: 0},
  {name: 'Betsoft', value: 0},
  {name: 'BTX', value: 0},
  {name: '9K彩票', value: 0},
  {name: '六合彩539', value: 0}
];

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: '100%',
  },
}));

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

function Wallet(props) {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    Modal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,.65)';
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const classes = useStyles();
  const [tabsActiveDefault, setTabsActiveDefault] = useState([
    true,
    false,
    false,
    false,
    false
  ]);

  const ActivateTab = index => {
    const reset = tabsActiveDefault.map(() => false);
    reset[index] = true;
    setTabsActiveDefault(reset);
  };

  const [switchTab, setSwitchTab] = useState([true, false]);
  const ActivateSwitchTab = index => {
    const reset = switchTab.map(() => false);
    reset[index] = true;
    setSwitchTab(reset);
  };

  const _class = {
    true: `${css.tab} ${css.active}`,
    false: `${css.tab}`
  };

  const style = {
    true: {display: 'flex'},
    false: {display: 'none'}
  };

  const formStyle = {
    true: {display: 'block'},
    false: {display: 'none'}
  };

  return (
    <Fragment>

      <span onClick={openModal} data-tip="電子錢包" className="iconfont icon_wallet-light" style={{marginLeft: 20}}/>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="wallet"
      >
        <div
          onClick={closeModal}
          className='wallet'>
          <span className="iconfont icon_times-light" style={{fontSize: 26, color: '#32C5FF'}}/>
        </div>
        <style jsx>
          {
            `
            .wallet {
              position: absolute;
              top: -18px;
              right: -18px;
              box-sizing: border-box;
              border: 6px solid #32C5FF;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: black;
              width: 50px;
              height: 50px;
              border-radius: 50px;
            }
            `
          }
        </style>
        <div className={css.walletBox}>
          <div className={css.walletMain}>
            <div className={css.mainNav}>
              <div onClick={() => ActivateTab(0)}
                   className={_class[tabsActiveDefault[0]]}>轉帳
              </div>
              <div onClick={() => ActivateTab(1)}
                   className={_class[tabsActiveDefault[1]]}>存款
              </div>
              <div onClick={() => ActivateTab(2)}
                   className={_class[tabsActiveDefault[2]]}>提款
              </div>
              <div onClick={() => ActivateTab(3)}
                   className={_class[tabsActiveDefault[3]]}>歷史
              </div>
              <div onClick={() => ActivateTab(4)}
                   className={_class[tabsActiveDefault[4]]}>更改密碼
              </div>
            </div>
            <div
              style={style[tabsActiveDefault[0]]}
              className={css.uiBox}>
              <div className={css.uiContainer}>
                <form>
                  <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-3 col-form-label"
                           style={{color: 'white'}}>從這轉帳</label>
                    <div className="col-sm-9">
                      <select className="form-control form-control-sm">
                        <option>— 請選擇 —</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-3 col-form-label"
                           style={{color: 'white'}}>轉帳去到</label>
                    <div className="col-sm-9">
                      <select className="form-control form-control-sm">
                        <option>— 請選擇 —</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-3 col-form-label"
                           style={{color: 'white'}}>轉帳金額</label>
                    <div className="col-sm-9">
                      <input type="password" className="form-control form-control-sm" id="inputPassword"/>
                    </div>
                  </div>
                  <button className={css.submitBtn}>轉帳</button>
                </form>
              </div>
            </div>
            <div
              style={style[tabsActiveDefault[1]]}
              className={css.uiBox}>
              <div className={css.uiContainer}>
                <div className={css.switchBox}>
                  <div
                    onClick={() => ActivateSwitchTab(0)}
                    className={_class[switchTab[0]]}>網上支付
                  </div>
                  <div
                    onClick={() => ActivateSwitchTab(1)}
                    className={_class[switchTab[1]]}>VIP存款區
                  </div>
                </div>
                <form style={formStyle[switchTab[0]]}>
                  <div className={`form-group row ${css.formGroupCenter}`}>
                    <div className="form-check" style={{margin: '0 10px 10px'}}>
                      <input className="form-check-input" type="radio" name="g" id="creditCard"/>
                      <label className="form-check-label" htmlFor="creditCard" style={{color: 'white'}}>
                        信用卡
                      </label>
                    </div>
                    <div className="form-check" style={{margin: '0 10px 10px'}}>
                      <input className="form-check-input" type="radio" name="g" id="bank"/>
                      <label className="form-check-label" htmlFor="bank" style={{color: 'white'}}>
                        銀行
                      </label>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-3 col-form-label"
                           style={{color: 'white'}}>從這轉帳</label>
                    <div className="col-sm-9">
                      <select className="form-control form-control-sm">
                        <option>— 請選擇 —</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-3 col-form-label"
                           style={{color: 'white'}}>數額</label>
                    <div className="col-sm-9">
                      <input type='text' className="form-control form-control-sm"/>

                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-3 col-form-label"
                           style={{color: 'white'}}>優惠</label>
                    <div className="col-sm-9">
                      <select className="form-control form-control-sm">
                        <option>— 請選擇 —</option>
                      </select>
                    </div>
                  </div>
                  <button className={css.submitBtn}>轉帳</button>
                  <p style={{color: 'white', textAlign: 'center', marginTop: 10, fontSize: 12}}>如需協助，請洽在線客服詢問!</p>
                </form>
                <form style={formStyle[switchTab[1]]}>
                  <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-3 col-form-label"
                           style={{color: 'white'}}>銀行戶口</label>
                    <div className="col-sm-9">
                      <select className="form-control form-control-sm">
                        <option>— 請選擇 —</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group row" style={{marginBottom: 5}}>
                    <label htmlFor="inputPassword" className="col-sm-3 col-form-label"
                           style={{color: 'white'}}>數額</label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control form-control-sm"/>
                      <div style={{color: 'white', marginTop: 5, fontSize: 10, textAlign: 'right'}}>最低100.00</div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-3 col-form-label"
                           style={{color: 'white'}}>備註</label>
                    <div className="col-sm-9">
                      <select className="form-control form-control-sm">
                        <option>— 請選擇 —</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-3 col-form-label"
                           style={{color: 'white'}}>存款日期</label>
                    <div className="col-sm-9">
                      <ThemeProvider theme={theme}>
                        <TextField
                          id="date"
                          label={null}
                          type="date"
                          defaultValue="2017-05-24"
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </ThemeProvider>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-3 col-form-label"
                           style={{color: 'white'}}>優惠</label>
                    <div className="col-sm-9">
                      <select className="form-control form-control-sm">
                        <option>— 請選擇 —</option>
                      </select>
                    </div>
                  </div>

                  <button className={css.submitBtn}>提交</button>
                  <p style={{color: 'white', textAlign: 'center', marginTop: 10, fontSize: 12}}>如需協助，請洽在線客服詢問</p>
                </form>
              </div>
            </div>
            <div
              style={style[tabsActiveDefault[2]]}
              className={css.uiBox}>
              <div className={css.uiContainer}>
                <form>
                  <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-3 col-form-label"
                           style={{color: 'white'}}>銀行</label>
                    <div className="col-sm-9">
                      <select className="form-control form-control-sm">
                        <option>— 選擇銀行 —</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-3 col-form-label"
                           style={{color: 'white'}}>銀行戶口名字</label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control form-control-sm"/>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-3 col-form-label"
                           style={{color: 'white'}}>銀行戶口號碼</label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control form-control-sm"/>
                    </div>
                  </div>

                  <button className={css.submitBtn}>轉帳</button>
                </form>
              </div>
            </div>
            <div
              style={style[tabsActiveDefault[3]]}
              className={css.uiBox}>
              <div className={css.uiContainer}>
                <form>
                  <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-3 col-form-label"
                           style={{color: 'white'}}>銀行</label>
                    <div className="col-sm-9">
                      <select className="form-control form-control-sm">
                        <option value="deposit">存款(VIP)</option>
                        <option value="depositPG">存款 (網上支付)</option>
                        <option value="withdrawal">提款</option>
                        <option value="transfer">轉帳</option>
                        <option value="wallet">錢包</option>
                        <option value="promotion">優惠</option>
                        <option value="bet">下注歷史</option>

                      </select>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-3 col-form-label"
                           style={{color: 'white'}}>開始日期</label>
                    <div className="col-sm-9">
                      <ThemeProvider theme={theme}>
                        <TextField
                          id="date"
                          label={null}
                          type="date"
                          defaultValue="2020-03-01"
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </ThemeProvider>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-3 col-form-label"
                           style={{color: 'white'}}>結束日期</label>
                    <div className="col-sm-9">
                      <ThemeProvider theme={theme}>
                        <TextField
                          id="date"
                          label={null}
                          type="date"
                          defaultValue="2020-03-04"
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </ThemeProvider>
                    </div>
                  </div>

                  <button className={css.submitBtn}>搜尋</button>
                </form>
              </div>
            </div>
            <div
              style={style[tabsActiveDefault[4]]}
              className={css.uiBox}>
              <div className={css.uiContainer}>
                <form>
                  <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-3 col-form-label"
                           style={{color: 'white'}}>舊密碼</label>
                    <div className="col-sm-9">
                      <input type="password" className="form-control form-control-sm"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-3 col-form-label"
                           style={{color: 'white'}}>新密碼</label>
                    <div className="col-sm-9">
                      <input type="password" className="form-control form-control-sm"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-3 col-form-label"
                           style={{color: 'white'}}>確認新密碼</label>
                    <div className="col-sm-9">
                      <input type="password" className="form-control form-control-sm"/>
                    </div>
                  </div>
                  <button className={css.submitBtn}>提交</button>
                </form>
              </div>
            </div>
          </div>
          <div className={css.itemBox}>
            <div className={css.headerBox}>
              <div className={css.name}>
                錢包
              </div>
              <div className={css.surplus}>
                餘額
              </div>
              <span className='iconfont icon_Transfer'/>
            </div>
            {walletData.map((d, i) => (
              <div key={i} className={css.listContainer}>
                <div className={css.name}>
                  {d.name}
                </div>
                <div className={css.surplus}>
                  {d.value}
                </div>
                <span className='iconfont icon_Transfer'/>
              </div>
            ))}
            <button className={css.submitBtn}><span style={{marginRight: 10}} className='iconfont icon_Transfer'/>一鍵帶回
            </button>
          </div>
        </div>



      </Modal>

    </Fragment>
  );
}

export default Wallet;