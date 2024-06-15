import React from 'react'
import AppCard from './AppCard'

export default function AppCards({coffeeData}) {
  return (
    <div className='grid grid-cols-2 space-x-3 space-y-3'>
        {
            coffeeData.map((coffeeInfo) => {
                return <AppCard key={coffeeInfo._id} id={coffeeInfo._id} category={coffeeInfo.category} chef={coffeeInfo.chef} details={coffeeInfo.details} name={coffeeInfo.name} photoURL={coffeeInfo.photoURL} supplier={coffeeInfo.supplier} taste={coffeeInfo.taste}/>
            })
        }
    </div>
  )
}
