"use client"
import React from 'react';
import GoogleMapReact from 'google-map-react';
import { ImLocation2 } from "react-icons/im";

const AnyReactComponent = ({ text }) => <div style={{ color: 'red', fontSize: "45px" }}><ImLocation2 /></div>;

const GoogleMap = () => {

    const defaultProps = {
        center: {
            lat: 23.8041,
            lng: 90.4152
        },
        zoom: 16
    };
    return (
        <div style={{ height: '90vh', width: '100%' }}>
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