'use client';

import { FC } from "react";
import styles from "./MapBlock.module.css"
import L from 'leaflet';
import imgLogo from "../../resources/images/map-logo.png"
import 'leaflet/dist/leaflet.css';
import Image from 'next/image'
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

const shops = [
    { name: 'Магазин 1', position: [55.7558, 37.6176] },
    { name: 'Магазин 2', position: [55.7601, 37.6276] },
    { name: 'Магазин 3', position: [55.7501, 37.6076] },
];


const customIcon = L.icon({
    iconUrl: imgLogo.src,
    iconSize: [60, 60],
    iconAnchor: [29, 10],
});

const MapBlock: FC = ({ }) => {
    return (
        <div className={styles.root}>
            <h2>Магазины мерча ведьмака</h2>
            <MapContainer
                center={[55.7558, 37.6176]}
                zoom={13}
                style={{ height: '400px', width: '100%' }}
            >
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {shops.map((shop, index) => (
                    <Marker icon={customIcon} key={index} position={shop.position as L.LatLngExpression}>
                        <Popup>
                            <p>
                                {shop.name}
                            </p>
                        </Popup>
                        <Image className={styles.img} src={imgLogo} alt=""></Image>
                    </Marker>
                ))}
            </MapContainer>

        </div >
    )
}

export default MapBlock