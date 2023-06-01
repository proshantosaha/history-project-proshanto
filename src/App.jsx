import React, { useState } from 'react'
import NumberField from './components/Ui/NumberField';
import Button from './components/Ui/Button';
import InputSection from './components/inputs/InputSection';
import OperationSection from './components/operations/OperationSection';
import HistorySection from './components/history/HistorySection';
/*
  1.handle user input fields
  2.handle oparations 
  3.handle a list of histories
  4.render history list
  5.restore the history


*/ 

const InitialInputState ={
  a:0,
  b:0,
}


function* generateId (){
    let id = 1;
    while(true){
      yield id++;
    }
}

const getId = generateId ()



const App = () => {

  const [inputState,setInputState] = useState({...InitialInputState})
  const [result, setResult] = useState(0)
  const [historyItem,setHistoryItem] = useState([])
  const [restoreHistory,setRestoreHistory] = useState(null)

  const handleInputField = (e) =>{
    setInputState({
      ...inputState,
      [e.target.name]:parseInt( e.target.value)
    })

  };

  const handleClear =() =>{
      setInputState({
        ...InitialInputState
      })

    setResult(0)
  };  


  const handleArithMathicops =(operations)=>{

    if (!inputState.a || !inputState.b){
      alert('invalid');
      result;
    }
    const f = new Function(
      'operations',
      `
        return ${inputState.a}  ${operations} ${inputState.b}
      `
      )

      const result = f(operations)
      setResult(result);
      const history = {
        id : getId.next(),
        inputs : {...inputState} ,
        operations,
        result,
        date:new Date(),
      }
      setHistoryItem([history, ...historyItem]);
      
  
  }


  const handleRestoreBtn = (history) =>{
    setInputState({...history.inputs});
    setResult(history.result)
    setRestoreHistory(history.id)
  };

  return (
    <div style={{width:'50%',margin:'0 auto'}}>
      <h1>Result : {result}</h1>App
         <InputSection
         inputs={inputState}
         handleInputField={handleInputField}
      
         />

        <OperationSection 
        handleArithMathicops={handleArithMathicops}
        handleClear={handleClear}
        />

      <HistorySection 
      historyItem={historyItem}
      restoreHistory={restoreHistory}
      handleRestoreBtn={handleRestoreBtn}
      />

      
      </div>
      
  )
}

export default App