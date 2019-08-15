import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Suivez moi{' '}
      <a href="https://www.linkedin.com/in/charles-edouard-toutain/">@charles</a>
    </h2>
    <br />
    <InstagramFeed count="8" />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="/">Charles-Edouard Toutain</a>.
        </span>
      </div>
    </footer>
  </div>
)
