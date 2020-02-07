import React, {Component, Fragment} from 'react'
import DeskTopLayout from '../../components/layouts/deskTopLayout'

const About = props => {
  console.log(props);
  return (
    <Fragment>
      <DeskTopLayout>
        <h1>關於卡利</h1>
        <div className="about">
          關於卡利關於卡利關於卡利關於卡利關於卡利~
        </div>
      </DeskTopLayout>
    </Fragment>

  )
};

About.getInitialProps = async ({req}) => {
  return {values: '1,2,3'}
}

export default About