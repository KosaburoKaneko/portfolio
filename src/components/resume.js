import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4} tablet={8} phone={4}>
            <div style={{ textAlign: 'center' }}>
              <img 
                src={require('../images/icon_face.jpg')}
                alt="icon"
                style={{ height: '200px' }}
              />
            </div>

            <h2 style={{ paddingTop: '1em' }}>Kosaburo Kaneko</h2>
            <h4 style={{ color: 'gray' }}>Programmer</h4>
            <hr className="info__hr"/>
            <p>福岡県出身。初めて触ったPCはWindows 95で、当時から個人ホームページ作成に勤しむ。HIPHOPが好きで英語を学び始め、中学卒業後に渡米。フリースタイルバトルで入賞経験あり。好きな食べ物はとんこつラーメン。</p>
            <hr className="info__hr"/>
            <h5>Address</h5>
            <p>5-19-15, Nishikamata, Ota-ku, Tokyo, 144-0051, Japan</p>
            <h5>Phone</h5>
            <p>080-6440-0233</p>
            <h5>Email</h5>
            <p>b1840943@gmail.com</p>
            <hr className="info__hr"/>
          </Cell>

          <Cell className="resume-right-col" col={8} tablet={8} phone={4}>
            <h2>Education</h2>
            <Education
              startYear={2011}
              endYear={2015}
              schoolName="Ritsumeikan Asia Pacific University"
              schoolDescription="国際経営学部で国際関係論、国際貿易、簿記・会計、経営・経済、マーケティング、英語を学ぶ。学生・教授の約半数が外国籍というインターナショナルな環境での4年間で民族・宗教・文化などの違いを越えて共に学び、英語だけではなく多様性についても理解を深める。"
            />

            <hr className="detail__hr"/>

            <h2>Experience</h2>

            <Experience
              startYear={2015}
              endYear={2015}
              jobName="Social Media Marketer"
              jobDescription="中小企業を対象とした口コミ集客の自社サービスの営業活動やSNSを絡めたキャンペーンを作成できる自社サービスのキャンペーン管理などに従事。"
            />

            <Experience
              startYear={2015}
              endYear={2016}
              jobName="Hoverboard and Accesories EC owner"
              jobDescription="中国からホバーボードを輸入し、自分で制作したECサイト上で販売。中国の工場への交渉、海上輸送のためのフォワーダーとの手続きや輸入通関作業、パッケージ作成、ECサイト制作、Facebook・リスティング広告運用などをこなす。"
            />

            <Experience
              startYear={2016}
              endYear={2018}
              jobName="Sales Engineer of Industrial Machinery"
              jobDescription="ドイツの産業機械メーカーの日本支社で技術営業として入社当時1人しかいなかった会社を支える。日本のお客様とドイツ本社との間に入り折衝を行い、国際的なコミュニケーションの重役を担う。また化学プラントや火力発電所での保守作業、部品・作業員手配、作業員指示管理や国内での営業活動、採用活動にも従事。"
            />

            <hr className="detail__hr"/>

            <h2>Skills</h2>

            <Skills 
              skill="English"
              progress={100}
            />

            <Skills 
              skill="HTML/CSS"
              progress={90}
            />

            <Skills 
              skill="JavaScript"
              progress={80}
            />

            <Skills 
              skill="jQuery"
              progress={70}
            />

            <Skills 
              skill="Ruby on Rails"
              progress={70}
            />

            <Skills 
              skill="React"
              progress={45}
            />

            <Skills 
              skill="NodeJS"
              progress={30}
            />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
