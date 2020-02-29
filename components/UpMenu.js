import React, { Component, Fragment } from 'react';
import Link from 'next/link';
import css from '../styles/main.scss';

class UpMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  render() {
    return (
      <Fragment>
        <div
          onClick={this.showMenu}
          style={{ cursor: 'pointer', position: 'relative' }}
        >
          <a>
            <span className={this.props.className} />

            {this.props.name}
          </a>
          {this.state.showMenu ? (
            <div
              className={css.UpMenu}
              ref={element => {
                this.dropdownMenu = element;
              }}
            >
              <Link href="/edit_user_info">
                <a>
                  <p>
                    <span className="iconfont icon_user-alt-light" />
                    變更資料
                  </p>
                </a>
              </Link>
              <Link href="/transaction_records">
                <a>
                  <p>
                    <span className="iconfont icon_file-invoice-dollar-light" />
                    交易記錄
                  </p>
                </a>
              </Link>
              <Link href="/bet_records">
                <a>
                  <p>
                    <span className="iconfont icon_coins-light" />
                    投注記錄
                  </p>
                </a>
              </Link>
              <Link href="/app_download">
                <a>
                  <p>
                    <span className="iconfont icon_gift-light" />
                    活動點數
                  </p>
                </a>
              </Link>
            </div>
          ) : null}
        </div>
      </Fragment>
    );
  }
}

export default UpMenu;
