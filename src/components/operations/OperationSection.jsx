import React from 'react'
import PropType from 'prop-types'
import shortid from 'shortid'
import Button from '../Ui/Button'

const OperationSection = ({handleArithMathicops,handleClear}) => {
  const operations = [
    {
        id :shortid.generate(),
        text:'+',
        onClick:()=>handleArithMathicops('+'),  
   },
   {
        id :shortid.generate(),
        text:'-',
        onClick:()=>handleArithMathicops('-'),  
   },
    {
        id :shortid.generate(),
        text:'*',
        onClick:()=>handleArithMathicops('*'),  
    },
    {
        id :shortid.generate(),
        text:'/',
        onClick:()=>handleArithMathicops('/'),  
    },
    {
        id :shortid.generate(),
        text:'%',
        onClick:()=>handleArithMathicops('%'),  
    },
    {
        id :shortid.generate(),
        text:'clear',
        onClick:handleClear
    },
 ]

  return (
    <div>
          <p>Oparations </p>

         <div>
            {
                operations.map((ops)=>
                <Button 
                    key={ops.id} 
                    text={ops.text} 
                    onClick={ops.onClick}
                />)
            }
         </div>
          
      </div>
  )
}


OperationSection.propTypes ={
    handleArithMathicops:PropType.func.isRequired,
    handleClear:PropType.func.isRequired,
}

export default OperationSection