import React, { Fragment } from 'react';
import MobileLayoutLevel2 from '../../components/layouts/MobileLayoutLevel2';
import css from '../../styles/main.scss';
import OutlineBtn from '../../components/OutlineBtn';

const Withdrawals = prop => {
  return (
    <Fragment>
      <MobileLayoutLevel2 title="提款專區" path={true}>
        <div
          className={css.mobileBox_nobg}
          style={{ height: 'auto', paddingBottom: 80 }}
        >
          <div className={`${css.itemContainer} ${css.itemContainer__simple}`}>
            <img
              style={{ padding: 10, width: 150 }}
              src="/images/banks/bank01.png"
              alt=""
              className="img-responsive"
            />
            <div>尾號：6041</div>
          </div>

          <form>
            <div className="form-group" style={{ marginBottom: 30 }}>
              <label style={{ color: 'white' }}>提款金額</label>
              <input
                type="text"
                className="form-control"
                placeholder="最低500點"
              />
            </div>
            <label style={{ color: 'white' }}>提款密碼</label>
            <div className={css.inputGroup} style={{ marginBottom: 30 }}>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <button type="button" className="btn btn-outline-light">
                簡訊
              </button>
            </div>
            <OutlineBtn name="確認送出" />
          </form>

          <div className={css.noticeBox}>
            <div className={css.noticeTitle}>注意事項</div>
            <ol style={{ paddingLeft: 20 }}>
              <li>
                您每日可免費提款1次，第2次起需收取30點+1%(最低100點)手續費，手續費合計上限：1000點(每日00:00重置)，
                每日提款次數上限2次， 每日提款點數上限2000000點。
              </li>
              <li>
                須達到近期存款金額的50%有效投注量才可提出申請。如未達提款標準，將酌收存款金額5%的行政處理費用。
              </li>
              <li>如欲取消提款申請，請至會員中心→交易記錄→取消申請操作。</li>
            </ol>
            <p className={css.ps}>
              PS.
              如利用本平台進行任何洗錢詐騙行為，本公司將保留權利終止會員服務及凍結其帳戶。
            </p>
          </div>
        </div>
      </MobileLayoutLevel2>
    </Fragment>
  );
};

export default Withdrawals;
