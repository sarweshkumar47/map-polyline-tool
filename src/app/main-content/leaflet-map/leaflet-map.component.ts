import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { STREETMAP_TILE_LAYER, STREETMAP_ATTRIBUTION, ACTION } from 'src/app/shared/app-constants';
import { SATALLITEMAP_TILE_LAYER, SATALLITEMAP_ATTRIBUTION } from 'src/app/shared/app-constants';
import { MapActionEvent } from 'src/app/shared/map-action-event.model';


import { MapDataService } from '../../shared/map-data.service';

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.css']
})
export class LeafletMapComponent implements OnInit, AfterViewInit {

  private leafletMap: L.Map;
  private mapCenter: L.LatLngExpression = [18.51, 80.81];
  private defaultZoom = 4;
  private minZoom = 2;
  private maxZoom = 21;
  private maxNativeZoom = 19;
  private zoomControl = true;
  private polylineOptions = { color: 'red', smoothFactor: 1, weight: 4 };
  private polyline: L.Polyline;
  private dataPoints: L.LatLng[] = [];
  private dataMarkers: L.Marker[] = [];

  private baseLayers = {
    'Street': L.tileLayer(STREETMAP_TILE_LAYER,
      {
        attribution: STREETMAP_ATTRIBUTION,
        maxNativeZoom: this.maxNativeZoom,
        maxZoom: this.maxZoom
      }),
    'Satellite': L.tileLayer(SATALLITEMAP_TILE_LAYER,
      {
        attribution: SATALLITEMAP_ATTRIBUTION,
        maxNativeZoom: this.maxNativeZoom,
        maxZoom: this.maxZoom
      })
  };

  constructor(private mapDataService: MapDataService) { }

  public ngOnInit(): void { }

  public ngAfterViewInit(): void {
    this.initMap();
    this.setupMapLayers(this.leafletMap);
    this.initMapEvents();
    this.subscribeToMapEvents();
  }

  private initMap(): void {
    this.leafletMap = L.map('leaflet-map', {
      center: this.mapCenter,
      minZoom: this.minZoom,
      zoom: this.defaultZoom,
      zoomControl: this.zoomControl
    });
  }

  private setupMapLayers(map: L.Map) {
    L.control.layers(this.baseLayers, null, { collapsed: true }).addTo(map);
    this.baseLayers["Street"].addTo(map);
  }

  private initMapEvents() {
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

  private subscribeToMapEvents() {
    this.mapDataService.getMapActionEmitter().subscribe(mapActionEvent => {
      this.drawOrUpdateObjectsOnMap(mapActionEvent);
    });
  }

  private drawOrUpdateObjectsOnMap(mapActionEvent: MapActionEvent) {

    switch (mapActionEvent.action) {

      case ACTION.ADD:
        var marker = L.marker(mapActionEvent.latlng).addTo(this.leafletMap);
        this.dataMarkers.push(marker);

        this.dataPoints.push(mapActionEvent.latlng);
        if (this.dataPoints.length == 2) {
          this.polyline = L.polyline(this.dataPoints, this.polylineOptions).addTo(this.leafletMap);
        }
        else if (this.dataPoints.length > 2) {
          this.polyline.addLatLng(mapActionEvent.latlng);
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

      case ACTION.UPDATE_STYLE:

        this.polyline.setStyle({
          color: mapActionEvent.style.color,
          opacity: mapActionEvent.style.opacity,
          weight: mapActionEvent.style.weight
        });
        this.polylineOptions.color = mapActionEvent.style.color;
        this.polylineOptions.smoothFactor = mapActionEvent.style.opacity;
        this.polylineOptions.weight = mapActionEvent.style.weight;

        break;
    }
  }
}
