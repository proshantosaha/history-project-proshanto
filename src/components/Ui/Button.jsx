import React from 'react'
import PropType from 'prop-types'

const Button = ({text,onClick,disabled,customStyle}) => {
  return (
    <button onClick={onClick} disabled={disabled}>{text}</button>
  )
}



Button.propTypes={
    text:PropType.string.isRequired,
    onClick:PropType.func.isRequired,
}
export default Button



// 34min style

// 38   min style

// 46

