import React from 'react'

const ColorBox = ({color}) => { 
    
    return <div style={{backgroundColor: color, width: '400px', height: '400px', margin: 'auto', marginTop:'10%', borderRadius:'3em', textAlign:'center', justifyContent:'center'}}></div>
}

export default ColorBox;