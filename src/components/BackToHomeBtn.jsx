import React from 'react';
import { IoArrowBack } from "react-icons/io5";
import { Link } from 'react-router-dom';

export default function BackToHomeBtn() {
    return (
        <div>
            <section className='px-12 py-8'>
                <Link className='back-btn text-3xl flex items-center space-x-3 cursor-pointer' to={'/'}> <IoArrowBack /> Back to home</Link>
            </section>
        </div>
    )
}
