import React from 'react'
import PropType from 'prop-types'
import Button from '../Ui/Button'

const HistoryItem = ({history,disabled,handleRestoreBtn}) => {
  return (
    <li key={history.id}>
    <p>operation : {history.inputs.a} {history.operations} {history.inputs.b} result :{history.result}</p>
    <small>{history.date.toLocaleDateString()}</small>
    <br/>
    <small>{history.date.toLocaleTimeString()}</small>
    <br/>
    <Button text='Restore' 
     onClick={()=>handleRestoreBtn(history)} 
    disabled={disabled}/>

</li>
  )
}

HistoryItem.propTypes ={
    history:PropType.shape({
        id : PropType.number.isRequired,
        inputs :PropType.objectOf(
            {
            a:PropType.number.isRequired,
            b:PropType.number.isRequired 
           }
            ).isRequired,
        operations:PropType.string.isRequired,
        result:PropType.number.isRequired,
        date:PropType.object.isRequired,
    }).isRequired,
    disabled:PropType.bool.isRequired,
    handleRestoreBtn:PropType.func.isRequired,
}

history.defaultProps={
    disabled:false
}
export default HistoryItem