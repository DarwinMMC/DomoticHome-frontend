import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  /** Options config gridster2 */
  options: GridsterConfig = {
    gridType: 'verticalFixed',
    displayGrid: 'onDrag&Resize',
    pushItems: true,
    draggable: {
      enabled: true,
    },
    resizable: {
      enabled: true,
    },
    margin: 16,
    minCols: 12,
    maxCols: 12,
    allowMultiLayer: true,
    defaultLayerIndex: 1,
    maxLayerIndex: 2,
    baseLayerIndex: 1,
  };

  dashboard!:Array<GridsterItem>;

  constructor() {
    this.dashboard = [
      {cols: 2, rows: 1, y: 0, x: 0},
      {cols: 2, rows: 2, y: 0, x: 2}
    ];
  }

  ngOnInit(): void {
  }

}
