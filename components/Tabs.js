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
    };
    const {icon, tabName, gameProvider, tabImage} = this.props;

    return (

      <li className={css.tabs} onClick={()=>this.openTab(this.props.index)}>
        <div className={_class[this.props.active]}>
          <span className={`iconfont icon_${icon}`}/>
          <p>{tabName}</p>
        </div>
        {
          this.props.active ? <div className={css.contentBox}>
            <img className={css.contentIMG} src={tabImage}/>
            <div className={css.iconBox}>
              {
                gameProvider.length > 2?gameProvider.map((p,index) =>(
                  <div key={index} className={css.iconBtn} style={{'maxWidth':'100px'}}>
                    <span  className={`iconfont icon_${p}`}/>
                  </div>
                )):gameProvider.map((p,index) =>(
                  <div key={index} className={css.iconBtn} style={{'maxWidth':'120px'}}>
                    <span  className={`iconfont icon_${p}`}/>
                  </div>
                ))

              }
            </div>
          </div>: null
        }
      </li>
    )
  }
}

export default Tabs