import React, {Fragment, useState} from 'react';
import MobileLayoutLevel2 from '../../components/layouts/MobileLayoutLevel2';
import Router from 'next/router';
import css from '../../styles/main.scss';
import convenience from '../../data/convenienceStoreData'
import ConvenienceStoreItem from "../../components/ConvenienceStoreItem";

const Deposit = prop => {
  const renderConvenience = (data,i) => {
    return data.map((d,i)=><ConvenienceStoreItem key={i} logo={d.logo} processImg={d.processImg}/>)
  }
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
      <MobileLayoutLevel2 title="存款專區" path={true}>
        <div
          className={css.mobileBox_nobg}
          style={{ height: 700, paddingBottom: 80, overflowY:'scroll' }}
        >
          <div
            onClick={() => Router.push('/deposit/MoneyTransfer')}
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
              className="iconfont icon_chevron-right-light"
              style={{ fontSize: '1rem', color: '#9BA2AA' }}
            />
          </div>
          <div className={css.itemContainer}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%'
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
                <div style={{ fontSize: '1rem', color: 'black' }}>超商儲值<br/><span style={{fontSize:12}}>(請前往卡利Line客服)</span></div>
                {/*聯結至公司Line客服*/}
              </div>

              <span
                className="iconfont icon_chevron-right-light"
                style={{ fontSize: '1rem', color: '#9BA2AA' }}
              />
            </div>

          </div>
          <p style={{color:'#fff'}}>超商轉帳教學<br/><span style={{color:'#fff', fontSize:12}}>(請點選超商平台如下，謝謝！)</span></p>
          <div className={css.dropDownBox} style={{marginTop:0,backgroundColor: '#d8d8d8',padding:'0 10px 10px'}}>

            {renderConvenience(convenience)}
          </div>
        </div>
      </MobileLayoutLevel2>
    </Fragment>
  );
};

export default Deposit;
