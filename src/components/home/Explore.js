import React from 'react';
import { getRentals } from '../../store/rentalsSlice';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { AiOutlineStar } from 'react-icons/ai'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { RiRulerLine } from 'react-icons/ri'
import { IoBedOutline } from 'react-icons/io5'
import { BiBath } from 'react-icons/bi'
import RentalCard from '../RentalCard';
import { Link } from 'react-router-dom';

const Explore = () => {

    const dispatch = useDispatch()
    const {status, rentals} = useSelector(state => state.rentals)

    React.useEffect(() => {
        dispatch(getRentals())
    },[dispatch])
    

    return (
        <div>
            {status === "loading" ? 
                <div>Loading...</div> : status === "error" ? 
                <div>Problem fetching data</div> :
                <section className=''>
                    {rentals?.data && rentals?.data.slice(0,3).map((rental => (
                        <div key={rental._id}>
                            <Link to={`/rentals/${rental._id}`}>
                                <RentalCard rental={rental} />
                            </Link>
                        </div>
                        // <div key={rental._id} className="rounded-md shadow-lg mb-6">
                        //     <div className='h-48'>
                        //         <img src={rental.propertyPhotos} alt={rental.propertyType} className='rounded-t-md h-full w-full object-cover' />
                        //     </div>

                        //     <div className='card__body p-4'>
                        //         <div className='py-4 border-b-2 border-gray-200'>
                        //             <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                        //         </div>
                        //         <div className='flex py-4 border-b-2 border-gray-200'>
                        //             <div className='flex items-center mr-4'>
                        //                 <RiRulerLine className='text-green-500' />
                        //                 <span>30,000sq</span>
                        //             </div>
                        //             <div className='flex mr-4'>
                        //                 <IoBedOutline className='text-green-500' />
                        //                 <span>4 beds</span>
                        //             </div>
                        //             <div className='flex mr-4'>
                        //                 <BiBath className='text-green-500' />
                        //                 <span>1</span>
                        //             </div>
                        //         </div>

                        //         <div className='flex justify-between py-4'>
                        //             <div>
                        //                 <span>&#x20A6;</span>{rental?.price}
                        //             </div>
                        //             <div className='card__body--ratings flex'>
                        //                 <AiOutlineStar />
                        //                 {rental.ratings ? rental.ratings : 0}
                        //             </div>
                        //         </div>
                        //     </div>
                        // </div>
                    )))}
                    {/* <Card>
                        <div>see more</div>
                    </Card> */}
                </section>
            }
        </div>
    )
}

const ExploreSection = styled.section`
    padding: 1rem 2rem;
`

// const Card = styled.div`
//     max-width: 250px;
//     position: relative;
//     margin: 2rem auto;
//     border-radius: 1rem;

//     img {
//         width: 100%;
//         object-fit: cover;
//         border-radius: 1rem;
//     }

//     .card__body {
//         position: absolute;
//         z-index: 1;
//         width: 100%;
//         padding: 1rem;
//         top: 80%;
//         display: flex;
//         justify-content: space-between;
//         align-items: center;

//         &--ratings {
//             display: flex;
//             align-items: center;
//             color: yellow;
//         }

//         &--location {
//             display: flex;
//             align-items: center;
//             color: white;
//         }
//     }
// `

export default Explore