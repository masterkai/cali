import React from 'react';
import css from '../styles/main.scss';
import Router from 'next/router';

const OutlineBtn = ({ path, func, back, name, style }) => {
  const handleClick = () => {
    if (path) {
      return Router.push(path);
    } else if (func) {
      func();
    } else if (back) {
      return Router.back();
    }
  };
  return (
    <div style={style} onClick={handleClick} className={css.outlineBtn}>
      {name}
    </div>
  );
};

export default OutlineBtn;
