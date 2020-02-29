import React, { Component, Fragment } from 'react';
import Link from 'next/link';
import css from '../styles/main.scss';

class UpSwitch extends Component {
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
            <Fragment>
              <div className={css.overlay} />
              <div
                className={css.UpSwitch}
                ref={element => {
                  this.dropdownMenu = element;
                }}
              >
                <Link href="/deposit">
                  <a>
                    <p>
                      <span
                        className="iconfont icon_turnIN1"
                        style={{ color: '#077F64' }}
                      />
                      存款專區
                    </p>
                  </a>
                </Link>
                <Link href="/withdrawals">
                  <a>
                    <p>
                      <span
                        className="iconfont icon_turnOUT1"
                        style={{ color: '#FA6400' }}
                      />
                      提款專區
                    </p>
                  </a>
                </Link>
              </div>
            </Fragment>
          ) : null}
        </div>
      </Fragment>
    );
  }
}

export default UpSwitch;
