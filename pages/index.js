import React, {Component, Fragment} from 'react'
import withSizes from 'react-sizes'
import axios from 'axios';
import Router from "next/router";
import DeskTopLayout from '../components/layouts/deskTopLayout'
import Slider from "react-slick";
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
    const settings = {
      dots: true,
      infinite: true,
      arrows:true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Fragment>
        <DeskTopLayout>
          <Slider {...settings}>
            <img src="images/banner/banner01.jpg" alt="" className="img-responsive"/>
            <img src="images/banner/banner02.jpg" alt="" className="img-responsive"/>
            <img src="images/banner/banner03.jpg" alt="" className="img-responsive"/>
            <img src="images/banner/banner04.jpg" alt="" className="img-responsive"/>


          </Slider>
          <div className="container">
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