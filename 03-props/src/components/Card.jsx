import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
        <img src={props.img} alt="" />
        <h1>{props.user},{props.age}</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, ratione repellat. Totam numquam fuga consectetur beatae, recusandae tempore, veniam amet voluptatibus aperiam quaerat animi nostrum facilis quos necessitatibus. Illo, a.</p>
        <button>View Profile</button>
      </div>
  )
}

export default Card