import React, {Component, Fragment} from 'react'
import withSizes from 'react-sizes'
import axios from 'axios';
import Router from "next/router";
import DeskTopLayout from '../components/layouts/deskTopLayout'
import StartPlayingDesktop from '../components/StartPlayingDesktop'
import Slider from "react-slick";
import SectionTitle from "../components/includes/SectionTitle";
import css from "../styles/main.scss"
import Tabs from "../components/Tabs";

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
      autoplay: true,
      dots: true,
      infinite: true,
      arrows: true,
      fade: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Fragment>
        <DeskTopLayout>
          <Slider {...settings}>
            <img src="images/banner/banner01.jpeg" alt="" className="img-responsive"/>
            <img src="images/banner/banner02.jpg" alt="" className="img-responsive"/>
            <img src="images/banner/banner03.jpg" alt="" className="img-responsive"/>
            <img src="images/banner/banner04.jpg" alt="" className="img-responsive"/>
          </Slider>
          <div className="container">
            <SectionTitle subject='開始遊玩'/>

            <StartPlayingDesktop/>


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