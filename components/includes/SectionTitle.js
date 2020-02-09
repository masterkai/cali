import React, {Component} from 'react'
import css from "../../styles/main.scss"

const SectionTitle = props => {
  return (
    <div className={css.sectionTitle}>
      <div className={css.titleGroup}>
        <div style={{'flex': '1 1 10%','border': '1px solid #979797'}} />
        <div className={css.subject}>{props.subject}</div>
        <div style={{'flex': '1 1 10%','border': '1px solid #979797'}} />
      </div>
    </div>
  )
};
export default SectionTitle