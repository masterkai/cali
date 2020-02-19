import React from 'react';
import css from '../styles/main.scss';

const GameNavigation = () => {
  return (
    <div className={css.gameNavigation}>
      <div
        className={css.gameBtn}
        style={{
          backgroundImage: 'url(images/background/gameBtn01.png)'
        }}
      >
        <img src="images/startPlay/01.png" alt="" className="img-responsive" />
        <p>真人娛樂</p>
      </div>
      <div
        className={css.gameBtn}
        style={{
          backgroundImage: 'url(images/background/gameBtn02.png)'
        }}
      >
        <img src="images/startPlay/02.png" alt="" className="img-responsive" />
        <p>體育博彩</p>
      </div>
      <div
        className={css.gameBtn}
        style={{
          backgroundImage: 'url(images/background/gameBtn03.png)'
        }}
      >
        <img src="images/startPlay/03.png" alt="" className="img-responsive" />
        <p>賓果彩票</p>
      </div>
      <div
        className={css.gameBtn}
        style={{
          backgroundImage: 'url(images/background/gameBtn04.png)'
        }}
      >
        <img src="images/startPlay/04.png" alt="" className="img-responsive" />
        <p>電子遊戲</p>
      </div>
      <div
        className={css.gameBtn}
        style={{
          backgroundImage: 'url(images/background/gameBtn05.png)',
          justifyContent: 'flex-start'
        }}
      >
        <img src="images/startPlay/05.png" alt="" className="img-responsive" />
        <p>捕魚王</p>
      </div>
    </div>
  );
};

export default GameNavigation;
