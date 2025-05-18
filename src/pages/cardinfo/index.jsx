import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { flowers } from '../home'
import Card from '../../component/card'

export default function CardInfo() {
    const { id } = useParams()
    const [flower, setFlower] = useState([])
    useEffect(() => {
        const updateFlower = flowers.filter(item => item?.id.toString() === id)
        setFlower(updateFlower)
    }, [])
    return (
        <div>
            {flower && flower.map((item, index) => (
                <Card id={item?.id} key={index} image={item?.image} title={item?.title} description={item?.description} />
            ))}
        </div>
    )
}
