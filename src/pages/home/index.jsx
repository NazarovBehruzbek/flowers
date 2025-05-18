import React from 'react'
import Card from '../../component/card'
export const flowers = [
    {
        id: 1,
        image: "https://plus.unsplash.com/premium_photo-1676070096487-32dd955e09e0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJpZ2h0JTIwZmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D",
        title: "Bright Flowers",
        description: "Bright Flowers Pictures | Download Free Images on Unsplash"
    },
    {
        id: 2,
        image: " https://thumbs.dreamstime.com/b/spring-flowers-blue-crocuses-drops-water-backgro-background-tracks-rain-113784722.jpg",
        title: "Bright Flowers",
        description: "Bright Flowers Pictures | Download Free Images on Unsplash"
    },
    {
        id: 3,
        image: "https://plus.unsplash.com/premium_photo-1676070096487-32dd955e09e0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJpZ2h0JTIwZmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D",
        title: "Bright Flowers",
        description: "Bright Flowers Pictures | Download Free Images on Unsplash"
    },
    {
        id: 4,
        image: " https://thumbs.dreamstime.com/b/spring-flowers-blue-crocuses-drops-water-backgro-background-tracks-rain-113784722.jpg",
        title: "Bright Flowers",
        description: "Bright Flowers Pictures | Download Free Images on Unsplash"
    },
]
export default function Home() {
    return (
        <div className='bg-gray-100 min-h-screen p-3'>
            <div className='container mx-auto'>
                <h1 className='text-2xl text-center font-semibold animate__animated animate__bounceInLeft'>Flowers and news</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-6'>
                    {flowers && flowers.map((item, index) => (
                        <Card id={item?.id} key={index} image={item?.image} title={item?.title} description={item?.description} />
                    ))}
                </div>
            </div>
        </div>
    )
}
