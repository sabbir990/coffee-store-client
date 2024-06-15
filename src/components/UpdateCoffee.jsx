import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function UpdateCoffee() {
  const coffee = useLoaderData()

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const chef = formData.get('chef');
    const supplier = formData.get('supplier');
    const taste = formData.get('taste');
    const category = formData.get('category');
    const details = formData.get('details');
    const photoURL = formData.get('photoURL');

    const updatedCoffee = {name, chef, supplier, taste, category, details, photoURL}
    fetch(`http://localhost:5000/coffee/${coffee._id}`, {
      method : 'PUT',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(updatedCoffee)
    }).then(res => res.json()).then(data => {
      console.log(data)
    })
  }
  return (
    <div className='w-full py-20 px-10 bg-[#b5b7ba] border rounded-md shadow-md '>
      <div className='text-center space-y-8 mb-8'>
        <h1 className='font-caveat text-4xl font-bold'>Add a Coffee</h1>
        <p className='font-roboto'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at it's layout. The point of using lorem ipsum is that it has a more-or-less destribution of letters, as oppossed to using content here.</p>
      </div>

      <form className='grid lg:grid-cols-2 gap-x-8 gap-y-4' onSubmit={handleUpdateCoffee}>
        <div className='space-y-2'>
          <label htmlFor="Name" className='font-roboto font-bold'>Name</label> <br />
          <input type="text" placeholder='Enter a coffee name' className='w-full p-2 border rounded-md outline-none' name='name' defaultValue={coffee.name} />
        </div>
        <div className='space-y-2'>
          <label htmlFor="Name" className='font-roboto font-bold'>Chef</label> <br />
          <input type="text" placeholder='Enter a coffee Chef' className='w-full p-2 border rounded-md outline-none' name='chef' defaultValue={coffee.chef} />
        </div>
        <div className='space-y-2'>
          <label htmlFor="Name" className='font-roboto font-bold'>Supplier</label> <br />
          <input type="text" placeholder='Enter a coffee supplier' className='w-full p-2 border rounded-md outline-none' name='supplier' defaultValue={coffee.supplier} />
        </div>
        <div className='space-y-2'>
          <label htmlFor="Name" className='font-roboto font-bold'>Taste</label> <br />
          <input type="text" placeholder='Enter a coffee taste' className='w-full p-2 border rounded-md outline-none' name='taste' defaultValue={coffee.taste} />
        </div>
        <div className='space-y-2'>
          <label htmlFor="Name" className='font-roboto font-bold'>Category</label> <br />
          <input type="text" placeholder='Enter a coffee category' className='w-full p-2 border rounded-md outline-none' name='category' defaultValue={coffee.category} />
        </div>
        <div className='space-y-2'>
          <label htmlFor="Name" className='font-roboto font-bold'>Details</label> <br />
          <input type="text" placeholder='Enter a coffee details' className='w-full p-2 border rounded-md outline-none' name='details' defaultValue={coffee.details} />
        </div>
        <div className='col-span-2 flex flex-col items-center space-y-4'>
          <div className='space-y-2 w-full'>
            <label htmlFor="Name" className='font-roboto font-bold'>Photo</label> <br />
            <input type="text" placeholder='Enter photo URL' className='w-full p-2 border rounded-md outline-none' name='photoURL' defaultValue={coffee.photoURL} />
          </div>
          <div className='w-full'>
            <input type="submit" value="Add Coffee" className='cursor-pointer bg-[#a65b29] text-white font-caveat font-bold w-full text-center py-2 border rounded-md border-transparent' />
          </div>
        </div>
      </form>

    </div>
  )
}
