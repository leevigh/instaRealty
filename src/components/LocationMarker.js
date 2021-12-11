import React from 'react'
import { Icon } from '@iconify/react'
// import locationIcon from '@iconify/icon-mdi'

const LocationMarker = ({ lat, lng}) => {
    return (
        <div className="location-marker">
            <Icon style={{fontSize: '2rem', color: 'red'}} icon="entypo:location-pin" className="location-icon" />
        </div>
    )
}

export default LocationMarker
