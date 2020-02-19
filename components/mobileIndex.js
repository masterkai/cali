import React from 'react';
import css from '../styles/main.scss';
import Router from 'next/router';

const MobileIndex = () => {
  return (
    <div className={css.stratingPlayMobile}>
      <div className={css.stratingPlayMobile_1st}>
        <div
          onClick={() => Router.push('/online_baccarat')}
          className={css.play01}
          style={{
            backgroundImage: 'url(images/mobile/mainpage/BGpattern.jpg)'
          }}
        >
          <img
            src="images/mobile/mainpage/Front01.png"
            alt=""
            className="img-responsive"
          />
        </div>
        <div className={css.play02}>
          <div
            onClick={() => Router.push('/sports')}
            className={css.play02_1}
            style={{
              backgroundImage: 'url(images/mobile/mainpage/BGpattern.jpg)'
            }}
          >
            <img
              src="images/mobile/mainpage/Front02.png"
              alt=""
              className="img-responsive"
            />
          </div>
          <div
            onClick={() => Router.push('/electronics')}
            className={css.play02_2}
            style={{
              backgroundImage: 'url(images/mobile/mainpage/BGpattern.jpg)'
            }}
          >
            <img
              src="images/mobile/mainpage/Front03.png"
              alt=""
              className="img-responsive"
            />
          </div>
        </div>
      </div>
      <div className={css.stratingPlayMobile_2nd}>
        <div
          onClick={() => Router.push('/lottery')}
          className={css.play04}
          style={{
            backgroundImage: 'url(images/mobile/mainpage/BGpattern.jpg)'
          }}
        >
          <img
            src="images/mobile/mainpage/Front04.png"
            alt=""
            className="img-responsive"
          />
        </div>
        <div
          onClick={() => Router.push('/fish')}
          className={css.play05}
          style={{
            backgroundImage: 'url(images/mobile/mainpage/BGpattern.jpg)'
          }}
        >
          <img
            src="images/mobile/mainpage/Front05.png"
            alt=""
            className="img-responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileIndex;
