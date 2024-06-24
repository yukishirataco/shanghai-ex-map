import logo from './logo.svg';
import './App.css';
import MapComponent from './mapComponent';
import { useState } from'react';

const App = () => {
  const [markers, setMarkers] = useState([
    { id: 1, position: [31.1962, 121.3086], name: "上海国家会展中心" , address: "上海市青浦区崧泽大道333号" },
    { id: 2, position: [31.1873, 121.4968], name: "上海世博展览馆", address: "上海市浦东新区周家渡国展路1099号" },
    { id: 3, position: [31.2156, 121.5713], name: "上海新国际博览中心", address: "上海市浦东新区龙阳路2345号"}
    // 更多标记点
  ]);

  const handleMarkerClick = (marker) => {
    console.log("Marker clicked:", marker);
  };

  const map = 
  <div id="map">
      <MapComponent markers={markers} onmarkerClick={handleMarkerClick} />
  </div>

  return map;
};

export default App;
