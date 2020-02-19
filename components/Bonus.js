import React from 'react';
import css from '../styles/main.scss';
import Link from 'next/link';

const Bonus = ({ pic, title, time, context }) => (
  <div className={css.bonus}>
    <img src={pic} alt="" className="img-responsive" />
    <div className={css.title}>{title}</div>
    <p>{context}</p>
    <div className={css.bottom}>
      <p className={css.time}>{time}</p>
      <Link href="/">
        <a style={{ whiteSpace: 'nowrap' }}>更多</a>
      </Link>
    </div>
  </div>
);

export default Bonus;
