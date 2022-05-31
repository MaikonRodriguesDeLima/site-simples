import React from 'react';

const Nav = () => {
    return (
        <div className='flex w-full p-2'>
            <nav className="bg-orange-500 flex justify-center">
                <div className="container mx-auto px-4 py-2">
                    <div className="flex justify-between items-center">
                        <div className="flex justify-between">
                            <div className='flex mx-3'>
                                <a href="#" className="text-white text-2xl font-bold" rel="noopener follow" />
                                <img src="/logo.svg" alt="logo" />
                            </div>
                            <div className='mr-6'></div>
                            <div className='flex'>
                                <span>
                                    <div className='flex'>
                                        <p className='mx-8'>
                                            <a href="#" className="text-white text-2xl font-bold" rel="noopener follow" />
                                            Our Story
                                        </p>
                                    </div>
                                </span>
                                <span>
                                    <div>
                                        <p className='mx-8'>
                                            <a href="#" className="text-white text-2xl font-bold" rel="noopener follow" />
                                            About
                                        </p>
                                    </div>
                                </span>
                                <span>
                                    <div>
                                        <p className='mx-8'>
                                            <a href="#" className="text-white text-2xl font-bold" rel="noopener follow" />
                                            Blog
                                        </p>
                                    </div>
                                </span>
                                <span>
                                    <div>
                                        <p className='mx-8'>
                                            <a href="#" className="text-white text-2xl font-bold" rel="noopener follow" />
                                            Medium
                                        </p>
                                    </div>
                                </span>
                                <div>
                                    <span>
                                        <a href="#" className="text-white text-1xl font-bold" rel="noopener follow" >
                                            <button className="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded-full  ">
                                                Get started
                                            </button>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;