import * as L from 'leaflet';
import { ACTION } from "./app-constants";
import { StyleOptions } from './style-options.model';

export interface MapActionEvent {
    action: ACTION;
    latlng?: L.Latlng;
    style?: StyleOptions;
}