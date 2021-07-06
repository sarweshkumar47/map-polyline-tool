import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { STREETMAP_TILE_LAYER, STREETMAP_ATTRIBUTION, ACTION } from 'src/app/shared/app-constants';
import { SATALLITEMAP_TILE_LAYER, SATALLITEMAP_ATTRIBUTION } from 'src/app/shared/app-constants';
import { DataPoint } from 'src/app/shared/data-point.model';
import { MapDataService } from '../../shared/map-data.service';

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.css']
})
export class LeafletMapComponent implements OnInit, AfterViewInit, OnDestroy {

  private leafletMap: L.Map;

  private mapCenter: L.LatLngExpression = [ 30.73, 76.78 ];
  private defaultZoom = 5;
  private minZoom = 2;
  private maxZoom = 20;
  private zoomControl = true;
  private polylineOptions = { color: 'red', weight: 4, smoothFactor: 1 };
  private polyline: L.Polyline;
  private dataPoints: L.LatLng[] = [];
  private dataMarkers: L.Marker[] = [];
  
  baseLayers = {
    'Street': L.tileLayer(STREETMAP_TILE_LAYER, { attribution: STREETMAP_ATTRIBUTION }),
    'Satellite': L.tileLayer(SATALLITEMAP_TILE_LAYER, { attribution: SATALLITEMAP_ATTRIBUTION })
  };

  constructor(private mapDataService: MapDataService) { }
  
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
    this.initMapEvents();
    this.subscribeToMapEvents();
  }

  subscribeToMapEvents() {
    this.mapDataService.getMapDataPointEmitter().subscribe(dataPoint => {
      this.drawOrUpdateObjectsOnMap(dataPoint);
    });
  }

  drawOrUpdateObjectsOnMap(dataPoint: DataPoint) {

    switch(dataPoint.action) {
      case ACTION.ADD:
        var marker = L.marker(dataPoint.latlng).addTo(this.leafletMap);
        this.dataMarkers.push(marker);

        this.dataPoints.push(dataPoint.latlng);
        if (this.dataPoints.length == 2) {
          this.polyline = L.polyline(this.dataPoints, this.polylineOptions).addTo(this.leafletMap);
        }
        else if (this.dataPoints.length > 2) {
            this.polyline.addLatLng(dataPoint.latlng);
        }

        break;

      case ACTION.REMOVE:

        if (this.dataMarkers.length > 0) {
          var marker = this.dataMarkers.pop();
          this.leafletMap.removeLayer(marker);
        }

        if (this.dataPoints.length > 0) {
          this.dataPoints.pop();
          this.polyline.setLatLngs(this.dataPoints);
        }
        break;

      case ACTION.CLEAR:

        this.dataMarkers.forEach(marker => {
          this.leafletMap.removeLayer(marker);
        });

        if (this.leafletMap.hasLayer(this.polyline)) {
          this.leafletMap.removeLayer(this.polyline);
        }
        this.dataMarkers.length = 0;
        this.dataPoints.length = 0;

        break;
    }
  }

  initMapEvents() {
    this.leafletMap.on('click', (event: L.MouseEvent) => {
      this.mapDataService.onMapClick(event);
    });

    this.leafletMap.on('mousemove', (event: L.MouseEvent) => {
      this.mapDataService.onMapMouseOver(event);
    });

    this.leafletMap.on('zoom', () => {
      this.mapDataService.onMapZoomLevelChanged(this.leafletMap.getZoom());
    });

    this.leafletMap.on('move', () => {
      this.mapDataService.onMapCenterChanged(this.leafletMap.getBounds().getCenter());
    });

    this.mapDataService.onMapZoomLevelChanged(this.leafletMap.getZoom());
    this.mapDataService.onMapCenterChanged(this.leafletMap.getBounds().getCenter());
  }

  ngOnDestroy(): void {
    console.log("ng onDestroy() leaflet");
  }
}
