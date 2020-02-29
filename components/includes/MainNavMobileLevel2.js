import React, { Component, Fragment, useState } from 'react';
import Link from 'next/link';
import css from '../../styles/main.scss';
import Router from 'next/router';
import Measure from 'react-measure';
import UserStateBar from '../includes/UserStateBar';

const MainNavMobileLevel2 = ({ getHeight, title, path, back }) => {
  const hamburger = {
    marginLeft: '10px',
    fontSize: '1.625rem'
  };
  const [dimensions, setDimensions] = useState({
    width: -1,
    height: -1
  });
  const { width, height } = dimensions;
  const [isUser, setIsUser] = useState(true);
  const handleClick = () => {
    if (path) {
      return Router.push('/');
    } else if (back) {
      return Router.back();
    }
  };

  return (
    <Fragment>
      <Measure
        bounds
        onResize={contentRect => {
          setDimensions(contentRect.bounds);
        }}
      >
        {({ measureRef }) => (
          <div
            ref={measureRef}
            className={`fixed-top`}
            height={getHeight(height)}
          >
            <nav className={`navbar ${css.navBarFlex}`}>
              <span
                onClick={handleClick}
                className="iconfont icon_chevron-left-light"
                style={hamburger}
              />
              <div className={css.title}>{title}</div>
            </nav>
            {isUser ? <UserStateBar /> : ''}
          </div>
        )}
      </Measure>
    </Fragment>
  );
};

export default MainNavMobileLevel2;
