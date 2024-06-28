import logo from './logo.svg';
import './App.css';
import MapComponent from './mapComponent';
import { useState } from 'react';
import Sidebar from './SidebarComponent'

const App = () => {
  const [markers, setMarkers] = useState([
    { id: 1, icontype: "type1", position: [31.1962, 121.3086], name: "上海国家会展中心（四叶草）", address: "上海市青浦区崧泽大道333号", traffic: "" },
    { id: 2, icontype: "type1", position: [31.1874, 121.4968], name: "上海世博展览馆", address: "上海市浦东新区周家渡国展路1099号", traffic: "" },
    { id: 3, icontype: "type1", position: [31.2114, 121.5606], name: "上海新国际博览中心", address: "上海市浦东新区龙阳路2345号", traffic: "" },
    { id: 4, icontype: "type1", position: [31.2316, 121.4598], name: "上海展览中心", address: "上海市静安区延安中路1000号", traffic: "" },
    { id: 5, icontype: "type2", position: [31.3425, 121.4345], name: "智慧湾科创园", address: "上海市宝山区蕰川路6号", traffic: "" },
    { id: 6, icontype: "type2", position: [31.3039, 121.4936], name: "宝丰联大酒店", address: "上海市虹口区逸仙路270号", traffic: "" },
    { id: 7, icontype: "type2", position: [31.1744, 121.4381], name: "36Space", address: "上海市徐汇区漕宝路36号E座", traffic: "" },
    { id: 8, icontype: "type2", position: [31.1627, 121.3798], name: "诺宝中心酒店（闵行）", address: "上海市闵行区漕宝路1688号", traffic: "" },
    { id: 9, icontype: "type2", position: [31.2080, 121.4073], name: "上海世贸展馆", address: "中国上海市长宁区兴义路99号", traffic: undefined}
    // 更多标记点
  ]);

  const [activeMarker, setActiveMarker] = useState(null);

  const handleMarkerClick = (marker) => {
    // console.log("Marker clicked:", marker);
  };

  const onSelectMarker = (markerId) => {
    setActiveMarker(markerId);
    // 这里可以加入控制地图中心的逻辑
  };

  const map =
    <div id="map" style={{ position: "relative" }}>
      <Sidebar markers={markers} onSelectMarker={onSelectMarker} />
      <MapComponent markers={markers} onmarkerClick={handleMarkerClick} />
      {/* 标题 */}
      <div style={{
        position: 'absolute',
        top: '1%',
        left: '40%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        color: 'black',
        fontSize: '24px'
      }}>
        上海综合性漫展&Only展场馆地图
      </div>
      {/* 版本号 */}
      <div style={{
        position: 'absolute',
        top: '5%',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        color: 'black',
        fontSize: '12px'
      }}>
        ver. 20240624
      </div>

      {/* 版权信息 */}
      <div style={{
        position: 'absolute',
        bottom: '1%',
        left: '1%',
        // transform: 'translateX(-50%)',
        zIndex: 1000,
        color: 'grey',
        fontSize: '12px'
      }}>
        © 2024 雪野子, 底图矢量图来自<a href="https://www.tianditu.gov.cn/">天地图</a>
        <br />
        Powered by heterochromia nekomusume.
      </div>
    </div>

  return map;
};

export default App;
