import { EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ACTION } from 'src/app/shared/app-constants';
import { MapDataService } from 'src/app/shared/map-data.service';
import { StyleOptions } from 'src/app/shared/style-options.model';

@Component({
  selector: 'app-polyline-style-options',
  templateUrl: './polyline-style-options.component.html',
  styleUrls: ['./polyline-style-options.component.css']
})
export class PolylineStyleOptionsComponent implements OnInit {

  public listOfColors: string[] = [
    '#ffffff',
    '#000105',
    '#3e6158',
    '#3f7a89',
    '#96c582',
    '#b7d5c4',
    '#bcd6e7',
    '#7c90c1',
    '#9d8594',
    '#dad0d8',
    '#4b4fce',
    '#4e0a77',
    '#a367b5',
    '#ee3e6d',
    '#d63d62',
    '#f46600',
    '#cf0500',
    '#efabbd',
    '#8e0622',
    '#f0b89a',
    '#f0ca68',
    '#62382f',
    '#c97545',
    '#c1800b'
  ];

  @Input() color: string;
  @Output() styleViewCloseEvent = new EventEmitter<boolean>();
  public selectedColor: string;
  public strokeOpacitySliderValue;
  public strokeWeightSliderValue;
  public strokeOpacitySliderSetValue;
  public strokeWeightSliderSetValue;
  private userSetColor;

  constructor(private mapDataService: MapDataService) { }

  public ngOnInit(): void {
    this.subscribeToEvents();
  }

  private subscribeToEvents() {
    this.mapDataService.getStyleOptionsEventEmitter().subscribe(options => {
      this.color = options.color;
      this.selectedColor = options.color;
      this.userSetColor = options.color;
      this.strokeOpacitySliderSetValue = options.opacity;
      this.strokeWeightSliderSetValue = options.weight;
      this.strokeOpacitySliderValue = options.opacity;
      this.strokeWeightSliderValue = options.weight;
    });
  }

  public closeStyleOptionsView() {
    this.styleViewCloseEvent.emit(true);
    let style: StyleOptions = {
      'color': this.userSetColor,
      'opacity': this.strokeOpacitySliderSetValue,
      'weight': this.strokeWeightSliderSetValue
    };
    this.mapDataService.saveStyles(style);
  }

  public changeColor(color: string): void {
    this.color = color;
  }

  public updateStrokeOpacity(event) {
    this.strokeOpacitySliderValue = event.value;
  }

  public updateStrokeWeight(event) {
    this.strokeWeightSliderValue = event.value;
  }

  public saveStyleOptions() {
    this.selectedColor = this.color;
    this.userSetColor = this.color;
    this.strokeOpacitySliderSetValue = this.strokeOpacitySliderValue;
    this.strokeWeightSliderSetValue = this.strokeWeightSliderValue;

    let style: StyleOptions = {
      'color': this.color,
      'opacity': this.strokeOpacitySliderSetValue,
      'weight': this.strokeWeightSliderSetValue
    };

    this.mapDataService.updateStyles({
      'action': ACTION.UPDATE_STYLE,
      'style': style
    });

    this.mapDataService.saveStyles(style);
    this.styleViewCloseEvent.emit(true);
  }
}
