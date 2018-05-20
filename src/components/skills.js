import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
  render() {
    return(
        <Grid>
          <Cell col={3}>
            <div>
              {this.props.skill}
            </div>
          </Cell>

          <Cell col={9} style={{ paddingTop: '8px' }}>
            <div>
              <ProgressBar style={{ margin: 'auto', width: '75%' }}
                progress={this.props.progress}
              />
            </div>
          </Cell>
        </Grid>
    )
  }
}

export default Skills;
