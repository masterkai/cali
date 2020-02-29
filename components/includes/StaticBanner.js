import React, { Component, Fragment } from 'react';
import css from '../../styles/main.scss';

const StaticBanner = ({ title, desc, bannerIMG }) => {
  return (
    <div
      className={css.banner}
      style={{ backgroundImage: `url(${bannerIMG})` }}
    >
      <div className={css.title}>{title}</div>
      <div className={css.desc}>{desc}</div>
    </div>
  );
};

export default StaticBanner;
