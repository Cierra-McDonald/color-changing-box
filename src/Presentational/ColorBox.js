import React from 'react'

function ColorBox({ color }) { 
    return <div style={{backgroundColor: color, width: '400px', height: '400px', margin: 'auto'}}>My Color Box!</div>
}

export default ColorBox;