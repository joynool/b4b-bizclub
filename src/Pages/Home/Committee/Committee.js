import React, { useEffect, useState } from 'react'
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

function Committee ()
{
    const [committees, setCommittees] = useState([]);
    useEffect(() =>
    {
        fetch('https://stormy-falls-22010.herokuapp.com/committee')
            .then(res => res.json())
            .then(data => setCommittees(data));
    }, [])

    return (
        <section>
            <h1 className='flex items-center justify-center lg:text-3xl font-medium text-white mb-10 wow animate__animated animate__fadeInDown'>
                <ImQuotesLeft />
                &nbsp;&nbsp;Current Committee Member List&nbsp;&nbsp;
                <ImQuotesRight />
            </h1>
            <div className='lg:grid lg:grid-cols-2'>
                {
                    committees.map(com => <figure key={com._id} className="md:flex bg-gray-100 rounded-xl m-5 p-8 md:p-0">
                        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto wow animate__animated animate__fadeInDown" src={com.img} alt="committee member" width={384} height={512} />
                        <div className="pt-6 md:p-8 text-center md:text-left space-y-4 wow animate__animated animate__fadeInRight">
                            <blockquote>
                                <p className="text-lg font-medium">
                                    {com.description}
                                </p>
                            </blockquote>
                            <figcaption className="font-medium">
                                <div className="text-sky-500">
                                    {com.name}
                                </div>
                                <div className="text-gray-700">
                                    {com.post}
                                </div>
                            </figcaption>
                        </div>
                    </figure>
                    )
                }
            </div>
        </section>
    )
}

export default Committee
