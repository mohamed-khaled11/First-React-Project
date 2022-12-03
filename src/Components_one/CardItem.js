import React from 'react'

function CardItem(props) {
  return (
    <div className='card-item bg-black mt-5 p-0 text-left'>
        <img src='https://picsum.photos/200' alt=''></img>
        <div className='content'>
        <h2>{props.p.name}</h2>
        <p>{props.p.job}</p>
        <ul>
            <li>Phone: <span>{props.p.phone}</span></li>
            <li>Email: <span>{props.p.email}</span></li>
            <li>{props.p.website === ''?'':`website: ${props.p.website}`}</li>
        </ul>
        </div>
    </div>
  )
}

export default CardItem