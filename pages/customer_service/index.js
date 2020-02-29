import React, { Fragment } from 'react';
import MobileLayoutLevel2 from '../../components/layouts/MobileLayoutLevel2';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import css from '../../styles/main.scss';
import OutlineBtn from '../../components/OutlineBtn';

const CustomerService = prop => {
  return (
    <Fragment>
      <MobileLayoutLevel2 title="在線客服" path={true}>
        <div
          className={css.mobileBox_nobg}
          style={{ height: 700, paddingBottom: 80 }}
        >
          <div style={{ textAlign: 'center', marginBottom: 30 }}>
            <div style={{ color: 'white', marginBottom: 10 }}>在線客服</div>
            <img
              src="/images/qrCode.png"
              alt=""
              className="img-responsive"
              style={{ height: 123 }}
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
            <img
              src="/images/line-messenger.svg"
              alt=""
              className="img-responsive"
              style={{ height: 55 }}
            />
            <div>@888pi</div>
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
            <div>@意見反饋</div>
            <div>8888pipipi@gmail.com</div>
          </div>
          <TextareaAutosize
            style={{
              width: '100%',
              height: 120,
              marginBottom: 20,
              backgroundColor: '#d8d8d8',
              padding: 10
            }}
            rowsMax={4}
            aria-label="maximum height"
            placeholder="說些什麼吧！"
          />
          <OutlineBtn name="送出" style={{ width: '60%', margin: '0 auto' }} />
        </div>
      </MobileLayoutLevel2>
    </Fragment>
  );
};

export default CustomerService;
