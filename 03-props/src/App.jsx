import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Danish Qureshi' age={25} img="https://wallpapers.com/images/featured/3d-pictures-vvnovug664swmg2j.jpg"/>

      <Card user='Ali Raza' age={30} img="https://static.vecteezy.com/system/resources/thumbnails/007/622/529/small/abstract-template-3d-arrow-stripes-vibrant-color-background-with-lighting-effect-technology-style-vector.jpg"/>

      <Card user='Ahmad Khan' age={28} img="https://i.pinimg.com/736x/73/f4/24/73f42452453b2a52c2eba350e08a34d4.jpg"/>
    </div>
  )
}

export default App