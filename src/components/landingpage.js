import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12} style={{ paddingBottom: "30px", overflow: "scroll" }}>
            <img 
              src='/image/icon_with_binder.jpg'
              alt="icon"
              className="icon"
            />

            <div className="banner-text">
              <h1>Full Stack Web Engineer</h1>

              <hr style={{marginBottom: 20 + 'px'}} />
              
              { /* Github */ }
              <div className="social-links">
                <a href="https://github.com/KosaburoKaneko" rel="noopener noreferrer" target="_blank">
                  <i className="fab fa-github-square" aria-hidden="true"></i>
                </a>
              
              { /* Twitter */ }
                <a href="https://twitter.com/Kosaburo_Kaneko" rel="noopener noreferrer" target="_blank">
                  <i className="fab fa-twitter-square" aria-hidden="true"></i>
                </a>
              
              { /* Facebook */ }
                <a href="https://www.facebook.com/kosaburo.kaneko" rel="noopener noreferrer" target="_blank">
                  <i className="fab fa-facebook-square" aria-hidden="true"></i>
                </a>
              
              { /* Blog */ }
                <a href="https://b1840943.hatenablog.jp/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-rss-square" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
