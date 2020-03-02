import css from "../styles/main.scss";
import React, {useState} from "react";

const BetItem = ({status}) => {
  const [accordian, setAccordian] = useState(false);
  const showAccordian = () => {
    setAccordian(!accordian);
  };
  const _class = {
    true: 'iconfont icon_chevron-up-light',
    false: 'iconfont icon_chevron-down-light'
  };

  return (<div className={css.itemContainer}>
    <div
      onClick={showAccordian}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
      }}
    >
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexBasis: '90%'}}>

        <div style={{fontWeight: 300, fontSize: '.875rem', color: 'black', padding: '15px 0'}}>2020/02/27/15:28:35</div>
        <div style={{fontWeight: 300, fontSize: '.875rem', color: 'black', padding: '15px 0'}}>輸/贏：<span
          style={status>0?{color: '#0091FF'}:{color: '#E02020'}}>{status}</span></div>
      </div>

      <span
        className={_class[accordian]}
        style={{fontSize: '1rem', color: '#9BA2AA'}}
      />
    </div>
    {accordian && (
      <div className={css.dropDownBox}>
        <div className={css.listItem}>單號：<span>xxxxx</span></div>
        <div className={css.listItem}>星級：<span>六星級</span></div>
        <div className={css.listItem}>遊戲平台：<span>xxxxx</span></div>
        <div className={css.listItem}>遊戲類型：<span>xxxxx</span></div>
        <div className={css.listItem}>投注額：<span>1000</span></div>
        <div className={css.listItem}>流水：<span>1000</span></div>
      </div>
    )}
  </div>);
}

export default BetItem;