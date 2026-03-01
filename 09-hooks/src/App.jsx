import React, { useState } from 'react'

const App = () => {

const[Num, setNum] = useState({user: 'John', age: 30})

const btnClicked = () => {
  setNum(prev => ({...prev,age:50}))
  
}
 
  return (
    <div>
      <h1>{Num.user},{Num.age}</h1>
      <button onClick={btnClicked}>Change Numbers</button>
    </div>
  )
}

export default App