import React, { Fragment } from 'react';
import SectionTitle from './includes/SectionTitle';
import Link from 'next/link';

const Footer = () => (
  <Fragment>
    <div className="footer">
      <div className="container">
        <SectionTitle subject="卡利合作娛樂品牌" textShadow={false} />
        <div className="row">
          <div className="iconBox">
            <span
              className="iconfont icon_allbet"
              style={{ fontSize: '7rem' }}
            />
            <span className="iconfont icon_DreamGaming" />
            <span className="iconfont icon_WM" style={{ fontSize: '4rem' }} />
            <span
              className="iconfont icon_SAgaming"
              style={{ fontSize: '5rem' }}
            />
            <span className="iconfont icon_SUPER" />
            <span
              className="iconfont icon_AFBCash"
              style={{ fontSize: '4.5rem' }}
            />
          </div>
          <div className="iconBox">
            <span className="iconfont icon_Klottery" />
            <span
              className="iconfont icon_SUPERbingo"
              style={{ fontSize: '5rem' }}
            />
            <span
              className="iconfont icon_RTGslots"
              style={{ fontSize: '4.8rem' }}
            />
            <span className="iconfont icon_betixion" />
            <span className="iconfont icon_betsoft" />
          </div>
        </div>
        <SectionTitle subject="國際安全認證" />
        <div className="row">
          <div className="securityLogoBox">
            <img
              src="/images/securityLogo/partner_logo_1.png"
              alt=""
              className="img-responsive"
            />
            <img
              src="/images/securityLogo/partner_logo_2.png"
              alt=""
              className="img-responsive"
            />
            <img
              src="/images/securityLogo/partner_logo_3.png"
              alt=""
              className="img-responsive"
            />
            <img
              src="/images/securityLogo/partner_logo_4.png"
              alt=""
              className="img-responsive"
            />
            <img
              src="/images/securityLogo/partner_logo_5.png"
              alt=""
              className="img-responsive"
            />
            <img
              src="/images/securityLogo/partner_logo_6.png"
              alt=""
              className="img-responsive"
            />
            <img
              src="/images/securityLogo/partner_logo_7.png"
              alt=""
              className="img-responsive"
            />
            <img
              src="/images/securityLogo/partner_logo_8.png"
              alt=""
              className="img-responsive"
            />
          </div>
        </div>
        <p>
          Copyright© 2019 Allbetgaming.com. All Rights Reserved.
          服務條款|隱私權保護政策
        </p>

        <div className="row">
          <div className="footerLink">
            <Link href="/">
              <a>娛樂城</a>
            </Link>
            |
            <Link href="/">
              <a>百家樂</a>
            </Link>
            |
            <Link href="/">
              <a>球版現金版</a>
            </Link>
            |
            <Link href="/">
              <a>電子拉霸</a>
            </Link>
            |
            <Link href="/">
              <a>鑫城賓果</a>
            </Link>
            |
            <Link href="/">
              <a>百家樂技巧教學</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <style jsx>
      {`
        @media (max-width: 479px) {
          span.iconfont {
            font-size: 3rem !important;
            margin: 0;
            padding: 0;
          }
        }
        @media (min-width: 480px) and (max-width: 1024px) {
          .securityLogoBox {
            margin: 0 auto;
          }
          .securityLogoBox img {
            max-width: 40px;
            margin: 5px;
          }
          .footer {
            padding: 0;
          }
          span.iconfont {
            font-size: 3rem !important;
            margin: 0;
            padding: 0;
          }
          .footerLink {
            margin: 0 auto;
          }
          .footerLink a {
            font-size: 0.85rem;
          }
        }
        .footerLink {
          margin: 0 auto;
          text-align: center;
          color: #fff;
        }
        .footerLink a {
          color: #fff;
          text-decoration: none;
          padding: 5px 10px;
        }
        .securityLogoBox {
          margin: 0 auto;
          text-align: center;
        }
        .securityLogoBox img {
          margin: 0 10px;
        }
        .iconBox:first-child {
          margin-top: -30px;
        }
        .iconBox:last-child {
          margin-bottom: 30px;
        }
        .iconBox {
          margin: 0 auto;
          max-width: 800px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          max-height: 120px;
        }
        span.iconfont {
          font-size: 6rem;
          margin: 0 20px;
          background-image: linear-gradient(0deg, #6236ff 0%, #9a5fc9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        span.iconfont:hover {
          color: #ce70ff;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.65);
          background-image: unset;
          -webkit-background-clip: unset;
          -webkit-text-fill-color: unset;
        }
        p {
          font-weight: 300;
          letter-spacing: 1px;
          line-height: 1.8;
          max-width: 760px;
          margin: 10px auto 38px;
          color: #fff;
          text-align: center;
          text-shadow: 0 2px 4px #000000;
        }
        .flex {
          width: 100%;
          display: flex;
          justify-content: space-around;
        }
        .subTitle {
          color: #fff;
          font-size: 2.125rem;
          margin: -10px auto 20px;
          text-align: center;
          letter-spacing: 0;
          text-shadow: 0 2px 4px #000000;
        }
        .footer::after {
          content: '';
          background: url(/images/bg_section_cooperation.png) no-repeat;
          opacity: 1;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          position: absolute;
          z-index: -1;
        }
        .footer {
          padding: 0 0 78px;
          position: relative;
          z-index: 0;
          background: unset;
        }
      `}
    </style>
  </Fragment>
);

export default Footer;
