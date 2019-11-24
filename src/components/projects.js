import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return(
        <Grid className="projects-grid">
          {/* 5 seconds */}
          <Card shadow={3} className="projects-cards">
            <CardTitle style={{ color: '#000000', height: '176px', background: 'url(/image/5sec_optimized.gif), center / cover' }}>5 seconds</CardTitle>
            <CardText>
              Predict exact 5 seconds.
            </CardText>
            <CardActions border>
            <a href="https://github.com/KosaburoKaneko/5seconds" rel="noopener noreferrer" target="_blank">
              <Button colored>Github</Button>
            </a>
            <a href="https://five-seconds-522fa.firebaseapp.com/" rel="noopener noreferrer" target="_blank">
              <Button colored>LiveDemo</Button>
            </a>
            </CardActions>
          </Card>
          {/* おみくじ */}
          <Card shadow={3} className="projects-cards">
            <CardTitle style={{ color: '#000000', height: '176px', background: 'url(/image/omikuji.gif), center / cover' }}>Omikuji</CardTitle>
            <CardText>
              Try your luck.
            </CardText>
            <CardActions border>
              <a href="https://github.com/KosaburoKaneko/omikuji" rel="noopener noreferrer" target="_blank">
                <Button colored>Github</Button>
              </a>
              <a href="https://omikuji-c9680.firebaseapp.com/" rel="noopener noreferrer" target="_blank">
                <Button colored>LiveDemo</Button>
              </a>
            </CardActions>
          </Card>
          {/* パスワードジェネレーター */}
          <Card shadow={3} className="projects-cards">
            <CardTitle style={{ color: '#000000', height: '176px', background: 'url(/image/password_generator.gif), center / cover' }}>Password Generator</CardTitle>
            <CardText>
              It generates random password.
            </CardText>
            <CardActions border>
              <a href="https://github.com/KosaburoKaneko/password-generator" rel="noopener noreferrer" target="_blank">
              <Button colored>Github</Button>
              </a>
              <a href="https://password-generator-da4ec.firebaseapp.com/" rel="noopener noreferrer" target="_blank">
                <Button colored>LiveDemo</Button>
              </a>
            </CardActions>
          </Card>
          {/* 割り勘 */}
          <Card shadow={3} className="projects-cards">
            <CardTitle style={{ color: '#000000', height: '176px', background: 'url(/image/warikan.gif), center / cover' }}>Bill splitter</CardTitle>
            <CardText>
              It splits the bill.
            </CardText>
            <CardActions border>
              <a href="https://github.com/KosaburoKaneko/warikan" rel="noopener noreferrer" target="_blank">
              <Button colored>Github</Button>
              </a>
              <a href="https://warikan-8a47f.firebaseapp.com/" rel="noopener noreferrer" target="_blank">
                <Button colored>LiveDemo</Button>
              </a>
            </CardActions>
          </Card>
          {/* ワードカウンター */}
          <Card shadow={3} className="projects-cards">
            <CardTitle style={{ color: '#000000', height: '176px', background: 'url(/image/word_counter.gif), center / cover' }}>Word Counter</CardTitle>
            <CardText>
              Word counter just like Twitter.
            </CardText>
            <CardActions border>
              <a href="https://github.com/KosaburoKaneko/word-counter" rel="noopener noreferrer" target="_blank">
              <Button colored>Github</Button>
              </a>
              <a href="https://word-counter-cf6ef.firebaseapp.com/" rel="noopener noreferrer" target="_blank">
                <Button colored>LiveDemo</Button>
              </a>
            </CardActions>
          </Card>
        </Grid>
      ) 
    } else if (this.state.activeTab === 1) {
      return(
        <Grid className="projects-grid">
          {/* Chat Space */}
          <Card shadow={3} style={{ minWidth: '450', margin: '2em auto' }}>
            <a href="http://54.248.199.39/" rel="noopener noreferrer" target="_blank">
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(/image/chat-space.gif), center / cover' }}>Chat Space</CardTitle>
            </a>
            <CardText>
              Chat system with multiple users.
            </CardText>
            <CardActions border>
              <a href="https://github.com/KosaburoKaneko/chatspace" rel="noopener noreferrer" target="_blank">
                <Button colored>Github</Button>
              </a>
            </CardActions>
          </Card>
        </Grid>
      ) 
    } else if (this.state.activeTab === 2) {
      return(
        <Grid className="projects-grid">
          {/* ポートフォリオ */}
          <Card shadow={3} className="projects-cards">
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(/image/portfolio.png), center / cover' }}>Portfolio</CardTitle>
            <CardText>
              This portfolio.
            </CardText>
            <CardActions border>
              <a href="https://github.com/KosaburoKaneko/portfolio" rel="noopener noreferrer" target="_blank">
                <Button colored>Github</Button>
              </a>
            </CardActions>
          </Card>
          {/* Profilecamp */}
          <Card shadow={3} className="projects-cards">
            <CardTitle style={{ color: '#000', height: '176px', background: 'url(/image/profilecamp.gif), center / cover' }}>Profilecamp</CardTitle>
            <CardText>
              You can edit your SNS profiles in one place.
            </CardText>
            <CardActions border>
              <a href="https://profilecamp.site/" rel="noopener noreferrer" target="_blank">
                <Button colored>LiveDemo</Button>
              </a>
            </CardActions>
          </Card>
        </Grid>
      ) 
    } else if (this.state.activeTab === 3) {
      return(
        <Grid className="projects-grid">
          {/* 予定調整くん */}
          <Card shadow={3} className="projects-cards">
            <CardTitle style={{ color: '#000', height: '176px', background: 'url(/image/schedule-arranger.gif)' }}>Schedule arranger</CardTitle>
            <CardText>
              Schedule arranger.
            </CardText>
            <CardActions border>
              <a href="https://young-sea-88939.herokuapp.com/" rel="noopener noreferrer" target="_blank">
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
          <Tab>JavaScript</Tab>
          <Tab>Rails</Tab>
          <Tab>React</Tab>
          <Tab>NodeJs</Tab>
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
