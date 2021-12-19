import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
import b4b from '../../../images/login.png';

function Footer ()
{
    return (
        <footer>
            <section className='flex flex-col lg:flex-row items-center justify-around bg-gray-800'>
                <nav>
                    <img src={b4b} alt="b4b pad" width={300} height={200} />
                </nav>
                <nav className='flex flex-col items-center justify-center'>
                    <span className='my-1 border-b-2 text-sm'>Links:</span>
                    <Link to="/home" className='my-1 hover:text-white'>Home</Link>
                    <Link to="/home" className='hover:text-white'>Rules & Regulations</Link>
                    <Link to="/home" className='my-1 hover:text-white'>Contact Us</Link>
                </nav>
                <nav className='flex flex-col items-center'>
                    <span className='my-3 text-sm border-b-2'>Follow us on social networks:</span>
                    <div className='flex items-center mb-3'>
                        <a href="/#">
                            <FaFacebook className="w-8 h-8 mr-5 hover:text-blue-500" />
                        </a>
                        <a href="/#">
                            <FaTwitter className="w-8 h-8 mr-5 hover:text-blue-400" />
                        </a>
                        <a href="/#">
                            <FaInstagram className="w-8 h-8 hover:text-red-300" />
                        </a>
                    </div>
                </nav>
            </section>
            <section className='bg-gray-600 text-center py-3'>
                <span className='font-extralight'>&copy; b4b Biz Club | All right reserved.</span>
            </section>
        </footer>
    )
}

export default Footer