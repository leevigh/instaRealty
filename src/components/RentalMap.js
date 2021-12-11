import React, { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import { useSelector } from 'react-redux'
// import {Wrapper, Status} from '@googlemaps/react-wrapper'

const RentalMap = ({ center, zoom }) => {
    // const {rental} = useSelector(state => state.rental)
    // const [ lat, setLat ] = useState('')
    // const [ lng, setLng ] = useState('')

    // useEffect(() => {
    //     let latlng = rental?.data?.coordinates.split(' ')
    //     setLat(latlng[0])
    //     setLng(latlng[1])
    // }, [rental?.data?.coordinates])

    return (
        <div style={{ height: '70vh', width: '100%'}}>
            <GoogleMapReact 
                bootstrapURLKeys={{ key: 'AIzaSyAEKt70mJfDPaXyuMFfyO8A8v3LRBBqwHY'}} defaultCenter={ center } 
                defaultZoom={ zoom }
                yesIWantToUseGoogleMapApiInternals={true}>
                    <LocationMarker lat={center.lat} lng={center.lng} />
            </GoogleMapReact>
        </div>
    )
}

RentalMap.defaultProps = {
    zoom: 15
}

export default RentalMap
