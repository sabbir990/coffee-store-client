import React from 'react'
import features from '../../public/Features'
import AppFeature from './AppFeature.jsx'

export default function AppFeatures() {
  return (
    <div className='bg-[#bfbbb6] px-40 py-20 flex justify-center items-center space-x-4'>
        {
            features.map((element) => {
                return <AppFeature key={element.id} id={element.id} heading={element.heading} description={element.description} image={element.image}/>
            })
        }
    </div>
  )
}
