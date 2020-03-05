import React, { useState } from 'react';
import css from '../styles/main.scss';

const NoticeItem = ({selectable, from, time, content }) => {
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
          {selectable?<input type='checkbox' style={{marginRight:10}}/>:null}
          <div style={{ fontSize: '1rem', color: '#231F20' }}>{from}</div>
        </div>

        <span
          className={_class[accordian]}
          style={{ fontSize: '1rem', color: '#9BA2AA' }}
        />
      </div>
      {accordian && (
        <div
          className={css.itemContent}
          style={{
            fontSize:'.875rem',
            width: '100%',
            padding: '20px 0',
            borderTop: '1px solid #979797'
          }}
        >
          {content}
        </div>
      )}
      <div className={css.itemResult}>
        <div style={{ fontSize: '1rem', color: '#6D7278', margin:'auto'}}>{time}</div>
      </div>
    </div>
  );
};

export default NoticeItem;
