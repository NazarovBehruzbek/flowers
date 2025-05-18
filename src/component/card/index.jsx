import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Card({ image, title, description, id }) {
    const navigate = useNavigate()
    const handleSubmit = (id) => {
        navigate(`cardinfo/${id}`)
    }
    return (
        <div onClick={() => handleSubmit(id)} className='bg-white overflow-hidden rounded-md hover:rounded-sm p-1.5 animate__animated  animate__fadeInLeft'>
            <img className='w-full h-[250px]' src={image} alt={title} />
            <h3 className='text-2xl'>{title}</h3>
            <p className='text-[10px] py-3'>{description}</p>
        </div>
    )
}
