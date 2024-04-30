import React from 'react'

const Prop = (props) => {
  return (
    <div>
        <p>Hey {props.name}</p>
        <p>your learing {props.course}</p>
        <p>your currently working during {props.period}</p>
        <p>your driving a {props.car.color} {props.car.brand} with speed range of {props.car.speed}</p>
        <button onClick={props.onClick}> Click here now.</button>
        {props.children}
    </div>
  )
}

export default Prop
