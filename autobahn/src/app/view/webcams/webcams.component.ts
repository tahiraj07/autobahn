import { Component, OnInit, ViewChild } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subject, Subscription, debounceTime, map, tap } from 'rxjs';
import { WebcamModel } from 'src/app/models/WebcamModel';
import { MainService } from 'src/app/shared/services/main.service';
import { WebcamsDetailsComponent } from './webcams-details/webcams-details.component';

@Component({
  selector: 'app-webcams',
  templateUrl: './webcams.component.html',
  styleUrls: ['./webcams.component.scss']
})
export class WebcamsComponent implements OnInit  {
  searchText = new FormControl('');
  searching = false;
  private sub: Subscription;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  private _unsubscribe = new Subject<void>();

  dataSource = new MatTableDataSource<WebcamModel>([]);

  displayColumns = [];
  displayColumns$: Observable<string[]>;
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
    'imageurl',
    'linkurl',
    'startTimestamp'
  ];
  mediumnDisplayColumns = ['extent', 'identifier'];
  smallDisplayColumns = ['identifier'];

  webData: WebcamModel[] = [];

  constructor(
    private mainService: MainService,
    private mediaObserver: MediaObserver
  ) {
    this.searchText.valueChanges.pipe(debounceTime(1000)).subscribe((text: any) => {
      this.applyFilter(text);
    });
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
      this.getWebData(this.selectedHighway);
    });

  }

  ngOnDestroy() {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }

  applyFilter(filterString: string) {
    this.dataSource.filter = filterString;
  }

  getWebData(selected: string) {
    this.mainService.getWebcams(selected).subscribe((data) => {
      this.webData = data.roadworks;
    },
    (error) => {
      console.error('Error fetching construction sites', error);
    }
  );
  }

  trackById(index: number, item: WebcamModel) {
    return item.identifier;
  }



}
