import React from 'react'
import { FaEye, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


export default function AppCard({ category, chef, details, name, photoURL, supplier, taste, id }) {

    const handleDeleteCoffee = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: 'DELETE'
                }).then((element) => {
                    return element.json()
                }).then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Coffee has been deleted.",
                            icon: "success"
                        });
                    }
                })
            }
        });
    }

    const handleUpdateCoffee = (id) => {
        console.log(id)
    }
    return (
        <div className='bg-[#d9d7d2] px-10 py-5 flex items-center space-x-6 border rounded-lg'>
            <img src={photoURL} alt={name} className='w-[10rem]' />
            <section>
                <p><span className='font-bold'>Name : </span> {name}</p>
                <p><span className='font-bold'>Chef : </span> {chef}</p>
                <p><span className='font-bold'>Supplier : </span> {supplier}</p>
            </section>
            <section className='flex flex-col space-y-2'>
                <button className='p-2 bg-[#eda92b] border-2 border-black rounded-lg'><FaEye /></button>
                <Link to={`/updateCoffee/${id}`}><button className='p-2 bg-[#4d4a45] border-2 border-black rounded-lg' onClick={() => handleUpdateCoffee(id)}><FaPen /></button></Link>
                <button className='p-2 bg-[#d6313a] border-2 border-black rounded-lg' onClick={() => handleDeleteCoffee(id)}><MdDelete /></button>
            </section>
        </div>
    )
}
