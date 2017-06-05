import React, {Component, PropTypes} from 'react'

export default class MediaForm extends Component {
  render() {
      return(
        <div className="mc-form" id="mc_embed_signup">
         <form action="//healthcare4allny.us16.list-manage.com/subscribe/post?u=cb31eb89d2773d05d965b8254&amp;id=7b63ece6ae" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <span className="mc-form-label">Get updates in these last three crucial weeks:</span>
            <div id="mc_embed_signup_scroll">    
              <input type="email" placeholder="Email Address" name="EMAIL" className="required-email" id="mce-EMAIL" />
              <input type="submit" value="Sign-up" name="subscribe" id="mc-embedded-subscribe" className="mce-button" />
          	 <div id="mce-responses" className="clear">
          		 <div className="response" id="mce-error-response" style={{display: "none"}}></div>
          		 <div className="response" id="mce-success-response" style={{display: "none"}}></div>
          	 </div>    
             <div className="mce-special"><input type="text" name="b_cb31eb89d2773d05d965b8254_7b63ece6ae" tabIndex="-1" value=""/></div>
          </div>
          </form>
          <div className="fb-like" data-href="http://healthcare4allny.org" data-width="100" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
      </div>
    )
  }
}


