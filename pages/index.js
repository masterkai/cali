import React, {Component, Fragment} from 'react'
import withSizes from 'react-sizes'
import axios from 'axios';
import DeskTopLayout from '../components/layouts/deskTopLayout'
import StartPlayingDesktop from '../components/StartPlayingDesktop'
import UserEvaluationSec from '../components/UserEvaluationSec'
import AboutSec from '../components/AboutSec'
import Slider from "react-slick";
import SectionTitle from "../components/includes/SectionTitle";
import css from "../styles/main.scss"
import Link from "next/link";

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
      bonus: [
        {
          "pic": "images/bonus/img-promotion-2.png",
          "title": "賭神賽",
          "context": "感謝廣大會員持續遊玩任你博網站，為回饋熱情支持，推出一個月一次的會員活動會員日的每筆存款都可申請儲值回饋金，使用指定收款帳戶入款，回饋金更高達15%呢！還不快點通知親朋好友一起共襄盛舉!!!",
          "time": "2020.2.10.Mon"
        },
        {
          "pic": "images/bonus/img-promotion-3.png",
          "title": "賀聖誕派大獎 贏返水迎元旦",
          "context": "感謝廣大會員持續遊玩任你博網站，為回饋熱情支持，推出一個月一次的會員活動會員日的每筆存款都可申請儲值回饋金，使用指定收款帳戶入款，回饋金更高達15%呢！還不快點通知親朋好友一起共襄盛舉!!!",
          "time": "2020.2.10.Mon"
        },
        {
          "pic": "images/bonus/img-promotion-4.png",
          "title": "卡利系統一律返水1%",
          "context": "感謝廣大會員持續遊玩任你博網站，為回饋熱情支持，推出一個月一次的會員活動會員日的每筆存款都可申請儲值回饋金，使用指定收款帳戶入款，回饋金更高達15%呢！還不快點通知親朋好友一起共襄盛舉!!!",
          "time": "2020.2.10.Mon"
        },
        {
          "pic": "images/bonus/img-promotion-5.png",
          "title": "賀聖誕 派大獎",
          "context": "感謝廣大會員持續遊玩任你博網站，為回饋熱情支持，推出一個月一次的會員活動會員日的每筆存款都可申請儲值回饋金，使用指定收款帳戶入款，回饋金更高達15%呢！還不快點通知親朋好友一起共襄盛舉!!!",
          "time": "2020.2.10.Mon"
        }
      ]
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
    const settings_bonus = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    const {bonus} = this.state;

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

            <SectionTitle subject='優惠活動'/>

            <Slider {...settings_bonus}>
              {
                bonus.map((b, i) => (
                  <div key={i} className={css.bonus}>
                    <img src={b.pic} alt="" className="img-responsive"/>
                    <div className={css.title}>{b.title}</div>
                    <p>{b.context}</p>
                    <div className={css.bottom}>
                      <p className={css.time}>{b.time}</p>
                      <Link href='/'>
                        <a style={{'whiteSpace': 'nowrap'}}>更多</a>
                      </Link>
                    </div>
                  </div>
                ))
              }
            </Slider>

          </div>
          <UserEvaluationSec />
          <AboutSec />
        </DeskTopLayout>
      </Fragment>

    )
  }
}

const mapSizesToProps = ({width}) => ({
  isMobile: width < 768,
});
export default withSizes(mapSizesToProps)(Index)