import React from 'react'   

const App = () => {

  function inputChanging(){
    console.log('input changing')
  }
  
  return (
    <div>
      <input onClick={(
        console.log('input click')
      )} type="text" placeholder='Enter Name' />
    </div>
  )
}
 
export default App