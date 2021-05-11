import React, { Component } from 'react'
const randomColor = require('randomcolor');


export default class FunctionalBox extends Component {
    state = { 
        bgColor: '#FFFFFF'
    }
    
    componentDidMount() { 
        const color = randomColor();
        setInterval(() => {
            this.setState({
                bgColor: color
            })  
        }, 1000);
    }
    // changeColor = (color) => { 
    //     let i = 0;
    //     i = (i + 1) % color
    //     this.setState({
    //         bgColor: color[i]
    //     })
    //     setInterval(this.changeColor, 1000)
    // }
    time = () => {
        setInterval(() => {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        this.setState({ bgColor: randomColor })
    }, 1000)
    }

    render() {
        return (
            <div style={{backgroundColor:this.state.bgColor}}>
               Hello! 
            </div>
        )
    }
}
