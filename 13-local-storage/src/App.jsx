import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  const [a, seta] = useState(0)
  const [b, setb] = useState(0)

  function aChange() {
    localStorage.setItem('A ki valve change ho gyi')
  }

  function bChange() {
    localStorage.setItem('B ki valve change ho gyi')
  }
  useEffect(function() {
    console.log('use effect is running...')
  }, [a, b])

  

  return (
    <div>

      <h1>A is{a}</h1>
      <h1>B is{b}</h1>

      <button onClick={() => { seta(a + 1); aChange() }}>Increment a</button>

      <button onClick={() => { setb(b + 1); bChange() }}>Increment b</button>

    </div>

  )
}

export default App
