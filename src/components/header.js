import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="row middle-xs header__sub">
          <div className="header__author col-sm"><a target="_blank" rel="noopener noreferrer" href="http://www.ashleephillips.com">Ashlee Phillips</a></div>

          <div className="header__social col-sm align-right">
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ashleeletters"><span className="social-cta">Follow on Twitter</span><i class="fa fa-twitter" aria-hidden="true"></i></a>
            <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/ashleeletters"><span className="social-cta">Follow on Instagram</span><i class="fa fa-instagram" aria-hidden="true"></i></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UC8gslRpdQNU7nJKpASu8NTg"><span className="social-cta">Subscribe to my channel</span><i class="fa fa-youtube" aria-hidden="true"></i></a>
          </div>
        </div>

        <div className="header__hero wrapper">
          <h1>Calligraphy Glossary</h1>
        </div>
      </header>
    )
  }
}

export default Header;