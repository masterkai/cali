import React, {Component, Fragment} from 'react'
import withSizes from 'react-sizes'
import axios from 'axios';
import Router from "next/router";
import DeskTopLayout from '../components/layouts/deskTopLayout'
import css from "../styles/main.scss"

class Index extends Component {
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
        <DeskTopLayout>

          <h1>Hello Cali</h1>
          <div>
            {
              this.props.isMobile ? null:
                <>
                  <button onClick={() => Router.push("/about")}>關於卡利</button>
                  <button onClick={() => Router.push("/online_baccarat")}>Go to online Baccarat</button>
                </>
            }
          </div>
        </DeskTopLayout>
      </Fragment>

    )
  }
}

const mapSizesToProps = ({width}) => ({
  isMobile: width < 768,
});
export default withSizes(mapSizesToProps)(Index)