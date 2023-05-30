import React, { useState } from 'react'
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
        inputs : inputState,
        operations,
        result,
        date:new Date(),
      }
      setHistoryItem([history, ...historyItem]);
  }

  return (
    <div style={{width:'50%',margin:'0 auto'}}>
      <h1>Result : {result}</h1>App

      <div>
        <p>inputs</p>

        <input name='a' onChange={handleInputField} value={inputState.a} type='number'/>
        <input name='b'onChange={handleInputField} value={inputState.b}  type='number'/>
      </div>


      <div>
          <p>Oparations </p>

          <button onClick={()=>handleArithMathicops('+')}>+</button>
          <button onClick={()=>handleArithMathicops('-')}>-</button>
          <button onClick={()=>handleArithMathicops('*')}>*</button>
          <button onClick={()=>handleArithMathicops('/')}>/</button>
          <button onClick={()=>handleArithMathicops('%')}>%</button>

          <button onClick={handleClear}>clear</button>
      </div>


      <div>
        <p>History</p>
        {historyItem.length===0?(
          <p>
          <small>there are no History</small>
        </p>
        ):(
          <ul>
            {historyItem.map((history)=>(
              <li key={history.id}>
              <p>operation : {history.inputs.a} {history.operations} {history.inputs.b} result :{history.result}</p>
              <small>{history.date.toLocaleDateString()}</small>
              <br/>
              <small>{history.date.toLocaleTimeString()}</small>
              <button>restore</button>
        </li>
            ))}
          
        </ul>
        )}
        
      </div>
      
      </div>
      
  )
}

export default App