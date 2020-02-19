import React, {Component, Fragment} from 'react'
import SectionTitle from "./includes/SectionTitle";
import css from "../styles/main.scss";
import UserBox from "./UserBox";
import Router from "next/router";
import Measure from 'react-measure'

class UserEvaluationSec extends Component {
  state = {
    dimensions: {
      width: -1,
      height: -1,
    },
  };

  render() {
    const {width, height} = this.state.dimensions;
    return (
      <Fragment>
        <div className='useEvaluationSec'>
          <div className="container">
            <SectionTitle subject='卡利玩家實測'/>
            <div className="row">
              <Measure
                bounds
                onResize={contentRect => {
                  this.setState({dimensions: contentRect.bounds})
                }}
              >
                {({ measureRef }) => (
                <div className="col">
                  <div ref={measureRef} className={css.userTest}>
                    <div className={css.top}>
                      <img src="images/userTest.png" alt="" className="img-responsive"/>
                      <div className={css.main}>
                        <div className={css.userTest_title}>
                          卡利娛樂城
                        </div>
                        <div className={css.starBox}>
                          <p>4.8</p>
                          <span className='iconfont icon_star-solid'/>
                          <span className='iconfont icon_star-solid'/>
                          <span className='iconfont icon_star-solid'/>
                          <span className='iconfont icon_star-solid'/>
                          <span className='iconfont icon_star-solid'/>
                        </div>
                        <p>共168則評論</p>
                      </div>
                    </div>
                    <p className={css.paragraph}>
                      卡利玩家實際遊玩回饋，VIP3以上會員即可評價，認證機制保證真實性，各位會員提出對卡利娛樂城的意見，卡利娛樂城更加進步，打造出更讓各為喜愛的線上博弈平台。
                    </p>
                  </div>
                </div>
                )}
              </Measure>
              <div className={`col ${css.userFeedBackBox}`} style={{'maxHeight':this.state.dimensions.height}}>
                <UserBox/>
                <UserBox/>
                <UserBox/>
                <button
                  onClick={() => Router.push('/user_evaluation')}
                  type="button" className="btn btn-block btn-sm"
                  style={{
                    'backgroundColor': '#6236FF',
                    'color': 'white',
                    'width': '80%',
                    'margin': '10px auto'
                  }}>查看更多
                </button>

              </div>
            </div>
          </div>
        </div>
        <style jsx>{
          `
          .useEvaluationSec::after {
          content: "";
          background: url(images/userEvaluationSecBg.png) no-repeat;
          background-size: cover;
          filter: contrast(100%);
          opacity: 0.32;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          position: absolute;
          z-index: -1;   
          }
          .useEvaluationSec {
          margin-top: 20px;
          padding: 0 0 25px;  
          position: relative;
          z-index: 0;
          background: rgba(0,0,0,.65);
          }`
        }

        </style>
      </Fragment>
    )
  }
}


export default UserEvaluationSec