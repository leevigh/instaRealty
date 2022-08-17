import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { BiBath } from 'react-icons/bi'
import { IoBedOutline } from 'react-icons/io5'
import { RiRulerLine } from 'react-icons/ri'

const RentalCard = ({rental}) => {
    return (
        <div key={rental._id} className="rounded-md shadow-lg mb-6">
            <div className='h-48'>
                <img src={rental.propertyPhotos} alt={rental.propertyType} className='rounded-t-md h-full w-full object-cover' />
            </div>

            <div className='card__body p-4'>
                <div className='py-4 border-b-2 border-gray-200'>
                    <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                </div>
                <div className='flex py-4 border-b-2 border-gray-200'>
                    <div className='flex items-center mr-4'>
                        <RiRulerLine className='text-green-500' />
                        <span>30,000sq</span>
                    </div>
                    <div className='flex mr-4'>
                        <IoBedOutline className='text-green-500' />
                        <span>4 beds</span>
                    </div>
                    <div className='flex mr-4'>
                        <BiBath className='text-green-500' />
                        <span>1</span>
                    </div>
                </div>

                <div className='flex justify-between py-4'>
                    <div>
                        <span>&#x20A6;</span>{rental?.price}
                    </div>
                    <div className='card__body--ratings flex'>
                        <AiOutlineStar />
                        {rental.ratings ? rental.ratings : 0}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RentalCard