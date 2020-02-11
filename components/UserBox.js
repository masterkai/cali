import React from 'react'
import css from "../styles/main.scss";

const UserBox = () => (
  <div className={css.userBox}>
    <div className={css.userNumber}>VIP8 會員1658432</div>
    <div className={css.starBox}>
      <span className='iconfont icon_star-solid'/>
      <span className='iconfont icon_star-solid'/>
      <span className='iconfont icon_star-solid'/>
      <span className='iconfont icon_star-solid'/>
      <span className='iconfont icon_star-solid'/>
    </div>
    <p>卡利娛樂城是真心能信賴的~就算我贏了15萬，出金也很快不囉嗦，而且遊戲種類很多，也有很多優惠，喜歡!</p>
  </div>
);

export default UserBox