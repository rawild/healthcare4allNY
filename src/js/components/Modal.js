import React, {Component, PropTypes} from 'react';

export default class Modal extends Component {
  render(){
    return (
      <div className="modal">
        <div className="modal-content" style={{display: this.props.open}}>
          <span className="close" onClick={() => {this._close()} }>&times;</span>
          <p>Some text in the Modal..</p>
        </div>
      </div>
    )
  }
  close() {
          this.render({display: "none"})
  }
}