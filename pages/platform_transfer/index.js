import React, { Fragment, useState } from 'react';
import MobileLayoutLevel2 from '../../components/layouts/MobileLayoutLevel2';
import css from '../../styles/main.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import OutlineBtn from '../../components/OutlineBtn';
import Modal from 'react-modal';
import Item from '../../components/Item';
import Router from 'next/router';

const walletData = [
  { name: 'DG百家樂', value: 0 },
  { name: '歐博', value: 0 },
  { name: '沙龍百家樂', value: 0 },
  { name: 'WM百家樂', value: 0 },
  { name: '任你博體育', value: 0 },
  { name: 'Super體育博彩', value: 0 },
  { name: 'AFB88', value: '維護中' },
  { name: 'RTG天地', value: 0 },
  { name: 'Betsoft', value: 0 },
  { name: 'BTX', value: 0 },
  { name: '9K彩票', value: 0 },
  { name: '六合彩539', value: 0 }
];
const accountData = [
  { name: '主帳戶', value: 0 },
  { name: 'DG百家樂', value: 0 },
  { name: '歐博', value: 0 },
  { name: '沙龍百家樂', value: 0 },
  { name: 'WM百家樂', value: 0 },
  { name: '任你博體育', value: 0 },
  { name: 'Super體育博彩', value: 0 },
  { name: 'AFB88', value: '維護中' },
  { name: 'RTG天地', value: 0 },
  { name: 'Betsoft', value: 0 },
  { name: 'BTX', value: 0 },
  { name: '9K彩票', value: 0 },
  { name: '六合彩539', value: 0 }
];

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

const PlatformTransfer = () => {
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
  const renderAccountItem = data => {
    const filterdArr = data.filter(i => i.value !== '維護中');
    return filterdArr.map(d => <div className={css.accountItem}>{d.name}</div>);
  };
  const renderOptions = data => {
    const filterdArr = data.filter(i => i.value !== '維護中');
    return filterdArr.map(d => <option>{`轉帳到${d.name}`}</option>);
  };
  const renderTransferItem = data =>
    data.map((d, i) => (
      <div key={i} className={css.transferItem}>
        <div className={css.transferTitle}>{d.name}</div>
        <div className={css.transferValue}>{d.value}</div>
        <div />
      </div>
    ));
  const _class = {
    true: 'iconfont icon_chevron-up-light',
    false: 'iconfont icon_chevron-down-light'
  };
  const [wallet, setWallet] = useState(false);
  const [accSelector, setaAccSelector] = useState(false);
  const showWallet = () => {
    setWallet(!wallet);
  };
  const showSelector = () => {
    setaAccSelector(!accSelector);
  };
  const hideSelector = () => {
    setaAccSelector(false);
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
      {accSelector && (
        <div
          style={{ zIndex: 1034 }}
          className={css.overlay}
          onClick={hideSelector}
        />
      )}
      <div onClick={hideSelector} className={css.accountSelector}>
        {accSelector && renderAccountItem(accountData)}
      </div>
      <MobileLayoutLevel2 title="平台轉帳" path={true}>
        <div
          className={css.mobileBox}
          style={{ height: '650px', paddingBottom: 80, overflowY: 'scroll' }}
        >
          <Tabs defaultIndex={0} onSelect={index => console.log(index)}>
            <TabList>
              <Tab>平台轉帳</Tab>
              <Tab>轉帳記錄</Tab>
            </TabList>
            <TabPanel>
              <div className={css.transferWallet}>
                <div onClick={showWallet} className={css.transferItem}>
                  <div className={css.transferTitle}>主帳戶</div>
                  <div className={css.transferValue}>250</div>
                  <span className={_class[wallet]} />
                </div>
                {wallet && renderTransferItem(walletData)}
                {wallet && (
                  <div
                    className={`${css.transferItem} ${css.transferItem_sum}`}
                  >
                    <div className={css.transferTitle}>總額度</div>
                    <div className={css.transferValue}>250</div>
                    <div />
                  </div>
                )}
              </div>
              <div
                style={{
                  color: 'white',
                  padding: 3,
                  marginBottom: 15,
                  textAlign: 'right',
                  fontSize: 13
                }}
              >
                *點撃以展開轉帳資訊。
              </div>
              <form>
                <div className="form-group">
                  <div className="form-row" style={{ marginBottom: 20 }}>
                    <div className="col">
                      <label>轉出帳戶</label>
                      <div
                        onClick={showSelector}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between'
                        }}
                        className="form-control"
                      >
                        主帳戶
                        <span className="iconfont icon_caret-down-solid" />
                      </div>
                    </div>
                    <div className="col">
                      <label>轉入帳戶</label>
                      <div
                        onClick={showSelector}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between'
                        }}
                        className="form-control"
                      >
                        主帳戶
                        <span className="iconfont icon_caret-down-solid" />
                      </div>
                    </div>
                  </div>
                  <label>轉帳金額</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="請輸入整數金額"
                  />
                </div>

                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <div
                    style={{
                      flex: '0 1 52%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-evenly'
                    }}
                    className="btn btn-primary"
                  >
                    全部轉回主帳戶
                    <span
                      style={{ lineHeight: '1rem' }}
                      className="iconfont icon_redo-alt-regular"
                    />
                  </div>

                  <OutlineBtn
                    style={{ flex: '0 1 43%', padding: '5px 15px' }}
                    name="確認送出"
                  />
                </div>
              </form>
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
                    <div style={{ fontSize: '1rem', color: 'black' }}>
                      搜尋條件
                    </div>
                  </div>

                  <span
                    className={_class[accordian]}
                    style={{ fontSize: '1rem', color: '#9BA2AA' }}
                  />
                </div>
                {accordian && (
                  <div
                    style={{
                      width: '100%',
                      padding: '20px 0',
                      borderTop: '1px solid #979797'
                    }}
                  >
                    <form onSubmit={handleSubmit}>
                      <div class="form-group">
                        <label
                          style={{ color: 'black' }}
                          for="exampleFormControlSelect1"
                        >
                          類型
                        </label>
                        <select
                          class="form-control"
                          id="exampleFormControlSelect1"
                        >
                          <option>全部</option>
                          {renderOptions(accountData)}
                        </select>
                      </div>
                      <button
                        style={{ width: '100%' }}
                        className="btn btn-primary"
                      >
                        提交
                      </button>
                    </form>
                  </div>
                )}
              </div>
              <Item
                from="主帳戶轉出"
                time="01-16 10:29:34"
                data={{ from: '主帳戶', to: '六合彩球', value: 0 }}
                result={{ status: '成功', amount: 250 }}
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

export default PlatformTransfer;
