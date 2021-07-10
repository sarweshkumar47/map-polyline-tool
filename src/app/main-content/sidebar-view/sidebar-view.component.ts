import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { MapDataService } from 'src/app/shared/map-data.service';
import { BehaviorSubject } from 'rxjs';
import { ACTION } from 'src/app/shared/app-constants';

@Component({
  selector: 'app-sidebar-view',
  templateUrl: './sidebar-view.component.html',
  styleUrls: ['./sidebar-view.component.css']
}) 
export class SidebarViewComponent implements OnInit {

  public observableData = new BehaviorSubject<L.Latlng[]>([]);
  public mouseCursor = 'Move cursor';
  public mapCenter;
  public zoom: number;
  public show: boolean = false;

  constructor(private mapDataService: MapDataService) { }

  public ngOnInit(): void {
    this.subscribeToMapEvents();
  }

  public clearMap() {
    this.mapDataService.clearDataPoints();
  }

  public deleteLastDataPoint() {
    this.mapDataService.deleteLastDataPoint()
  }

  public closeShape() {
    this.mapDataService.closeShape();
  }

  public toggleStyleOptions() {
    this.show = !this.show;
  }

  public closeStyleViewEvent(event) {
    this.show = false;
  }

  private subscribeToMapEvents() {
    this.mapDataService.getMapMouseOverEmitter().subscribe((event) => {
      this.mouseCursor = (event as L.MouseEvent).latlng.lat + ', ' + (event as L.MouseEvent).latlng.lng;
    });

    this.mapDataService.getMapCenterChangeEmitter().subscribe(event => {
      this.mapCenter = (event as L.latlng).lat + ', ' + (event as L.latlng).lng;
    });

    this.mapDataService.getMapZoomLevelEmitter().subscribe(event => {
      this.zoom = event as number;
    });

    this.mapDataService.getMapActionEmitter().subscribe(event => {

      switch (event.action) {
        case ACTION.ADD:
          var data = this.observableData.value.concat(event.latlng);
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
}
