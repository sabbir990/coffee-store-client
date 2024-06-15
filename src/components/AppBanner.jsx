import React from 'react'

export default function AppBanner() {
    return (
        <div className='bg-app-banner-bg py-40 bg-center bg-cover grid grid-cols-2 px-10'>
            <section>

            </section>
            <section className='text-white space-y-4'>
                <h1 className='text-5xl font-caveat font-bold'>Would you like a cup of delicious coffee?</h1>
                <p className='font-roboto font-thin'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companions of every moment!! Enjoy the beautiful moments and make them memorable.</p>
                <button className='bg-[#ff9c33] text-black font-caveat font-bold px-3 py-2 border rounded-sm'>Learn More</button>
            </section>
        </div>
    )
}
