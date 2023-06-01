import React from 'react'
import PropType from 'prop-types'

import HistoryItem from './HistoryItem'

const HistorySection = ({historyItem,restoreHistory}) => {
  return (
    <div>
    <p>History</p>
    {historyItem.length=== 0 ?(
      <p>
      <small>there are no History</small>
    </p>
    ):(
      <ul>
        {historyItem.map((history)=> 
        <HistoryItem 
        key={history.id} 
        disabled={restoreHistory===history.id}
        history={history}
        />)}
      
    </ul>
    )}
    
  </div>
  )
}

HistoryItem.propTypes ={
    historyItem:PropType.arrayOf(PropType.shape({
        id : PropType.number.isRequired,
        inputs :PropType.objectOf(
            {
            a:PropType.number.isRequired,
            b:PropType.number.isRequired 
           }).isRequired,
           operations:PropType.string.isRequired,
           result:PropType.number.isRequired,
           date:PropType.object.isRequired,
       })
    ),
    restoreHistory:PropType.number.isRequired,
   
   
}

export default HistorySection