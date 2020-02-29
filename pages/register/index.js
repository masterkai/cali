import React, { Fragment } from 'react';
import MobileLayoutLevel2 from '../../components/layouts/MobileLayoutLevel2';
import css from '../../styles/main.scss';
import OutlineBtn from '../../components/OutlineBtn';

const Register = () => {
  return (
    <Fragment>
      <MobileLayoutLevel2 title="加入會員" path={true}>
        <div className={css.mobileBox}>
          <form>
            <div className="form-group">
              <input
                style={{ marginBottom: '20px' }}
                placeholder="手機驗證"
                type="email"
                className="form-control"
                id="mobileMessageVailidation"
                aria-describedby="emailHelp"
              />
              <label htmlFor="exampleInputEmail1">手機號碼</label>
              <div className={css.inputGroup}>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <button type="button" className="btn btn-outline-light">
                  簡訊
                </button>
              </div>
            </div>
            <div className="form-group" style={{ marginBottom: '30px' }}>
              <label htmlFor="exampleInputPassword1">驗證碼</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <OutlineBtn path="/register/second-step" name="確認送出" />
          </form>
        </div>
      </MobileLayoutLevel2>
    </Fragment>
  );
};

export default Register;
