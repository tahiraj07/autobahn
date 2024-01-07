import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MediaObserver } from '@angular/flex-layout';
import { Observable, Subject, Subscription, debounceTime, map, tap } from 'rxjs';
import { RoadsModel } from 'src/app/models/RoadsModel';
import { MainService } from 'src/app/shared/services/main.service';
import { RoadsDetailsComponent } from './roads-details/roads-details.component';

@Component({
  selector: 'app-roads',
  templateUrl: './roads.component.html',
  styleUrls: ['./roads.component.scss']
})
export class RoadsComponent implements OnInit  {
  private sub: Subscription;
  roadsData: RoadsModel[] = [];
  roadDataSource: MatTableDataSource<RoadsModel>;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  private _unsubscribe = new Subject<void>();

  constructor(
    private mainService: MainService,
    private mediaObserver: MediaObserver
  ) {
  }
  values: any;
  highways: string[] = [];
  selectedHighway: string = '';

  ngOnInit() {
    this.mainService.getHighways().pipe(
      tap((highways) => {
        this.highways = highways;
        if (this.highways.length > 0) {
          this.selectedHighway = this.highways[0];
        }
      })
    ).subscribe(() => {
      this.getRoadsData(this.selectedHighway);
      console.log(this.selectedHighway);
    });

  }

  ngOnDestroy() {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }

  getRoadsData(selected: string) {
    this.mainService.getRoadworks(selected).subscribe((data) => {
        this.roadsData = data.roadworks;
      },
      (error) => {
        console.error('Error fetching construction sites', error);
      }
    );
  }

  trackById(index: number, item: RoadsModel) {
    return item.identifier;
  }


}
