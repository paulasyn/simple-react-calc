// calculator.compnent.js

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import spacing from '@material-ui/core/styles/spacing';

const styles = {
    div:{
      display: 'flex',
      flexDirection: 'row wrap',
      padding: 20,
      width: '100%'
    },
    paperLeft:{
      flex: 1,
      height: '100%',
      margin: 10,
      textAlign: 'center',
      padding: 10
    },
    paperRight:{
      height: 600,
      flex: 4,
      margin: 10,
      textAlign: 'center',
    },
    Button: {
        margin: spacing.unit
    }

  };

class Calculator extends Component {
    render() {
        return (
            <div>
                 <Paper zDepth={3} style={styles.paperLeft}>
            <h4>Display Component</h4>
          </Paper>
          <Paper zDepth={3} style={styles.paperRight}>
            <Button
            type='input'
            color='primary'
            variant='raised'
            size="large"
            styles={styles.Button}
            value="7"
            >
            7
            </Button>

            <Button
            type='input'
            color='primary'
            variant='raised'
            size="large"
            styles={styles.Button}
            value="8"
            >
            8
            </Button>

            <Button
            type='input'
            color='primary'
            variant='raised'
            size="large"
            styles={styles.Button}
            value="9"
            >
            9
            </Button>

            <Button
            type='input'
            color='primary'
            variant='raised'
            size="large"
            styles={styles.Button}
            value="4"
            >
            4
            </Button>

            <Button
            type='input'
            color='primary'
            variant='raised'
            size="large"
            styles={styles.Button}
            value="5"
            >
            5
            </Button>
            
            <Button
            type='input'
            color='primary'
            variant='raised'
            size="large"
            styles={styles.Button}
            value="6"
            >
            6
            </Button>

            <Button
            type='input'
            color='primary'
            variant='raised'
            size="large"
            styles={styles.Button}
            value="1"
            >
            1
            </Button>

            <Button
            type='input'
            color='primary'
            variant='raised'
            size="large"
            styles={styles.Button}
            value="2"
            >
            2
            </Button>

            <Button
            type='input'
            color='primary'
            variant='raised'
            size="large"
            styles={styles.Button}
            value="3"
            >
            3
            </Button>

            
          </Paper>
            </div>
            
        );
    }
  }

export default withStyles(styles) (Calculator);
