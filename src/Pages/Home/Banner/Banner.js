import React, { useEffect, useState } from 'react'
import './Banner.css';
import one from './../../../images/one.jpg'
import two from './../../../images/two.jpg'
import three from './../../../images/three.jpg'
import four from './../../../images/four.jpg'
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/outline';
import { ImQuotesLeft } from "react-icons/im";

const imageData = [
    { image: one, cap1: 'Bheramara Central Organization B4B', cap2: 'for SSC 2004 students' },
    { image: two, cap1: 'From the very beginning, all the members of this organization', cap2: 'have been gaining 100% cooperation and trust' },
    { image: three, cap1: 'In the seventh year of its establishment, it was realized that', cap2: 'it is very important to play a role in the development of the country' },
    { image: four, cap1: 'With this objective in mind, the organization started', cap2: 'its journey on 21st February 2020 called b4b Biz Club' }
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
        }, 7000);
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
        <section className='flex items-center justify-center relative h-full mb-12'>
            <ChevronDoubleLeftIcon className='lg:h-16 h-10 absolute top-1/2 left-10 z-10 cursor-pointer select-none' onClick={prevSlide} />
            <ChevronDoubleRightIcon className='lg:h-16 h-10 absolute top-1/2 right-10 z-10 cursor-pointer select-none' onClick={nextSlide} />
            {
                imageData.map((slide, index) =>
                {
                    return (
                        <div key={index} className={index === current ? 'slide active' : 'slide'}>
                            {
                                index === current && (
                                    <div className='lg:relative lg:-top-20'>
                                        <h1 className='relative lg:top-24 text-center lg:text-3xl font-medium p-2 bg-gray-800 text-white rounded-t-lg wow animate__animated animate__fadeInDown'>
                                            <ImQuotesLeft />
                                            {slide.cap1}
                                        </h1>
                                        <h1 className='relative lg:top-24 text-center lg:text-3xl font-medium p-2 bg-slate-100 text-gray-800 wow animate__animated animate__fadeInUp'>
                                            {slide.cap2}
                                        </h1>
                                        <img src={slide.image} width={1000} height={800} alt="b4b slider" className='rounded-b-lg' />
                                    </div>
                                )
                            }
                        </div>
                    )
                })
            }
        </section>
    )
}

export default Banner
