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

const App = () => {

  const [inputState,setInputState] = useState({...InitialInputState})
     

// const handleInputField = (e) =>{
//    setInputState({
//     ...inputState,
//      [e.target.name]:parseInt( e.target.value)
//    })

// }



const handleInputFieldA = (e) =>{
  setInputState({
   ...inputState,
   a: e.target.value
  })

}

const handleInputFieldB = (e) =>{
  setInputState({
   ...inputState,
   b: e.target.value
  })

}


  return (
    <div style={{width:'50%',margin:'0 auto'}}>
      <h1>Result : 0</h1>App

      <div>
        <p>inputs</p>

        <input name='a' onChange={handleInputFieldA} value={inputState.a} type='number'/>
        <input name='b' onChange={handleInputFieldB} value={inputState.b}  type='number'/>
      </div>


      <div>
          <p>Oparations</p>

          <button>+</button>
          <button>-</button>
          <button>*</button>
          <button>/</button>
          <button>clear</button>
      </div>


      <div>
        <p>History</p>
        <p>
          <small>there are no History</small>
          </p>
      </div>
      
      </div>
      
  )
}

export default App