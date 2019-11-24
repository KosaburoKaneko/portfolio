import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6} tablet={8} phone={4}>
            <h2>Kosaburo Kaneko</h2>
            <img 
              src='/image/icon_with_binder.jpg'
              alt="icon"
              className="contact-icon"
            />
          </Cell>

          <Cell col={6} tablet={8} phone={4}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent className="contact-list-items">
                    <i className="fas fa-envelope-square" aria-hidden="true"></i>
                    <a href="mailto:b1840943@gmail.com">b1840943@gmail.com</a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent className="contact-list-items">
                    <i className="fab fa-facebook-messenger" aria-hidden="true"></i>
                    <a href="http://m.me/kosaburo.kaneko">Kosaburo Kaneko</a>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
