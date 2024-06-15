import React from 'react'
import UpBanner from './UpBanner'
import BackToHomeBtn from './BackToHomeBtn'
import AddCoffeeForm from './AddCoffeeForm'
import Footer from './Footer'

export default function AddCoffee() {
  return (
    <div>
      <UpBanner />
      <BackToHomeBtn />
      <section className='px-12 pb-20'>
        <AddCoffeeForm />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
