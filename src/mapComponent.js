import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const TianDituURL = "http://t0.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=355ddd26ddb65e52f68fd2f665edd404";

const bounds = [
  [30.40, 120.85], // Southwest coordinates
  [31.53, 122.12]  // Northeast coordinates
];

// 定义两种类型的图标
const iconUrls = {
  type1: 'marker_icon.png',
  type2: 'marker_pin.png'
};

const icons = {
  type1: new L.Icon({
    iconUrl: iconUrls.type1,
    iconSize: [48, 48],
    iconAnchor: [12, 41],
    popupAnchor: [12, -40]
  }),
  type2: new L.Icon({
    iconUrl: iconUrls.type2,
    iconSize: [48, 48],
    iconAnchor: [12, 41],
    popupAnchor: [12, -40]
  })
};

const MapComponent = ({ markers, onmarkerClick }) => {
  console.log("Markers:", markers);
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <MapContainer
        center={[31.2304, 121.4737]}
        zoom={11}
        style={{ height: "100vh", width: "100%" }}
        maxBounds={bounds}
        maxBoundsViscosity={0.0}
        minZoom={10}
        maxZoom={18}
      >
        <TileLayer url={TianDituURL} />
        {markers.map((marker) => (
          <Marker key={marker.id} position={marker.position} icon={icons[marker.icontype]} eventHandlers={{ click: () => onmarkerClick(marker) }}>
            <Popup>
              <strong>{marker.name}</strong>
              <br></br>
              地址: {marker.address}
              <br />
              交通方式: {marker.traffic}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default MapComponent;