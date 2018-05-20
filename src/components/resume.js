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
                src="http://www.shareicon.net/download/2015/09/18/103157_man_512x512.png" 
                alt="avatar"
                style={{ height: '200px' }}
              />
            </div>

            <h2 style={{ paddingTop: '1em' }}>Kosaburo Kaneko</h2>
            <h4 style={{ color: 'gray' }}>Programmer</h4>
            <hr className="info__hr"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar commodo mauris, ut mollis metus scelerisque ut. Etiam eleifend orci vel lobortis tincidunt. Maecenas in nunc elementum, eleifend magna eget, ultrices justo. Aliquam eleifend erat id tortor convallis, ac placerat dolor malesuada. </p>
            <hr className="info__hr"/>
            <h5>Address</h5>
            <p>1 Hacker Way Menlo Park, 94025</p>
            <h5>Phone</h5>
            <p>080-6440-0233</p>
            <h5>Email</h5>
            <p>b1840943@gmail.com</p>
            <hr className="info__hr"/>
          </Cell>

          <Cell className="resume-right-col" col={8} tablet={8} phone={4}>
            <h2>Education</h2>
            <Education
              startYear={2002}
              endYear={2006}
              schoolName="My University"
              schoolDescription="sLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar commodo mauris, ut mollis metus scelerisque ut. Etiam eleifend orci vel lobortis tincidunt. Maecenas in nunc elementum, eleifend magna eget, ultrices justo. Aliquam eleifend erat id tortor convallis, ac placerat dolor malesuada. "
            />

            <Education
              startYear={2007}
              endYear={2009}
              schoolName="My 2nd University"
              schoolDescription="sLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar commodo mauris, ut mollis metus scelerisque ut. Etiam eleifend orci vel lobortis tincidunt. Maecenas in nunc elementum, eleifend magna eget, ultrices justo. Aliquam eleifend erat id tortor convallis, ac placerat dolor malesuada. "
            />

            <hr className="detail__hr"/>

            <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName="My 1st Job"
              jobDescription="sLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar commodo mauris, ut mollis metus scelerisque ut. Etiam eleifend orci vel lobortis tincidunt. Maecenas in nunc elementum, eleifend magna eget, ultrices justo. Aliquam eleifend erat id tortor convallis, ac placerat dolor malesuada. "
            />

            <Experience
              startYear={2012}
              endYear={2016}
              jobName="My 2nd Job"
              jobDescription="sLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar commodo mauris, ut mollis metus scelerisque ut. Etiam eleifend orci vel lobortis tincidunt. Maecenas in nunc elementum, eleifend magna eget, ultrices justo. Aliquam eleifend erat id tortor convallis, ac placerat dolor malesuada. "
            />

            <hr className="detail__hr"/>

            <h2>Skills</h2>

            <Skills 
              skill="JavaScript"
              progress={100}
            />

            <Skills 
              skill="HTML/CSS"
              progress={80}
            />

            <Skills 
              skill="NodeJS"
              progress={50}
            />

            <Skills 
              skill="React"
              progress={25}
            />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
