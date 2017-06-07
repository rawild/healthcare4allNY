import React, {Component, PropTypes} from 'react'


export default class Calendar extends Component {
  
  render() {
    return(
      <div className="Calendar">
        <div className="title">
          {this.props.title}
        </div>
        <div className="subtitle">
          {this.props.subtitle}
        </div>
        <div data-tockify-component="calendar" data-tockify-calendar="healthcare4allny"></div>
      </div>
    )
  }
}
Calendar.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}