import { Component, OnInit } from '@angular/core';
import { MapDataService } from 'src/app/shared/map-data.service';

@Component({
  selector: 'app-export-data',
  templateUrl: './export-data.component.html',
  styleUrls: ['./export-data.component.css']
})
export class ExportDataComponent implements OnInit {

  constructor(private mapDataService: MapDataService) { }

  ngOnInit(): void {
  }

  exportAsJSON(event) {
    this.mapDataService.exportDataAsJSON();
  }

  exportAsCSV(event) {
    this.mapDataService.exportDataAsCSV();
  }

}
