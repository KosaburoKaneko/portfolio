import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      const fiveSeconds = require('../images/5sec_optimized.gif');
      const omikuji = require('../images/omikuji.gif');
      const passwordGenerator = require('../images/password_generator.gif');
      const warikan = require('../images/warikan.gif');
      const wordCounter = require('../images/word_counter.gif');
      const chatSpace = require('../images/chat-space.gif');
      const scheduleArranger = require('../images/schedule-arranger.gif');
      console.log(scheduleArranger);

      return(
        <Grid className="projects-grid">
          {/* 5 seconds */}
          <Card shadow={3} className="projects-cards">
            <CardTitle style={{ color: '#000000', height: '176px', background: 'url(/static/media/5sec_optimized.43afad9a.gif), center / cover' }}>5 seconds</CardTitle>
            <CardText>
              STARTボタンを押して、何も見ずに5秒経ったタイミングを勘で当てるゲーム。
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
            <CardTitle style={{ color: '#000000', height: '176px', background: 'url(/static/media/omikuji.cc8ac030.gif), center / cover' }}>おみくじ</CardTitle>
            <CardText>
              ボタン連打で何回も運試しできるアプリ。
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
            <CardTitle style={{ color: '#000000', height: '176px', background: 'url(/static/media/password_generator.7bd57dc1.gif), center / cover' }}>Password Generator</CardTitle>
            <CardText>
              ランダムでパスワードを作成。文字数の指定、数字や特殊な文字を含めるかなども自由に設定可。
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
            <CardTitle style={{ color: '#000000', height: '176px', background: 'url(/static/media/warikan.2123affc.gif), center / cover' }}>わりかん</CardTitle>
            <CardText>
              合計金額と人数といくら単位で割るかを入力すれば一人当たりの金額とあまりを算出するアプリ。
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
            <CardTitle style={{ color: '#000000', height: '176px', background: 'url(/static/media/word_counter.e2fe7452.gif), center / cover' }}>Word Counter</CardTitle>
            <CardText>
              Twitterのように入力された文字を数えます。30文字制限に近づけば文字数が赤くなり警告。
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
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(/static/media/chat-space.2e2930a0.gif), center / cover' }}>Chat Space</CardTitle>
            </a>
            <CardText>
              多人数でチャットができます。インクリメンタルサーチ、非同期送信、自動更新などの機能つき。
            </CardText>
            <CardActions border>
              <a href="https://github.com/KosaburoKaneko/chatspace" rel="noopener noreferrer" target="_blank">
                <Button colored>Github</Button>
              </a>
              <a href="http://54.248.199.39/" rel="noopener noreferrer" target="_blank">
                <Button colored>LiveDemo</Button>
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
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(data:image/png;base64,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), center / cover' }}>Portfolio</CardTitle>
            <CardText>
              このReactとReact-mdlで作成したポートフォリオです。
            </CardText>
            <CardActions border>
              <a href="https://github.com/KosaburoKaneko/portfolio" rel="noopener noreferrer" target="_blank">
                <Button colored>Github</Button>
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
            <CardTitle style={{ color: '#000', height: '176px', background: 'url(/static/media/schedule-arranger.85003ba6.gif)' }}>予定調整くん</CardTitle>
            <CardText>
              複数人で出席を取れます。仮想環境からHerokuにデプロイ。
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
