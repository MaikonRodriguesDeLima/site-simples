import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-blue-500">
                <div className="container mx-auto px-4 py-2">
                    <div className="flex justify-between items-center">
                        <div className="flex">
                            <a href="#" className="text-white text-2xl font-bold">
                                <img src="/logo.svg" alt="logo" />
                            </a>
                            </div>
                        <div className="flex">
                            <a href="#" className="ml-4 text-white text-2xl font-bold">
                                <img src="/logo.svg" alt="logo" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;