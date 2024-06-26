// MapContext.js
import { createContext, useContext } from 'react';

const MapContext = createContext(null);

export const useMapContext = () => useContext(MapContext);

export default MapContext;