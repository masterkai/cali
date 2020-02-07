import React, {Component, Fragment} from 'react'
import DeskTopLayout from '../../components/layouts/deskTopLayout'

class Fish extends Component {
  render() {

    return (
      <Fragment>
        <DeskTopLayout>
          <h1>Fish</h1>
          <div className="about">
            Fish
          </div>

        </DeskTopLayout>
      </Fragment>

    )
  }
}

export default Fish