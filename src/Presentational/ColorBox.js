import React from 'react'

const ColorBox = ({color}) => { 
    console.log(color);
    return <div style={{backgroundColor: color, width: '400px', height: '400px', margin: 'auto'}}>My Color Box!</div>
}

export default ColorBox;