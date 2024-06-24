import logo from './logo.svg';
import './App.css';
import MapComponent from './mapComponent';
import { useState } from 'react';

const App = () => {
  const [markers, setMarkers] = useState([
    { id: 1, icontype: "type1", position: [31.1962, 121.3086], name: "上海国家会展中心（四叶草）", address: "上海市青浦区崧泽大道333号", traffic: "" },
    { id: 2, icontype: "type1", position: [31.1874, 121.4968], name: "上海世博展览馆", address: "上海市浦东新区周家渡国展路1099号", traffic: "" },
    { id: 3, icontype: "type1", position: [31.2114, 121.5606], name: "上海新国际博览中心", address: "上海市浦东新区龙阳路2345号", traffic: "" },
    { id: 4, icontype: "type1", position: [31.2316, 121.4598], name: "上海展览中心", address: "上海市静安区延安中路1000号", traffic: "" },
    { id: 5, icontype: "type2", position: [31.3425, 121.4345], name: "智慧湾科创园", address: "上海市宝山区蕰川路6号", traffic: "" },
    { id: 6, icontype: "type2", position: [31.3039, 121.4936], name: "宝丰联大酒店", address: "上海市虹口区逸仙路270号", traffic: "" },
    { id: 7, icontype: "type2", position: [31.1744, 121.4381], name: "36Space", address: "上海市徐汇区漕宝路36号E座", traffic: "" },
    { id: 8, icontype: "type2", position: [31.1627, 121.3798], name: "诺宝中心酒店（闵行）", address: "上海市闵行区漕宝路1688号", traffic: "" }
    // 更多标记点
  ]);

  const [activeMarker, setActiveMarker] = useState(null);

  const handleMarkerClick = (marker) => {
    // console.log("Marker clicked:", marker);
  };

  const Sidebar = ({ markers, onSelectMarker }) => {
    return
  };

  const onSelectMarker = (markerId) => {
    setActiveMarker(markerId);
    // 这里可以加入控制地图中心的逻辑
  };

  const map =
    <div id="map" style={{ position: "relative" }}>
      <div style={{
        width: "20%",
        height: "100vh",
        overflowY: "scroll",
        position: "absolute",
        right: 0,
        top: 0,
        backgroundColor: "white",
        zIndex: 1000  // 确保z-index足够高
      }}>
        {markers.map(marker => (
          <div key={marker.id} onClick={() => setActiveMarker(marker.id)} style={{ padding: "10px", borderBottom: "1px solid #ccc", cursor: "pointer" }}>
            {marker.name}
            <div style={{
              color: 'grey',
              fontSize: '12px'
            }}>
              {marker.address}
            </div>
          </div>
        ))}
      </div>
      <MapComponent markers={markers} onmarkerClick={handleMarkerClick} />
    </div>

  return map;
};

export default App;
