import React from 'react'
import PropTypes from 'prop-types'

const ColorBox = ({color}) => (
    <div style={{backgroundColor: color, width: '400px', height: '400px', margin: 'auto', marginTop:'8%', borderRadius:'3em', textAlign:'center', justifyContent:'center', border: '3px solid white'}}></div>
    );

    
ColorBox.propTypes = { 
    color: PropTypes.string.isRequired
}

export default ColorBox;