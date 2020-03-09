import React, { Component, Fragment } from 'react';
import DeskTopLayout from '../layouts/deskTopLayout';
import css from '../../styles/main.scss';
import Router from 'next/router';
import Register from "../Register";

class Header extends Component {
  state = {
    email: '',
    password: ''
  };

  handleLogin = () => {
    this.props.setUser(true)
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);

  };
  render() {
    return (
      <Fragment>
        <div className={css.headerBG}>
          <form onSubmit={this.handleSubmit} className={css.flexContainer}>
            <Register/>
            <div className={css.flex}>
              <input
                style={{ marginRight: '5px' }}
                type="text"
                className={css.input}
                placeholder="會員賬號"
              />
              <input
                style={{ marginRight: '5px' }}
                type="text"
                className={css.input}
                placeholder="登入密碼"
              />
            </div>
            <button
              onClick={this.handleLogin}
              style={{ marginRight: '5px' }}
              type="button"
              className="btn btn-outline-dark btn-sm"
            >
              登入
            </button>
            <button type="button" className="btn btn-outline-dark btn-sm">
              忘記密碼
            </button>
          </form>
        </div>
        <style jsx>
          {`
            @media (max-width: 1024px) {
              .flexContainer {
                justify-content: center !important;
              }
            }
            .headerBG {
              background-image: linear-gradient(
                180deg,
                #fdf8a2 3%,
                #f4d97a 47%,
                #eec462 100%
              );
            }
            .flexContainer {
              height: 45px;
              display: flex;
              align-item: center;
              padding: 5px;
              justify-content: flex-end;
              max-width: 1100px;
              margin: 0 auto;
            }
          `}
        </style>
      </Fragment>
    );
  }
}

export default Header;
