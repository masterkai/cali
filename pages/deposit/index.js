import React, { Fragment } from 'react';
import MobileLayoutLevel2 from '../../components/layouts/MobileLayoutLevel2';
import Router from 'next/router';
import css from '../../styles/main.scss';

const Deposit = prop => {
  return (
    <Fragment>
      <MobileLayoutLevel2 title="存款專區" path={true}>
        <div
          className={css.mobileBox_nobg}
          style={{ height: 700, paddingBottom: 80 }}
        >
          <div
            style={{
              height: 74,
              backgroundColor: '#d8d8d8',
              borderRadius: 3,
              marginBottom: 30,
              padding: '0 20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span
                className="iconfont icon_ATM"
                style={{
                  fontSize: '3.5rem',
                  color: '#F56F6F',
                  marginRight: 10
                }}
              />
              <div style={{ fontSize: '1rem', color: 'black' }}>銀行轉帳</div>
            </div>

            <span
              onClick={() => Router.push('/deposit/MoneyTransfer')}
              className="iconfont icon_chevron-right-light"
              style={{ fontSize: '1rem', color: '#9BA2AA' }}
            />
          </div>
          <div
            style={{
              height: 74,
              backgroundColor: '#d8d8d8',
              borderRadius: 3,
              marginBottom: 30,
              padding: '0 20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span
                className="iconfont icon_convenience-store"
                style={{
                  fontSize: '3.5rem',
                  color: '#B842FC',
                  marginRight: 10
                }}
              />
              <div style={{ fontSize: '1rem', color: 'black' }}>超商儲值</div>
            </div>
            <span
              onClick={() => Router.push('/deposit/convenienceStore')}
              className="iconfont icon_chevron-right-light"
              style={{ fontSize: '1rem', color: '#9BA2AA' }}
            />
          </div>
        </div>
      </MobileLayoutLevel2>
    </Fragment>
  );
};

export default Deposit;
