import React, { Fragment, Component, useRef, useEffect, useState } from 'react';
import css from '../styles/main.scss';
import aboutData from '../data/about';

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);
const useMountEffect = fun => useEffect(fun, []);

const SwitchTabs = () => {
  const myRef = useRef(null);
  useMountEffect(() => scrollToRef(myRef)); // Scroll on mount
  const [tabsActiveDefault, setTabsActiveDefault] = useState([
    true,
    false,
    false,
    false
  ]);
  const expandTab = index => {
    // console.log('open tab!!', index);
    const reset = tabsActiveDefault.map(() => false);
    reset[index] = true;
    setTabsActiveDefault(reset);
  };

  const renderAbouts = data => {
    const style = {
      true: { display: 'flex' },
      false: { display: 'none' }
    };
    return data.map((d, i) => (
      <div
        style={style[tabsActiveDefault[i]]}
        key={d.index}
        className={css.itemBox}
      >
        <div className={css.itemColumn}>
          <img src={d.tabImage} alt="" className="img-responsive" />
        </div>
        <div className={css.itemColumn}>
          <div className={css.title}>{d.tabTitle}</div>
          <p>{d.tabContent}</p>
        </div>
      </div>
    ));
  };
  const _class = {
    true: `${css.tab} ${css.active}`,
    false: `${css.tab}`
  };

  return (
    <Fragment>
      <div className={css.tabsBox} onClick={() => scrollToRef(myRef)}>
        <div
          onClick={() => expandTab(0)}
          className={_class[tabsActiveDefault[0]]}
        >
          <span className="iconfont icon_handshake-solid" />
          <div>誠信與服務</div>
        </div>
        <div
          onClick={() => expandTab(1)}
          className={_class[tabsActiveDefault[1]]}
        >
          <span className="iconfont icon_payment" />
          <div>付款</div>
        </div>
        <div
          onClick={() => expandTab(2)}
          className={_class[tabsActiveDefault[2]]}
        >
          <span className="iconfont icon_responsibility" />
          <div>責任博彩</div>
        </div>
        <div
          onClick={() => expandTab(3)}
          className={_class[tabsActiveDefault[3]]}
        >
          <span className="iconfont icon_security" />
          <div>
            嚴格保密及
            <br />
            安全性維護
          </div>
        </div>
      </div>
      <div ref={myRef}>{renderAbouts(aboutData)}</div>
    </Fragment>
  );
};

export default SwitchTabs;
