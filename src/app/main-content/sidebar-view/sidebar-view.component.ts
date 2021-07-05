import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-sidebar-view',
  templateUrl: './sidebar-view.component.html',
  styleUrls: ['./sidebar-view.component.css']
})
export class SidebarViewComponent implements OnInit {

  observableData = new BehaviorSubject<number[]>([]);
  items: Array<Number>;

  constructor() { }

  ngOnInit(): void {
  }

  clearMap() {
    throw new Error("not Implemented");
  }

  deleteLastDataPoint() {
    throw new Error("not Implemented");
  }

  closeShape() {
    throw new Error("not Implemented");
  }

  emitData() {
    console.log("Emit data")
    const items = Array(1).fill(0).map(() => Math.round(Math.random() * 100));
    const data = this.observableData.value.concat(items);
    this.observableData.next(data);
  }
}
