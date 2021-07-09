import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import * as L from 'leaflet';
import { saveAs } from 'file-saver';
import { DataPoint } from './data-point.model';
import {ACTION} from './app-constants';

@Injectable({
  providedIn: 'root'
})
export class MapDataService {
  
  private isPolyline: boolean = true;
  private onMapCenterChangeEmitter = new Subject();
  private onMapMouseOverEmitter = new Subject();
  private onMapZoomLevelEmitter = new Subject();
  private mapDataPoints: L.Latlng[] = [];
  private mapDataPointEmitter = new Subject<DataPoint>();

  constructor() {}

  public onMapClick(event) {
    if (!this.isPolyline) {
      this.deleteLastDataPoint();
    }
    this.addDataPoint(event)
    this.isPolyline = true;
  }

  public onMapMouseOver(event) {
    this.onMapMouseOverEmitter.next(event)
  }

  public onMapZoomLevelChanged(zoom: number) {
    this.onMapZoomLevelEmitter.next(zoom);
  }

  public onMapCenterChanged(center: L.LatLng) {
    this.onMapCenterChangeEmitter.next(center);
  }

  public getMapMouseOverEmitter() {
    return this.onMapMouseOverEmitter;
  }

  public getMapZoomLevelEmitter() {
    return this.onMapZoomLevelEmitter;
  }

  public getMapCenterChangeEmitter() {
    return this.onMapCenterChangeEmitter;
  }

  public getDataPoints() {
    return this.mapDataPoints;
  }

  public deleteLastDataPoint() {
    this.mapDataPoints.pop();
    this.mapDataPointEmitter.next({ action: ACTION.REMOVE })
  }

  public clearDataPoints() {
    this.mapDataPoints.length = 0;
    this.mapDataPointEmitter.next({ action: ACTION.CLEAR })
  }

  public closeShape() {
    this.convertPolylineToPolygon();
    this.isPolyline = false;
  }

  private addDataPoint(event: L.MouseEvent) {
    var item: L.Latlng = event.latlng;
    this.mapDataPoints.push(item);
    this.mapDataPointEmitter.next({ action: ACTION.ADD, latlng: item });
  }

  private convertPolylineToPolygon() {
    var first = this.mapDataPoints[0];
    this.mapDataPoints.push(first);
    this.mapDataPointEmitter.next({ action: ACTION.ADD, latlng: first });
  }

  public getMapDataPointEmitter() {
    return this.mapDataPointEmitter;
  }

  public exportDataAsCSV() {
    const blob = new Blob([(this.convertToCSV(this.getDataPoints()))], {type : 'application/csv'});
    saveAs(blob, 'data.csv');
  }

  public exportDataAsJSON() {
    const blob = new Blob([(this.convertToJSON(this.getDataPoints()))], {type : 'application/json'});
    saveAs(blob, 'data.json');
  }

  private convertToCSV(dataArray) {
    const array = [Object.keys(dataArray[0])].concat(dataArray);
    return array.map(row => {
      return Object.values(row);
    }).join('\n');
  }

  private convertToJSON(dataArray) {
    return JSON.stringify(dataArray);
  }
}
 