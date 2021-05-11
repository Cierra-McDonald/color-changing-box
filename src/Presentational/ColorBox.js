import React from 'react'

const ColorBox = ({color}) => { 
    
    return <div style={{backgroundColor: color, width: '400px', height: '400px', margin: 'auto', marginTop:'8%', borderRadius:'3em', textAlign:'center', justifyContent:'center', border: '3px solid white'}}></div>
}

export default ColorBox;