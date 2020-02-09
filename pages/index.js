import React, {Component, Fragment} from 'react'
import withSizes from 'react-sizes'
import axios from 'axios';
import Router from "next/router";
import DeskTopLayout from '../components/layouts/deskTopLayout'
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
      users: props.userData,
      TabsActiveDefault: [true, false, false, false, false]
    }
    
    this.expandTab = this.expandTab.bind(this)
  }
  
  expandTab(index){
    // console.log('open tab!!', index);
    const reset = this.state.TabsActiveDefault.map(()=>false)
    reset[index] = true
    this.setState({
      TabsActiveDefault:reset
    });
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

            <ul>
              <Tabs active={this.state.TabsActiveDefault[0]} open={this.expandTab} index={0}/>
              <Tabs active={this.state.TabsActiveDefault[1]} open={this.expandTab} index={1}/>
              <Tabs active={this.state.TabsActiveDefault[2]} open={this.expandTab} index={2}/>
              <Tabs active={this.state.TabsActiveDefault[3]} open={this.expandTab} index={3}/>
              <Tabs active={this.state.TabsActiveDefault[4]} open={this.expandTab} index={4}/>
            </ul>


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