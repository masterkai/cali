import React, { Component } from 'react';
import Link from 'next/link';
import css from '../styles/main.scss';

class DropDownMenu extends Component {
  constructor() {
    super();

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
      <div style={{ cursor: 'pointer', position: 'relative' }}>
        <div
          className="nav-item nav-link"
          onClick={this.showMenu}
          style={{ padding: '.5rem 0' }}
        >
          更多
        </div>

        {this.state.showMenu ? (
          <div
            className={css.menu}
            ref={element => {
              this.dropdownMenu = element;
            }}
          >
            <Link href="/user_evaluation">
              <a className="text-black">玩家評價</a>
            </Link>
            <Link href="/access_process">
              <a className="text-black">存取流程</a>
            </Link>
            <Link href="/app_download">
              <a className="text-black">APP下載</a>
            </Link>
            <Link href="/franchise">
              <a className="text-black">代理加盟</a>
            </Link>
            <Link href="/about">
              <a className="text-black">關於卡利</a>
            </Link>
          </div>
        ) : null}
      </div>
    );
  }
}

export default DropDownMenu;
