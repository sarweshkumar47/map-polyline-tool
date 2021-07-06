import * as L from 'leaflet';
import { ACTION } from "./app-constants";

export interface DataPoint {
    action: ACTION;
    latlng?: L.Latlng; 
}