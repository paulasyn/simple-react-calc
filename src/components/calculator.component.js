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
import mathjs from 'mathjs';


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
            
            case '=':
                this.calculateOperations()
                break
            
            default: 
            
                const newOperations = update(this.state.operations, {
                    $push: [e.currentTarget.value],
                });
                this.setState({
                    operations: newOperations,
                })
                break
                
        }
    }

    calculateOperations(e) {
        let result = this.state.operations.join('')
        if(result) {
            result = mathjs.eval(result)
            result = mathjs.format(result, {precision: 14})
            result = String(result)
            this.setState({
                operations: [result],
            })
        }

    }

   // TODO:  validate expressions , make sure there aren't times where you have expressions with subsequent operations after each other, no extra decimals in a number, 
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
                onClick = {this.handleClick}
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
                onClick = {this.handleClick}
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
                onClick = {this.handleClick}
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
                onClick = {this.handleClick}
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
                onClick = {this.handleClick}
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
                onClick = {this.handleClick}
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
                onClick = {this.handleClick}
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
                value="="
                onClick = {this.handleClick }
                >
                =
                </Button>
                
                <Button
                type='input'
                color='primary'
                variant='contained'
                size="large"
                styles={styles.Button}
                value="clear"
                onClick = {this.handleClick}
                >
                C
                </Button>

                <Button
                type='input'
                color='primary'
                variant='contained'
                size="large"
                styles={styles.Button}
                value="."
                onClick = {this.handleClick}
                >
                .
                </Button>

                <br></br>

                <Button
                type='input'
                color='primary'
                variant='contained'
                size="large"
                styles={styles.Button}
                value="+"
                onClick = {this.handleClick}
                >
                +
                </Button>

                

                <Button
                type='input'
                color='primary'
                variant='contained'
                size="large"
                styles={styles.Button}
                value="-"
                onClick = {this.handleClick}
                >
                -
                </Button>

                <Button
                type='input'
                color='primary'
                variant='contained'
                size="large"
                styles={styles.Button}
                value="*"
                onClick = {this.handleClick}
                >
                *
                </Button>

                <Button
                type='input'
                color='primary'
                variant='contained'
                size="large"
                styles={styles.Button}
                value="/"
                onClick = {this.handleClick}
                >
                /
                </Button>

                
            </Paper>
                </div>
            
        );
    }
  }

export default withStyles(styles) (Calculator);
