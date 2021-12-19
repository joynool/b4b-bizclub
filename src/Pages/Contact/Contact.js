import React from 'react'
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

function Contact ()
{
    function sendEmail (e)
    {
        e.preventDefault();
        emailjs.sendForm('service_2ifmj29', 'template_ervlmdf', e.target, 'user_ld8ZnYI1s2eCzu8Mgj7Hi')
            .then(res =>
            {
                console.log(res);
                Swal.fire(
                    'Thank You!',
                    'Your message successfully delivered!',
                    'success'
                );
                e.target.reset();
            })
            .catch(err => console.log(err));
    }

    return (
        <section id="contact">
            <div className="flex justify-center items-center px-5 py-10">
                <form
                    onSubmit={sendEmail}
                    className="lg:w-2/3 md:w-1/2 flex flex-col w-full md:px-8 md:py-8 mt-8 md:mt-0 border-2 rounded-lg wow animate__animated animate__fadeInUp">
                    <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font text-center">
                        b4b Biz Club
                    </h2>
                    <p className="leading-relaxed mb-5 text-center">
                        Feel free to leave your message...
                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            required
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            required
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="message"
                            className="leading-7 text-sm text-gray-400">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-indigo-500 mx-auto lg:w-1/4 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact
