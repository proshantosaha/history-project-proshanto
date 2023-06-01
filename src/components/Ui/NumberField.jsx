import React from 'react'
import PropType from 'prop-types'

const NumberField = ({value,onChange,name}) => {
  return (
   <input type='number' value={value} onChange={onChange} name={name}/>
  )
}


NumberField.propTypes ={
    value:PropType.number.isRequired,
    onChange:PropType.func.isRequired,
    name:PropType.string.isRequired
}
export default NumberField




// vedio 39

// style 23min 
