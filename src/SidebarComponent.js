// import { useState } from "react";
// import React from 'react';

// const Sidebar = ({ markers, onSelectMarker }) => {
//     return (<div style={{
//         width: "20%",
//         height: "100vh",
//         overflowY: "scroll",
//         position: "absolute",
//         right: 0,
//         top: 0,
//         backgroundColor: "white",
//         zIndex: 1000  // 确保z-index足够高
//       }}>
//         {markers.map(marker => (
//           <div key={marker.id} onClick={() => onSelectMarker(marker.id)} style={{ padding: "10px", borderBottom: "1px solid #ccc", cursor: "pointer" }}>
//             {marker.name}
//             <div style={{
//               color: 'grey',
//               fontSize: '12px'
//             }}>
//               {marker.address}
//             </div>
//           </div>
//         ))}
//       </div>);
//   };

// export default Sidebar;

// Sidebar.jsx
import React from 'react';

const Sidebar = ({ markers, onSelectMarker }) => {
  return (
    <div style={{ width: "20%", height: "100vh", overflowY: "scroll", position: "absolute", right: 0, top: 0, backgroundColor: "white", zIndex: 1000 }}>
      {markers.map(marker => (
        <div key={marker.id} onClick={() => onSelectMarker(marker.id)} style={{ padding: "10px", borderBottom: "1px solid #ccc", cursor: "pointer" }}>
          <div style={{
            fontsize: '10px'
          }}>
          {marker.id}
          </div>
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
  );
};

export default Sidebar;