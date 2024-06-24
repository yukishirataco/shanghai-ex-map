import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const TianDituURL= "http://t0.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=355ddd26ddb65e52f68fd2f665edd404";

const bounds = [
    [30.40, 120.85], // Southwest coordinates
    [31.53, 122.12]  // Northeast coordinates
  ];

var customIcon = new L.Icon({
    iconUrl: 'marker_icon.png',
    // shadowUrl: 'marker_icon.png',
    iconSize: [48, 48], // 图标的大小
    iconAnchor: [12, 41], // 图标的锚点（图标底部中心点）
    popupAnchor: [1, -34] // 弹出信息窗口的锚点
});

const MapComponent = ({markers, onmarkerClick}) => {
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
                <Marker key={marker.id} position={marker.position} icon={customIcon} eventHandlers={{ click: () => onmarkerClick(marker) }}>
                <Popup>
                    <strong>{marker.name}</strong>
                    <br></br>
                    地址: {marker.address}
                </Popup>
                </Marker>
            ))}
        </MapContainer>

      {/* 标题 */}
      <div style={{
        position: 'absolute',
        top: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        color: 'black',
        fontSize: '24px'
      }}>
        上海漫展地图
      </div>

      {/* 版权信息 */}
      <div style={{
        position: 'absolute',
        bottom: '10px',
        left: '1%',
        // transform: 'translateX(-50%)',
        zIndex: 1000,
        color: 'grey',
        fontSize: '12px'
      }}>
        © 2024 Yukino Shiratama, 地图矢量图来自天地图
      </div>
        </div>
    )
}

export default MapComponent;