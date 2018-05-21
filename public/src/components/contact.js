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
              src={require('../images/icon.jpg')}
              alt="icon"
              className="contact-icon"
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar commodo mauris, ut mollis metus scelerisque ut. Etiam eleifend orci vel lobortis tincidunt. Maecenas in nunc elementum, eleifend magna eget, ultrices justo. Aliquam eleifend erat id tortor convallis, ac placerat dolor malesuada. 
            </p>
          </Cell>

          <Cell col={6} tablet={8} phone={4}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent className="contact-list-items">
                    <i className="fa fa-phone-square" aria-hidden="true"></i>
                    080-6440-0233
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent className="contact-list-items">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    b1840943@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent className="contact-list-items">
                    <i className="fa fa-skype" aria-hidden="true"></i>
                    MySkypeID
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
