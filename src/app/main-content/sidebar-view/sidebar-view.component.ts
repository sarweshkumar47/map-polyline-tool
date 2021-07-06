import { Component, OnDestroy, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { MapDataService } from 'src/app/shared/map-data.service';
import { BehaviorSubject } from 'rxjs';
import { ACTION } from 'src/app/shared/app-constants';

@Component({
  selector: 'app-sidebar-view',
  templateUrl: './sidebar-view.component.html',
  styleUrls: ['./sidebar-view.component.css']
})
export class SidebarViewComponent implements OnInit, OnDestroy {

  observableData = new BehaviorSubject<L.Latlng[]>([]);
  mouseCursor = 'Move cursor';
  mapCenter;
  zoom: number;
  observableMapData;

  constructor(private mapDataService: MapDataService) { }

  ngOnInit(): void {
    this.subscribeToMapEvents();
  }

  clearMap() {
    this.mapDataService.clearDataPoints();
  }

  deleteLastDataPoint() {
    this.mapDataService.deleteLastDataPoint()
  }

  closeShape() {
    this.mapDataService.closeShape();
  }

  subscribeToMapEvents() {
    this.mapDataService.getMapMouseOverEmitter().subscribe((event)  => {
      this.mouseCursor = (event as L.MouseEvent).latlng.lat + ', ' + (event as L.MouseEvent).latlng.lng;
    });

    this.mapDataService.getMapCenterChangeEmitter().subscribe(event => {
      this.mapCenter = (event as L.latlng).lat + ', ' + (event as L.latlng).lng;
    });

    this.mapDataService.getMapZoomLevelEmitter().subscribe(event => {
      this.zoom = event as number;
    });

    this.mapDataService.getMapDataPointEmitter().subscribe(dataPoint => {
      
      switch(dataPoint.action) {
        case ACTION.ADD:
          var data = this.observableData.value.concat(dataPoint.latlng);
          this.observableData.next(data);
          break;

        case ACTION.REMOVE:
          var data = this.observableData.value.slice(0, -1);
          this.observableData.next(data);
          break;
          
        case ACTION.CLEAR:
          var data = this.observableData.value.slice(0, 0);
          this.observableData.next(data);
      }
    });
  }

  ngOnDestroy(): void {
    console.log("ng onDestroy() leaflet");
  }
}
