import React, { } from 'react';
import {  GoogleMap, LoadScript } from '@react-google-maps/api';

// Google Maps API container.  See Readme for setting up API Key Access
// Basic maps container, call <MapContainer/> and import to place in another component
// Consider Google Geolocation API for method to convert addresses to lat/long coordinates.
//const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const MapContainer = () => {

    const mapStyles = {
        // Default width and height for container
        height: "48.5vh",
        width: "72%"
    };

    // Default ma[ center Lat/Long is UTC campus
    const defaultCenter = {
        lat: 35.0459, lng: -85.2953,
    };

    return (
        <LoadScript
            //Place key in ENV file
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


// DELETED FUNCTIONALITY - Demonstrates the use of pins and on click infobox.
// import React, {useEffect, useState } from 'react';

// import { useSelector } from 'react-redux';
// import {  GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

// const MapContainer = () => {

//     const [ selected, setSelected ] = useState({});

//     const onSelect = item => {
//         setSelected(item);
//     }

//     const locations = [
//         {
//             name: "Freshens",
//             location: {
//                 lat: 35.036842,
//                 lng: -85.306915
//             },
//         },
//         {
//             name: "Champys",
//             location: {
//                 lat: 35.0432,
//                 lng: -85.30216
//             },
//         },
//         {
//             name: "UPD Med",
//             location: {
//                 lat: 35.042065,
//                 lng: -85.298743
//             },
//         },
//         {
//             name: "Yellow Deli",
//             location: {
//                 lat: 35.04447,
//                 lng: -85.29691
//             },
//         },
//         {
//             name: "Einstein Bro's",
//             location: {
//                 lat: 35.04509,
//                 lng: -85.30556
//             },
//         }
//     ]


//     const mapStyles = {
//         height: "90vh",
//         width: "80%",
//     };

//     const defaultCenter = {
//         lat: 35.0459, lng: -85.2953,
//     };

//     return (
//         <LoadScript
//             //Ref .env to secure API key in the future
//             //Generic temp Marker on center of campus
//             googleMapsApiKey="AIzaSyAWxJDu4MVclbgA4OJ9TX2N5ms-w9egOMU"
//         >
//             <GoogleMap
//                 mapContainerStyle={mapStyles}
//                 center={defaultCenter}
//                 zoom={13}
                              
//             >
//                 {
//                     locations.map(item => {
//                         return (
//                         <Marker key={item.name} 
//                         position={item.location}
//                         onClick={ () => onSelect(item)}
//                         />  
//                         )
//                         })
//                 }
//                 {
//                     selected.location &&
//                     (
//                         <InfoWindow
//                         position={selected.location}
//                         clickable={true}
//                         onCloseClick={() => setSelected({})}
//                         >
//                             <h2>{selected.name}</h2>
//                         </InfoWindow>
//                     )
//                 }
//             </GoogleMap>
//         </LoadScript>

//     );
// }

// export default MapContainer;
