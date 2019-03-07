// calculator.compnent.js

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import spacing from '@material-ui/core/styles/spacing';
import Display from './display.component';
import update from 'immutability-helper';
import push from 'immutability-helper';


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
      height: 300,
      flex: 4,
      margin: 10,
      textAlign: 'center',
    },
    Button: {
        padding: 20
    }

  };

class Calculator extends Component {
    constructor(){
        super()
        this.state = { operations: [] }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        console.log("button clicked: ", e.currentTarget.value);
        const value = e.currentTarget.value;
        switch(value){
            case 'clear':
                this.setState({
                    operations: [],
                })
                break
            
            case 'eqauls':
                this.calculateOperations()
                break
            
            default: 
            // fix this
                const newOperations = update(this.state.operations, {
                    $push: [e.currentTarget.value],
                });
                this.setState({
                    operations: newOperations,
                })
                break
                
        }
    }
    render() {
        return (
            <div>
                 <Paper zdepth={3} style={styles.paperLeft}>
            <h4>Display Component</h4>
            <Display data={this.state.operations} />
            </Paper>
            <Paper zdepth={3} style={styles.paperRight}>
                <Button
                type='input'
                color='primary'
                variant='contained'
                size="large"
                styles={styles.Button}
                value="7"
                onClick = {this.handleClick}
                >
                7
                </Button>

                <Button
                type='input'
                color='primary'
                variant='contained'
                size="large"
                styles={styles.Button}
                value="8"
                onClick = {this.handleClick}

                >
                8
                </Button>

                <Button
                type='input'
                color='primary'
                variant='contained'
                size="large"
                styles={styles.Button}
                value="9"
                >
                9
                </Button>

                <br></br>

                <Button
                type='input'
                color='primary'
                variant='contained'
                size="large"
                styles={styles.Button}
                value="4"
                >
                4
                </Button>

                <Button
                type='input'
                color='primary'
                variant='contained'
                size="large"
                styles={styles.Button}
                value="5"
                >
                5
                </Button>
                
                <Button
                type='input'
                color='primary'
                variant='contained'
                size="large"
                styles={styles.Button}
                value="6"
                >
                6
                </Button>

                <br></br>

                <Button
                type='input'
                color='primary'
                variant='contained'
                size="large"
                styles={styles.Button}
                value="1"
                >
                1
                </Button>

                <Button
                type='input'
                color='primary'
                variant='contained'
                size="large"
                styles={styles.Button}
                value="2"
                >
                2
                </Button>

                <Button
                type='input'
                color='primary'
                variant='contained'
                size="large"
                styles={styles.Button}
                value="3"
                >
                3
                </Button>

                <br></br>

                <Button
                type='input'
                color='primary'
                variant='contained'
                size="large"
                styles={styles.Button}
                value="equal"
                >
                =
                </Button>

                
            </Paper>
                </div>
            
        );
    }
  }

export default withStyles(styles) (Calculator);
