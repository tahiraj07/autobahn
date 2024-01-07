import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, Observable } from 'rxjs';
import { RoadsModel } from 'src/app/models/RoadsModel';
import { RoadsDetailsComponent } from '../roads/roads-details/roads-details.component';
import { WebcamsDetailsComponent } from '../webcams/webcams-details/webcams-details.component';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss']
})
export class MainTableComponent implements OnChanges {
  @Input() data: any[];
  dataSource: MatTableDataSource<RoadsModel>;
  @ViewChild(MatSort) sort: MatSort;
  @Input() identifier: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private dialog: MatDialog
  ) {
  }
  displayColumns = [];
  normalDisplayColumns = [
    'extent',
    'identifier',
    'icon',
    'isBlocked',
    'title',
    'point',
    'display_type',
    'future',
    'subtitle',
    'startTimestamp'
  ];
  mediumnDisplayColumns = ['extent', 'identifier'];
  smallDisplayColumns = ['identifier'];

  // Observable to dynamically update columns
  displayColumns$ = new BehaviorSubject<string[]>(this.normalDisplayColumns);
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && changes['data'].currentValue) {
      this.dataSource = new MatTableDataSource<RoadsModel>(this.data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
  }

  trackById(index: number, item: RoadsModel) {
    return item.identifier;
  }

  onRowClicked(id: string) {
    switch (this.identifier) {
      case "roads":
        this.dialog.open(RoadsDetailsComponent, {
          width: '855px',
          data: id
        })
        break;

      case "web":
        this.dialog.open(WebcamsDetailsComponent, {
          width: '855px',
          data: id
        })
        break;

      default:
        break;
    }
  }

}
