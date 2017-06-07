import React, {Component, PropTypes} from 'react';

export default class Block extends Component {
  render() {
    return(<div className="Block">
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
  children: PropTypes.node
}