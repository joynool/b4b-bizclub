import React, { useState } from 'react'
import { ChevronLeftIcon, MenuIcon } from '@heroicons/react/outline';

function Dashboard ()
{
    const [trigger, setTrigger] = useState(false);
    console.log(trigger);
    return (
        <div className='antialiased min-h-screen relative lg:flex'>
            <nav className={`absolute lg:relative z-10 w-80 lg:transform-none lg:opacity-100 bg-gray-600 text-white h-screen ${!trigger ? 'inset-0 opacity-0 transform duration-200 -translate-x-full ease-out' : 'inset-0 opacity-100 transform duration-200 translate-x-0 ease-in'}`}>
                <div className='flex items-center justify-between m-2'>
                    <span className='font-light text-xl sm:text-xl p-2'>Sk Md Joynul Abedin</span>
                    <ChevronLeftIcon onClick={() => setTrigger(false)} className='h-12 p-2 hover:bg-gray-500 rounded-md cursor-pointer lg:hidden' />
                </div>
                <ul className='mt-8 mx-2'>
                    <li>
                        <a href="/" className='block px-4 py-2 hover:bg-gray-700 rounded-md'>Home</a>
                        <a href="/" className='block px-4 py-2 hover:bg-gray-700 rounded-md'>Home</a>
                        <a href="/" className='block px-4 py-2 hover:bg-gray-700 rounded-md'>Home</a>
                    </li>
                </ul>
            </nav>
            <div className='relative z-0 lg:flex-grow'>
                <header className='flex items-center bg-gray-700 text-white'>
                    <MenuIcon onClick={() => setTrigger(true)} className='h-12 p-2 ml-2 hover:bg-gray-600 rounded-md cursor-pointer lg:hidden' />
                    <div className='lg:mx-auto'>
                        <span className='block text-xl sm:text-3xl font-light p-4'>
                            Welcome to DASHBOARD
                        </span>
                    </div>
                </header>
                <section className='m-5'>
                    <h1>Hello from the other side</h1>
                </section>
            </div>
        </div>
    );
};

export default Dashboard
