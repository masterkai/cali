import React, {Component} from 'react'
import css from "../styles/main.scss";

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.openTab = this.openTab.bind(this)
  }
  
  openTab(index){
    this.props.open(index)
  }
  render() {
    const _class = {
      true: `${css.iconTab} ${css.active}`,
      false: `${css.iconTab}`
    }
    return (
      <li className={css.tabs} onClick={()=>this.openTab(this.props.index)}>
        <div className={_class[this.props.active]}>
          <span className="iconfont icon_baccarat"/>
          <p>真人娛樂</p>
        </div>
        {
          this.props.active ? <div className={css.contentBox}>
            <img className={css.contentIMG} src='images/startPlay/truePeople_photo.jpg'/>
            <div className={css.iconBox}>
              <div className={css.iconBtn}>
                <span className="iconfont icon_allbet"/>
              </div>
              <div className={css.iconBtn}>
                <span className="iconfont icon_DreamGaming"/>
              </div>
              <div className={css.iconBtn}>
                <span className="iconfont icon_WM"/>
              </div>
              <div className={css.iconBtn}>
                <span className="iconfont icon_SAgaming"/>
              </div>
            </div>
          </div>: null
        }
      </li>
    )
  }
}

export default Tabs