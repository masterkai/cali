import React, { useState } from 'react';
import css from '../styles/main.scss';

const Item = ({ from, time, data, result }) => {
  const _class = {
    true: 'iconfont icon_chevron-up-light',
    false: 'iconfont icon_chevron-down-light'
  };

  const [accordian, setAccordian] = useState(false);
  const showAccordian = () => {
    setAccordian(!accordian);
  };

  return (
    <div className={css.itemContainer}>
      <div
        onClick={showAccordian}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          height: 50
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <div style={{ fontSize: '1rem', color: '#231F20' }}>{from}</div>
        </div>
        <div style={{ fontSize: '1rem', color: '#6D7278' }}>{time}</div>
        <span
          className={_class[accordian]}
          style={{ fontSize: '1rem', color: '#9BA2AA' }}
        />
      </div>
      {accordian && (
        <div
          className={css.itemContent}
          style={{
            width: '100%',
            padding: '20px 0',
            borderTop: '1px solid #979797'
          }}
        >
          <div className={css.item}>
            轉出帳戶：<span style={{ color: '#231F20' }}>{data.from}</span>
          </div>
          <div className={css.item}>
            轉入帳戶：<span style={{ color: '#FA6400' }}>{data.to}</span>
          </div>
          <div className={css.item}>
            剩餘額度：<span style={{ color: '#231F20' }}>{data.value}</span>
          </div>
        </div>
      )}
      <div className={css.itemResult}>
        <div>
          狀態：<span style={{ color: '#231F20' }}>{result.status}</span>
        </div>
        <div>
          轉帳金額：<span style={{ color: '#0091FF' }}>{result.amount}</span>
        </div>
      </div>
    </div>
  );
};

export default Item;
