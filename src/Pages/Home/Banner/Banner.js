import React, { useEffect, useState } from 'react'
import './Banner.css';
import one from './../../../images/one.jpg'
import two from './../../../images/two.jpg'
import three from './../../../images/three.jpg'
import four from './../../../images/four.jpg'
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/outline';

const imageData = [
    { image: one }, { image: two }, { image: three }, { image: four }
];

function Banner ()
{
    const [current, setCurrent] = useState(0);
    const length = imageData.length;

    useEffect(() =>
    {
        const interval = setInterval(() =>
        {
            setCurrent(current === length - 1 ? 0 : current + 1)
        }, 5000);
        return () => clearInterval(interval);
    }, [current, length]);

    const nextSlide = () =>
    {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () =>
    {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(imageData) || length <= 0) {
        return null;
    }

    return (
        <section className='flex items-center justify-center relative h-full lg:my-10'>
            <ChevronDoubleLeftIcon className='h-16 absolute top-1/2 left-8 z-10 cursor-pointer select-none' onClick={prevSlide} />
            <ChevronDoubleRightIcon className='h-16 absolute top-1/2 right-8 z-10 cursor-pointer select-none' onClick={nextSlide} />
            {
                imageData.map((slide, index) =>
                {
                    return (
                        <div key={index} className={index === current ? 'slide active' : 'slide'}>
                            {
                                index === current && (<img src={slide.image} width={900} height={600} alt="b4b slider" className='rounded-lg shadow-2xl' />)
                            }
                        </div>
                    )
                })
            }
        </section>
    )
}

export default Banner
