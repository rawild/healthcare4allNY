import React, {Component, PropTypes} from 'react'

export default class MediaForm extends Component {
  render() {
      return(
        <div className="social-media">
          <div className="fb-like" data-href="http://healthcare4allny.org" data-layout="button_count" data-action="like" data-size="small" data-show-faces="false" data-share="true">
          </div>
          <a className="twitter-share-button"
            href="https://twitter.com/intent/tweet?text=Time%20is%20running%20out%20to%20get%20health%20care%20for%20all%20NY!%20#Healthcare4NY" data-size="large">
            Tweet</a>
        </div>
      )
  }
}