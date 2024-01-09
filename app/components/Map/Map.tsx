import React, {useEffect} from 'react';
import {MapContainer, TileLayer} from 'react-leaflet';
import L from 'leaflet';
import styles from './Map.module.css'
import VisibleMarkersTracker from "./Marker/VisibleMarkersTracker";
import {useSelector} from "react-redux";
import {postsArr} from "../../redux/slices/postSlice";



const Map: React.FC = () => {
    const posts =useSelector(postsArr)

    useEffect(() => {

    }, [posts]);

    const position: L.LatLngExpression = [49, 32];

    return (
        <div className={styles.map}>

        <MapContainer center={position} zoom={6} minZoom={6} style={{height: '100%', width: '100%'}}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <VisibleMarkersTracker/>
        </MapContainer>
        </div>
    );
};

export default Map;
