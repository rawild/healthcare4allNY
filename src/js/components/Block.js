import React, {Component, PropTypes} from 'react';

export default class Block extends Component {

  render() {
    const STYLES = {
      backgroundColor: this.props.backgroundColor,
      color: 'white',
      paddingTop: '60px',
      paddingBottom: '60px'
    }
    return(<div className="Block" style={STYLES}>
      <div className="title">
        {this.props.title}
      </div>
      <div className="subtitle">
        {this.props.subtitle}
      </div>
      {this.props.children}
    </div>)
  }
}
Block.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
  backgroundColor: PropTypes.string
}