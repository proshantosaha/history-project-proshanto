import React from 'react'
import PropType from 'prop-types'

import NumberField from '../Ui/NumberField'

const InputSection = ({inputs,handleInputField}) => {
  return (
    <div>
    <p>inputs</p>

    <NumberField name='a' onChange={handleInputField} value={inputs.a} type='number'/>
    <NumberField name='b'onChange={handleInputField} value={inputs.b}  type='number'/>
  </div>

  )
}

InputSection.propTypes={
    inputs:PropType.objectOf(
        {
        a:PropType.number.isRequired,
        b:PropType.number.isRequired 
       }
        ).isRequired,
        handleInputField:PropType.func.isRequired

}

export default InputSection