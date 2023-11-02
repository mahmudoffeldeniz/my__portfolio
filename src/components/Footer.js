import React from 'react';
import Logo from '../assets/img/logo.webp'
import {Link} from 'react-scroll'

function Footer() {
    return (
        <footer className="bg-transparent rounded-lg shadow  m-4">
            <div className="  w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="  sm:flex sm:items-center sm:justify-between">
                    <span className="flex items-center mb-4 sm:mb-0">
                        <img src={Logo} className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-accent">Development</span>
                    </span>
                    <ul className=" flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link to='about' className="mr-4 hover:underline md:mr-6">About</Link>
                        </li>
                        <li>
                            <Link to='work' className="mr-4 hover:underline md:mr-6">Work</Link>
                        </li>
                        <li>
                            <Link to='service' className="mr-4 hover:underline md:mr-6">Service</Link>
                        </li>
                        <li>
                            <Link to='contact' className="hover:underline">Contact</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© Eldeniz Mahmudov 2023 </span>
            </div>
        </footer>
    );
}

export default Footer;
