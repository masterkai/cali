import React, { Component, Fragment } from 'react';

class Drawer extends Component {
  state = {
    show: false
  };

  show = () => {
    this.setState({ show: !this.state.show }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  };

  closeMenu = () => {
    this.setState({ show: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  };

  render() {
    const _class = {
      true: 'drawerBox active',
      false: 'drawerBox'
    };
    return (
      <div className={_class[this.state.show]} onClick={this.show}>
        <div className="infoBox">
          <p>在線客服</p>
          <img src="/images/qrCode.png" alt="" className="img-responsive" />
        </div>
        <div className="infoBox">
          <img
            src="/images/line-messenger.svg"
            alt=""
            className="img-responsive"
          />
          <p>@888pi</p>
        </div>
        <div className="infoBox">
          <p style={{ fontSize: '.85rem' }}>意見反饋 8888pipipi@gmail.com</p>
        </div>
        <div className="TrapezoidTag">
          <div className="triangleBottomRight" />
          <div className="triangleTopRight" />
          <span className="iconfont iconHR" />
          <p>聯系我們</p>
        </div>
        <style jsx>
          {`
            .drawerBox {
              max-width: 182px;
              padding: 20px;
              position: fixed;
              z-index: 999;
              background-color: black;
              right: -182px;
              top: 8%;
              display: flex;
              flex-direction: column;
              transition: all 0.3s ease-in-out;
            }
            .drawerBox.active {
              right: 0;
            }
            .infoBox {
              padding: 20px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: center;
              border-bottom: 1px solid #979797;
            }
            .drawerBox .infoBox:nth-child(3) {
              border-bottom: unset;
            }
            .infoBox img {
              margin-bottom: 10px;
              max-width: 64px;
            }
            .infoBox p {
              color: #fff;
              text-align: center;
            }
            .TrapezoidTag {
              padding: 5px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              cursor: pointer;
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              left: -44px;
              background-color: #00adff;
              height: calc(223px - 44px);
              width: 44px;
              color: black;
              background-image: linear-gradient(
                180deg,
                #827610 3%,
                #ebdb5a 47%,
                #805d24 100%
              );
              //border-radius: 8px 0 0 8px;
            }
            .TrapezoidTag p {
              color: black;
              writing-mode: vertical-lr;
            }
            .TrapezoidTag span {
              font-size: 2rem;
            }
            .triangleTopRight {
              position: absolute;
              bottom: -30px;
              width: 0;
              height: 0;
              border-top: 30px solid #805d24;
              border-left: 44px solid transparent;
            }
            .triangleBottomRight {
              position: absolute;
              top: -30px;
              width: 0;
              height: 0;
              border-bottom: 30px solid #827610;
              border-left: 44px solid transparent;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Drawer;
