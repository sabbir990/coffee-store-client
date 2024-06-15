import React from 'react'

export default function AppFeature(props) {

  return (
    <div className='space-y-4'>
        <img src={props.image} alt="icon" />
        <h1 className='font-caveat font-bold text-4xl'>{props.heading}</h1>
        <p className='font-roboto'>{props.description}</p>
    </div>
  )
}
