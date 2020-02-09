import React, {Component,Fragment} from 'react'
import Link from "next/link";
import DropDownMenu from '../DDM'
import css from "../../styles/main.scss";

const NainNav = () => (
  <>
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link href='/'>
            <a className="navbar-brand">
              <img className='img-responsive logo' src="images/Cali_logo_02.png" alt=""/>
            </a>
          </Link>
          <div className="collapse navbar-collapse">
            <div className={css.flexContainer}>
              <Link href="/online_baccarat">
                <a className='nav-item nav-link'>真人娛樂</a>
              </Link>

              <Link href="/sports">
                <a className='nav-item nav-link'>體育博彩</a>
              </Link>
              <Link href="/lottery">
                <a className='nav-item nav-link'>賓果彩票</a>
              </Link>
              <Link href="/electronics">
                <a className='nav-item nav-link'>電子遊戲</a>
              </Link>
              <Link href="/fish">
                <a className='nav-item nav-link'>捕魚王</a>
              </Link>
              <Link href="/promotions">
                <a className='nav-item nav-link'>優惠活動</a>
              </Link>
              <DropDownMenu/>
            </div>

          </div>
        </nav>
      </div>
    </header>
  </>
);

export default NainNav