import React, {Component, PropTypes} from 'react'


export default class Calendar extends Component {
  render() {
    return(
      <div className="Calendar">
        <div className="title">
          {this.props.title}
        </div>
          <iframe id="timely_slider" name="timely_slider" src="https://events.time.ly/8k8l26q?view=agenda" seamless noScroll></iframe>
      
      </div>
    )
  }
}
Calendar.propTypes = {
  title: PropTypes.string
}