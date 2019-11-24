import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

// const descriptionJa = {
//   school: '国際経営学部で国際関係論、国際貿易、簿記・会計、経営・経済、マーケティング、英語を学ぶ。学生・教授の約半数が外国籍というインターナショナルな環境での4年間で民族・宗教・文化などの違いを越えて共に学び、英語だけではなく多様性についても理解を深める。',
//   job: [
//     '中小企業を対象とした口コミ集客の自社サービスの営業活動やSNSを絡めたキャンペーンを作成できる自社サービスのキャンペーン管理などに従事。',
//     '中国からホバーボードを輸入し、自分で制作したECサイト上で販売。中国の工場への交渉、海上輸送のためのフォワーダーとの手続きや輸入通関作業、パッケージ作成、ECサイト制作、Facebook・リスティング広告運用などをこなす。',
//     'ドイツの産業機械メーカーの日本支社で技術営業として、入社当時自分を含め2人しかいなかった会社を支える。日本の顧客とドイツ本社との間に入り折衝を行い、国際的なコミュニケーションを円滑に進める役割を担う。また化学プラントや火力発電所での保守作業、部品・作業員手配、作業員指示管理や国内での営業活動に加え、採用担当や新聞・雑誌広告などのプロモーション担当も兼務。',
//     '前職を退職し、プログラミングスクールに入学。Ruby on Railsを中心にWEBアプリケーションの基礎を学ぶ。その後日本のIT企業に転職し、情報システム部の開発チームとして社内ツールの開発を担当。モダンな技術や開発環境を駆使し、従業員の生産性を向上するために誠意開発中。'
//   ]
// }

const descriptionEn = {
  school: "I got a bachelor's degree in International Management. I learned management, economics, accounting, trading, marketing, and English at the University. Because it had such an international environment, I also learned diversity and international communications.",
  job: [
    'I worked as a sales to promote marketing service which leverages word of mouth to boost online reputations. The main clients were SMB and advertising agencies.',
    'I owned an EC business of Hoverboard. I managed negotiation with Chinese manufacturers, arranging sea shipping, customs clearance, product package design, creating a website, and advertisement.',
    'As a technical sales representative at a Japanese branch of German industrial machinery company, I supported the company that had only two people at the time. Negotiated between Japanese customers and the German headquarters and played a role in facilitating international communication. In addition to maintenance work at chemical plants and power plants, I was responsible for domestic sales activities,  recruitment, and newspaper and magazine advertisements.',
    'I learned web development such as HTML, CSS, Ruby on Rails, and Scrum in Coding Bootcamp. After I graduated, I joined one of the most popular IT companies in Japan as an internal web system developer. I created Slack bots, calendar events transfer system, and employee information API.'
  ]
}

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4} tablet={8} phone={4}>
            <div style={{ textAlign: 'center', marginTop: '69px' }}>
              <img 
                src='/image/icon.jpg'
                alt='icon'
                className='resume__img'
              />
            </div>

            <h2 style={{ paddingTop: '1em' }}>Kosaburo Kaneko</h2>
            <h4 style={{ color: 'gray' }}>Full Stack Web Engineer</h4>
            <hr className='info__hr'/>
            <p>
              I grew up in a rural area in Fukuoka prefecture.
            </p>
            <p>
              I am full of curiosity and never fear to new challenges. My greatest strength is to build up skills and knowledge from scratch to the practical level quickly.
            </p>
            <p>
              I got interested in technology after my father bought me a Windows 95 when I was 8. I started creating websites just for fun. It brought me an opportunity to meet new people.
            </p>
            <p>
              At the same time, I started listening to HIP-HOP music which influenced me so much. I flew to the United States to learn English. The sole motivation was to understand the lyrics of rappers. After a while, I started rapping and won a prize in a freestyle rap battle.
            </p>
            <hr className='info__hr'/>
            <h5>Address</h5>
            <p>Shinagawa, Tokyo, Japan</p>
            <h5>Messenger</h5>
            <p><a href='http://m.me/kosaburo.kaneko'>Kosaburo Kaneko</a></p>
            <hr className='info__hr'/>
          </Cell>

          <Cell className='resume-right-col' col={8} tablet={8} phone={4}>
            <h2>Education</h2>
            <Education
              startYear={2011}
              endYear={2015}
              schoolName='Ritsumeikan Asia Pacific University'
              schoolDescription={descriptionEn.school}
            />

            <hr className='detail__hr'/>

            <h2>Experience</h2>

            <Experience
              startYear={2015}
              endYear={2015}
              jobName='Social Media Marketer'
              jobDescription={descriptionEn.job[0]}
            />

            <Experience
              startYear={2015}
              endYear={2016}
              jobName='Hoverboard and Accesories EC owner'
              jobDescription={descriptionEn.job[1]}
            />

            <Experience
              startYear={2016}
              endYear={2018}
              jobName='Sales Engineer of Industrial Machinery'
              jobDescription={descriptionEn.job[2]}
            />

            <Experience
              startYear={2018}
              jobName='Full Stack Web Engineer'
              jobDescription={descriptionEn.job[3]}
            />

            <hr className='detail__hr'/>

            <h2>Skills</h2>

            <Skills 
              skill='English'
              progress={100}
            />

            <Skills 
              skill='JavaScript'
              progress={90}
            />

            <Skills 
              skill='TypeScript'
              progress={80}
            />

            <Skills 
              skill='NodeJS'
              progress={80}
            />

            <Skills 
              skill='React'
              progress={80}
            />

            <Skills 
              skill='Docker'
              progress={75}
            />

            <Skills 
              skill='GCP'
              progress={60}
            />

            <Skills 
              skill='Kubernetes'
              progress={60}
            />

            <Skills 
              skill='HTML/CSS'
              progress={60}
            />

            <Skills 
              skill='Neo4j'
              progress={60}
            />

            <Skills 
              skill='jQuery'
              progress={50}
            />

            <Skills 
              skill='Ruby on Rails'
              progress={50}
            />

            <Skills 
              skill='Laravel'
              progress={50}
            />

            <Skills 
              skill='Go'
              progress={50}
            />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
