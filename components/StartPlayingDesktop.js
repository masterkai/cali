import React from 'react'
import Tabs from "./Tabs";

class StartPlayingDesktop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
    return (
      <ul>
        <Tabs active={this.state.TabsActiveDefault[0]} open={this.expandTab} index={0}/>
        <Tabs active={this.state.TabsActiveDefault[1]} open={this.expandTab} index={1}/>
        <Tabs active={this.state.TabsActiveDefault[2]} open={this.expandTab} index={2}/>
        <Tabs active={this.state.TabsActiveDefault[3]} open={this.expandTab} index={3}/>
        <Tabs active={this.state.TabsActiveDefault[4]} open={this.expandTab} index={4}/>
      </ul>
    )
  }
}

export default StartPlayingDesktop