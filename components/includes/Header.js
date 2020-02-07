import React, {Component, Fragment} from 'react'
import axios from "axios";
import DeskTopLayout from "../layouts/deskTopLayout";
import css from "../../styles/main.scss";
import Router from "next/router";


class Header extends Component {
  static async getInitialProps({pathname, query, asPath, req, res}) {
    let userData;

    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      userData = response.data;
    } catch (e) {
      console.log('error');
    }

    // console.log(pathname);
    // console.log(query);
    // console.log(req);
    return {
      user: {
        name: 'John',
        lastname: 'Do'
      },
      userData
    }
  }

  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      users: props.userData
    }
  }

  render() {
    return (
      <Fragment>
        <div className={css.superAwesome}>
          <div className="container">
            <div className="row justify-content-end">
              <button style={{'margin-right':'5px'}} type="button" className="btn btn-dark">立即註冊&nbsp;<i className="fal fa-user-plus"/></button>
              <form className={css.flex}>
                <input style={{'margin-right':'5px'}} type="text" className={css.input} placeholder="會員賬號"/>
                <input style={{'margin-right':'5px'}} type="text" className={css.input} placeholder="登入密碼"/>
              </form>
              <button style={{'margin-right':'5px'}} type="button" className="btn btn-outline-dark">登入</button>
              <button type="button" className="btn btn-outline-dark">忘記密碼</button>
            </div>
          </div>
        </div>
      </Fragment>

    )
  }
}

export default Header;