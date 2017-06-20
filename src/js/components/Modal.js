import React from 'react'
import Radium from 'radium'
import { connect } from '../redux/utils'
import Button from './Button'

const STYLES = {
  /* Begin Modal Info */
  modal: {
      display: 'block', /* Hidden by default */
      position: 'fixed', /* Stay in place */
      zIndex: 1, /* Sit on top */
      left: 0,
      top: 0,
      width: '100%', /* Full width */
      height: '100%', /* Full height */
      overflow: 'auto', /* Enable scroll if needed */
      backgroundColor: 'rgb(0,0,0)', /* Fallback color */
      backgroundColor: 'rgba(0,0,0,0.4)' /* Black w/ opacity */
  },

  /* Modal Content/Box */
  modalContent:  {
      backgroundColor: '#fefefe',
      margin: '15% auto', /* 15% from the top and centered */
      padding: '20px',
      border: '1px solid #888',
      width: '80%' /* Could be more or less, depending on screen size */
  },

  /* The Close Button */
  close: {
      color: '#aaa',
      float: 'right',
      fontSize: '28px',
      fontWeight: 'bold'
  }
}


class Modal extends React.Component {
  
  static propTypes = {
    modal: React.PropTypes.object,

  }

  _handleAction() {
    this.props.close()
    this.props.modal.callback() // Action when the user confirms
  }

  _handleCancel() {
    this.props.close()
  }

  render() {
    
    const confirmHandler = () => this._handleAction()
    const cancelHandler = () => this._handleCancel()

    const modalActions = [
      <Button onClick={()=>cancelHandler()}>
        {this.props.modal.cancelActionText || 'Cancel'}
      </Button>,
    ]

    return <div style={STYLES.modal}>
    
      {this.props.modal.message}
    </div>
  }
}
export default connect({
  props: ['modal'],
  actions: ['modal:close']
})(Radium(Modal))