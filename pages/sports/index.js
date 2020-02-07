import React, {Component, Fragment} from 'react'
import DeskTopLayout from '../../components/layouts/deskTopLayout'

class Sports extends Component {
  render() {

    return (
      <Fragment>
        <DeskTopLayout>
          <h1>Sports</h1>
          <div className="about">
            Sports
          </div>

        </DeskTopLayout>
      </Fragment>

    )
  }
}

export default Sports