import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return(
        <Grid className="projects-grid">
          {/* Project 1 */}
          <Card shadow={3} style={{ minWidth: '450', margin: '2em auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png), center / cover' }}>React Project #1</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar commodo mauris, ut mollis metus scelerisque ut. Etiam eleifend orci vel lobortis tincidunt. Maecenas in nunc elementum, eleifend magna eget, ultrices justo. Aliquam eleifend erat id tortor convallis, ac placerat dolor malesuada. 
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
          </Card>

          {/* Project 2 */}
          <Card shadow={3} style={{ minWidth: '450', margin: '2em auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png), center / cover' }}>React Project #2</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar commodo mauris, ut mollis metus scelerisque ut. Etiam eleifend orci vel lobortis tincidunt. Maecenas in nunc elementum, eleifend magna eget, ultrices justo. Aliquam eleifend erat id tortor convallis, ac placerat dolor malesuada. 
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
          </Card>

          {/* Project 3 */}
          <Card shadow={3} style={{ minWidth: '450', margin: '2em auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png), center / cover' }}>React Project #3</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar commodo mauris, ut mollis metus scelerisque ut. Etiam eleifend orci vel lobortis tincidunt. Maecenas in nunc elementum, eleifend magna eget, ultrices justo. Aliquam eleifend erat id tortor convallis, ac placerat dolor malesuada. 
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
          </Card>
        </Grid>
      ) 
    } else if (this.state.activeTab === 1) {
      return(
        <Grid className="projects-grid">
          {/* Project 1 */}
          <Card shadow={3} style={{ minWidth: '450', margin: '2em auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png), center / cover' }}>React Project #1</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar commodo mauris, ut mollis metus scelerisque ut. Etiam eleifend orci vel lobortis tincidunt. Maecenas in nunc elementum, eleifend magna eget, ultrices justo. Aliquam eleifend erat id tortor convallis, ac placerat dolor malesuada. 
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
          </Card>
        </Grid>
      ) 
    } else if (this.state.activeTab === 2) {
      return(
        <Grid className="projects-grid">
          {/* Chat Space */}
          <Card shadow={3} style={{ minWidth: '450', margin: '2em auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png), center / cover' }}>Chat Space</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar commodo mauris, ut mollis metus scelerisque ut. Etiam eleifend orci vel lobortis tincidunt. Maecenas in nunc elementum, eleifend magna eget, ultrices justo. Aliquam eleifend erat id tortor convallis, ac placerat dolor malesuada. 
            </CardText>
            <CardActions border>
              <a href="http://54.248.199.39/" rel="noopener noreferrer" target="_blank">
                <Button colored>LiveDemo</Button>
              </a>
            </CardActions>
          </Card>
        </Grid>
      ) 
    }
  }

  render() {
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
          <Tab>React</Tab>
          <Tab>JavaScript</Tab>
          <Tab>Rails</Tab>
        </Tabs>

        <section>
          <Grid>
            <Cell col={12}>
              <div className="content">
                {this.toggleCategories()}
              </div>
            </Cell>
          </Grid>
        </section>
      </div>
    )
  }
}

export default Projects;
