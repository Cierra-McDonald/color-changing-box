import React, { Component } from 'react'
import ColorBox from '../Presentational/ColorBox';
const randomColor = require('randomcolor');


export default class FunctionalBox extends Component {
    state = { 
        bgColor: '#FFFFFF'
    }

    generateRGBColor(){
        const color = randomColor();
        return color;
   }
    
    componentDidMount() { 
        this.interval = setInterval(() => {
            this.setState({
                bgColor: this.generateRGBColor()
            })  
        }, 1000);
    }
    
    componentWillUnmount() { 
        clearInterval(this.interval);
    }
  
    render() {
        return (
            <div style={{backgroundColor:this.state.bgColor}}>
               <ColorBox
               color={this.props.bgColor}
               />
            </div>
        )
    }
}
