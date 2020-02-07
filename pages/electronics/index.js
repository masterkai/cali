import React, {Component, Fragment} from 'react'
import DeskTopLayout from '../../components/layouts/deskTopLayout'

class Electronics extends Component {
  render() {

    return (
      <Fragment>
        <DeskTopLayout>
          <h1>Electronics</h1>
          <div className="about">
            Electronics
          </div>

        </DeskTopLayout>
      </Fragment>

    )
  }
}

export default Electronics