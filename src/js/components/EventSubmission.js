import React, {Component, PropTypes} from 'react'

const STYLES = {
  'FormLabel': {
    'fontSize': '24px',
    'marginRight': '20px',
    'verticalAlign': 'middle',
    'color': '#142c74'
  },
  'Email': {
    'height': '15px',
    'width': '300px',
    'maxWidth': '90%',
    'padding': '10px',
    'color': '#09153b',
    'border': 'none',
    'borderRadius': '3px',
    margin: '10px'
  },
  'Host': {
    'height': '15px',
    'width': '300px',
    'maxWidth': '90%',
    'padding': '10px',
    'color': '#09153b',
    'border': 'none',
    'borderRadius': '3px',
    margin: '10px'
  },
  'URL': {
    'height': '15px',
    'width': '640px',
    'maxWidth': '90%',
    'padding': '10px',
    'color': '#09153b',
    'border': 'none',
    'borderRadius': '3px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '10px',
    display: 'block'
  },
  'Name': {
    'height': '15px',
    'width': '640px',
    'maxWidth': '90%',
    'padding': '10px',
    'color': '#09153b',
    'border': 'none',
    'borderRadius': '3px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '10px',
    display: 'block'
  },
  'Button': {
    'backgroundColor': 'white',
    'color': '#142c74',
    'padding': '8px',
    'borderWidth': '2px',
    'borderStyle': 'solid',
    'borderColor': '#142c74',
    'borderRadius': '5px',
    'fontSize': '10pt',
    'marginRight': '20px'
  },
  'mceSpecial': {
    'position': 'absolute',
    'left': '-5000px',
    'ariaHidden': 'true'
  }
}
export default class EventSubmission extends Component {
  render() {
      return(
        <div className="eventForm"  >
         <form action="healthcare4allny@gmail.com" method="post" target="_blank" noValidate >
            <div className="mc-form-label-wrap" style={STYLES.FormLabelWrap}>
            <span className="mc-form-label" style={STYLES.FormLabel}>Submit an Event: </span>
            </div>
            
              <input type="email" placeholder="Email Address" name="EMAIL" style={STYLES.Email}/>
              <input type="text" placeholder="Event Host" name="EventHost" style={STYLES.Host}/>
              <input type="text" placeholder="Event URL" name="EventURL" style={STYLES.URL}/>
              <input type="text" placeholder="Event Name" name="EventName" style={STYLES.Name}/>
              <input type="submit" value="Submit" className="mce-button" style={STYLES.Button}/>
          	 
          </form>
      </div>
    )
  }
}


