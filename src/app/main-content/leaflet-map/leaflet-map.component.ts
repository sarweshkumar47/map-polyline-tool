import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { STREETMAP_TILE_LAYER, STREETMAP_ATTRIBUTION } from 'src/app/shared/app-constants';
import { SATALLITEMAP_TILE_LAYER, SATALLITEMAP_ATTRIBUTION } from 'src/app/shared/app-constants';

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.css']
})
export class LeafletMapComponent implements OnInit, AfterViewInit {

  private leafletMap: L.Map;

  private mapCenter: L.LatLngExpression = [ 30.73, 76.78 ];
  private defaultZoom = 5;
  private minZoom = 1;
  private maxZoom = 20;

  private zoomControl = true;

  baseLayers = {
    'Street': L.tileLayer(STREETMAP_TILE_LAYER, { attribution: STREETMAP_ATTRIBUTION }),
    'Satellite': L.tileLayer(SATALLITEMAP_TILE_LAYER, { attribution: SATALLITEMAP_ATTRIBUTION })
  };

  constructor() { }
  

  ngOnInit(): void {
    
  }

  private initMap(): void {
    this.leafletMap = L.map('leaflet-map', {
      center: this.mapCenter,
      minZoom: this.minZoom,
      zoom: this.defaultZoom,
      maxZoom: this.maxZoom,
      zoomControl: this.zoomControl
    });
  }

  setupMapLayers(map: L.Map) {
    L.control.layers(this.baseLayers, null, {collapsed: true}).addTo(map);
    this.baseLayers["Satellite"].addTo(map);
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.setupMapLayers(this.leafletMap);
  }

}
