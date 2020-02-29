import React, { useState, useEffect } from 'react';
import css from '../styles/main.scss';
const customStyle = { cursor: 'pointer', position: 'relative' };
const customBtn = {
  backgroundColor: 'deepskyblue',
  color: 'white',
  borderRadius: 20
};
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
const DDWallet = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dropMenu = event => {
    setShowMenu(!showMenu);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };
  useEffect(() => {
    window.addEventListener('click', closeMenu);
    return window.removeEventListener('click', closeMenu);
  });
  const renderItem = data =>
    data.map((d, i) => (
      <div key={i} className={css.item}>
        <div className={css.itemName}>{d.name}</div>
        <div className={css.itemValue}>{d.value}</div>
      </div>
    ));
  const _class = {
    true: 'iconfont icon_chevron-up-light',
    false: 'iconfont icon_chevron-down-light'
  };
  return (
    <div style={customStyle}>
      <span onClick={dropMenu} className={_class[showMenu]} />
      {showMenu ? (
        <div className={css.DDWallet}>
          <div className={css.itemsBox}>{renderItem(walletData)}</div>
          <div className={css.bottomBox}>
            <div className={css.sumBox}>
              <div>總額度</div>
              <div>250</div>
            </div>
            <button className="btn" style={customBtn}>
              全部轉回主帳戶
            </button>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default DDWallet;
