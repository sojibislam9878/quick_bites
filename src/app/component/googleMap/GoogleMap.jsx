// "use client"
// import React from 'react';
// import GoogleMapReact from 'google-map-react';
// import { ImLocation2 } from "react-icons/im";

// const AnyReactComponent = ({ text }) => <div style={{ color: 'red', fontSize: "45px" }}><ImLocation2 /></div>;

// const GoogleMap = () => {
//     const containerStyle = {
//         height: '100vh',
//         width: '100%',
//         backgroundColor: 'white',
//         padding: '12px',
//         borderRadius: '12px',
//         boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.1)' // example shadow for the map container
//     };

//     const defaultProps = {
//         center: {
//             lat: 23.8041,
//             lng: 90.4152
//         },
//         zoom: 16
//     };
//     return (
//         <div style={containerStyle}>
//             <GoogleMapReact
//                 bootstrapURLKeys={{ key: process.env.GOOGLE_API_KEY }}
//                 defaultCenter={defaultProps.center}
//                 defaultZoom={defaultProps.zoom}

//             >
//                 <AnyReactComponent
//                     lat={defaultProps.center.lat}
//                     lng={defaultProps.center.lng}

//                 />
//             </GoogleMapReact>
//         </div>
//     );
// };

// export default GoogleMap;
"use client"
import React from 'react';
import GoogleMapReact from 'google-map-react';
import { ImLocation2 } from "react-icons/im";

const AnyReactComponent = ({ text }) => (
    <div style={{ color: 'red', fontSize: "45px" }}>
        <ImLocation2 />
    </div>
);

const GoogleMap = () => {
    const containerStyle = {
        height: '100vh', // Full viewport height for large screens
        width: '100%',
        backgroundColor: 'white',
        padding: '12px',
        borderRadius: '12px',
        boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.1)',
        // Mobile specific styles with media query
        '@media (max-width: 600px)': {
            height: '60vh', // Adjust height for mobile
            padding: '8px',
            borderRadius: '8px'
        }
    };

    const defaultProps = {
        center: {
            lat: 23.8041,
            lng: 90.4152
        },
        zoom: 16
    };

    return (
        <div style={containerStyle}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.GOOGLE_API_KEY }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={defaultProps.center.lat}
                    lng={defaultProps.center.lng}
                />
            </GoogleMapReact>
        </div>
    );
};

export default GoogleMap;
