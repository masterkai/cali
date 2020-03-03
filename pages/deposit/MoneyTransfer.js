import React, {Fragment, useState} from 'react';
import MobileLayoutLevel2 from '../../components/layouts/MobileLayoutLevel2';
import OutlineBtn from '../../components/OutlineBtn';
import css from '../../styles/main.scss';

const MoneyTransfer = prop => {
  const [accordian, setAccordian] = useState(false);
  const showAccordian = () => {
    setAccordian(!accordian);
  };
  const _class = {
    true: 'iconfont icon_chevron-up-light',
    false: 'iconfont icon_chevron-down-light'
  };
  return (
    <Fragment>
      <MobileLayoutLevel2 title="存款專區" back={true}>
        <div
          className={css.mobileBox_nobg}
          style={{height: 'auto', paddingBottom: 80}}
        >
          <div className={css.itemContainer}>
            <div
              onClick={showAccordian}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%'
              }}
            >
              <div style={{display: 'flex', alignItems: 'center'}}>
                <span
                  className="iconfont icon_ATM"
                  style={{
                    fontSize: '3.5rem',
                    color: '#F56F6F',
                    marginRight: 10
                  }}
                />
                <div style={{fontSize: '1rem', color: 'black'}}>銀行轉帳</div>
              </div>

              <span
                className={_class[accordian]}
                style={{fontSize: '1rem', color: '#9BA2AA'}}
              />
            </div>
            {accordian && (
              <div className={css.dropDownBox}>
                <div>銀行轉帳</div>
                <div>臨櫃匯款</div>
                <div>超商儲值</div>
              </div>
            )}
          </div>

          <div className={css.itemPlate}>
            <div className={css.itemPlateTitle}>請先存款到下列帳戶</div>
            <div className={css.listItem}>
              <div>銀行：</div>
              <div style={{textAlign: 'center'}}>合庫銀行-府城分行</div>
              <div style={{width: 60}}/>
            </div>
            <div className={css.listItem}>
              <div>帳號：</div>
              <div style={{textAlign: 'center'}}>
                (銀行代號：006)
                <br/>
                5229-8722-17822
              </div>
              <button type="button" className="btn btn-outline-dark">
                複製
              </button>
            </div>
          </div>

          <div className={`${css.itemContainer} ${css.itemContainer__simple}`}>
            <img
              style={{padding: 10, width: 150}}
              src="/images/banks/bank01.png"
              alt=""
              className="img-responsive"
            />
            <div>尾號：6041</div>
          </div>
          <form>
            <div className="form-group" style={{marginBottom: 30}}>
              <label style={{color: 'white'}}>存款金額</label>
              <input
                type="text"
                className="form-control"
                placeholder="100-500000"
              />
            </div>
            <OutlineBtn name="確認送出"/>
          </form>

          <div className={css.noticeBox}>
            <div className={css.noticeTitle}>注意事項</div>
            <ol style={{paddingLeft: 20}}>
              <li>
                請務必依照指定的銀行帳號進行存款，若轉至舊有的銀行帳號將無法查收，恕不負責。
              </li>
              <li>僅接受註冊戶名轉入之款項，否則將無法轉換點數。</li>
              <li>完成轉帳手續後再填寫上方欄位資料送出申請。</li>
            </ol>
          </div>
        </div>
      </MobileLayoutLevel2>
    </Fragment>
  );
};

export default MoneyTransfer;
