import React from 'react'
import Tabs from "./Tabs";

class StartPlayingDesktop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      TabsActiveDefault: [true, false, false, false, false],
      TabsData: [
        {
          "index": "0",
          "icon": "baccarat",
          "tabName": "真人娛樂",
          "tabImage": "images/startPlay/truePeople_photo.jpg",
          "gameProvider": ["allbet", "DreamGaming", "WM", "SAgaming"]
        },
        {
          "index": "1",
          "icon": "futbol-solid",
          "tabName": "體育博彩",
          "tabImage": "images/startPlay/sport_photo.jpg",
          "gameProvider": ["SUPER", "AFBCash"]
        },
        {
          "index": "2",
          "icon": "ticket-alt-solid",
          "tabName": "賓果彩票",
          "tabImage": "images/startPlay/lottery_photo.jpg",
          "gameProvider": ["Klottery", "SUPERbingo"]
        },
        {
          "index": "3",
          "icon": "alien-monster-solid",
          "tabName": "電子遊戲",
          "tabImage": "images/startPlay/poker_photo.jpg",
          "gameProvider": ["RTGslots", "SAgaming", "betixion", "betsoft"]
        },
        {
          "index": "4",
          "icon": "fish",
          "tabName": "捕魚王",
          "tabImage": "images/startPlay/fish_photo.jpg",
          "gameProvider": ["allbet", "SAgaming"]
        }
      ]
    }

    this.expandTab = this.expandTab.bind(this)
  }

  expandTab(index) {
    // console.log('open tab!!', index);
    const reset = this.state.TabsActiveDefault.map(() => false)
    reset[index] = true
    this.setState({
      TabsActiveDefault: reset
    });
  }

  render() {
    const {TabsActiveDefault, TabsData} = this.state;
    return (
      <ul>
        {
          TabsData.map(Tab =>
            <Tabs
              key={parseInt(Tab.index)}
              active={TabsActiveDefault[Tab.index]}
              open={this.expandTab}
              index={Tab.index}
              icon={Tab.icon}
              tabName={Tab.tabName}
              tabImage={Tab.tabImage}
              gameProvider={Tab.gameProvider}
            />)
        }

      </ul>
    )
  }
}

export default StartPlayingDesktop