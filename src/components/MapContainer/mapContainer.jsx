import React, { } from 'react';
import {  GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {

    const mapStyles = {
        height: "40vh",
        width: "25%",
    };

    const defaultCenter = {
        lat: 35.0459, lng: -85.2953,
    };

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyAWxJDu4MVclbgA4OJ9TX2N5ms-w9egOMU"
        >
            <GoogleMap
                mapContainerStyle={mapStyles}
                center={defaultCenter}
                zoom={13} />

        </LoadScript>

    );
}

export default MapContainer;