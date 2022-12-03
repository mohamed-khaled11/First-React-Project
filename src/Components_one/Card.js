import React from 'react'
import CardItem from './CardItem'

function Card() {
  return (
    <div className='card container text-center mt-5  text-white'>
        <CardItem
        p={{
            name:'mohamed khaled',
            job:'frontend developer',
            phone:'02020838',
            email:'mk.akdjf@gmail.com',
            website:''
        }} 
        ></CardItem>
        <CardItem 
        p={{
            name:'Abdo fahmy',
            job:'Backend developer',
            phone:'02020838',
            email:'mk.akdjf@gmail.com',
            website:'dkjfidjfi'
        }} 
        ></CardItem>
        <CardItem 
        p={{
            name:'Ahmed khaled',
            job:'Devops developer',
            phone:'02020838',
            email:'mk.akdjf@gmail.com',
            website:'dkjfidjfi'
        }} 
        ></CardItem>
        <CardItem 
        p={{
            name:'Ashraf khaled',
            job:'Ui/Ux developer',
            phone:'02020838',
            email:'mk.akdjf@gmail.com',
            website:'dkjfidjfi'
        }} 
        ></CardItem>
    </div>
  )
}

export default Card