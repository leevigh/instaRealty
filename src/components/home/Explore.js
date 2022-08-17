import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getRentals } from '../../store/rentalsSlice';
import RentalCard from '../RentalCard';

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
                    )))}
                    {/* <Card>
                        <div>see more</div>
                    </Card> */}
                </section>
            }
        </div>
    )
}

export default Explore