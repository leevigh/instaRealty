import React from 'react'

const Footer = () => {
    return (
        <div className='bg-gray-900 text-white p-6'>
            <div className='border-b-2 border-gray-100 py-4'>
                <div className='mb-4'>
                    <h1>InstaRealty</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, beatae fuga ex facilis necessitatibus hic!</p>
                </div>

                <ul className='mb-4'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Listings</li>
                    <li>Blog</li>
                </ul>

                <div>
                    <h3>Contact Details</h3>
                    <div>
                        Lorem ipsum dolor sit amet consectetur.
                    </div>

                    <div>
                        info@email.com
                    </div>
                </div>
            </div>

            <div className='py-4'>
                <span>&copy; {new Date().getFullYear()} InstaRealty. All rights reserved.</span>
            </div>
        </div>
    )
}

export default Footer