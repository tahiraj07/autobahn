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
  searchText = new FormControl('');
  searching = false;
  private sub: Subscription;
  roadsData: RoadsModel[] = [];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  private _unsubscribe = new Subject<void>();

  dataSource = new MatTableDataSource<RoadsModel>([]);

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
    'startTimestamp'
  ];
  mediumnDisplayColumns = ['extent', 'identifier'];
  smallDisplayColumns = ['identifier'];

  constructor(
    private mainService: MainService,
    private mediaObserver: MediaObserver,
    private dialog: MatDialog
  ) {
    this.searchText.valueChanges.pipe(debounceTime(1000)).subscribe((text: any) => {
      this.applyFilter(text);
    });
  }
  carType: string;
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

    this.displayColumns$ = this.mediaObserver.asObservable().pipe(
      map(() => {
        if (this.mediaObserver.isActive('lt-sm')) {
          return this.smallDisplayColumns;
        } else if (this.mediaObserver.isActive('lt-lg')) {
          return this.mediumnDisplayColumns;
        } else {
          return this.normalDisplayColumns;
        }
      })
    );
  }

  ngOnDestroy() {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }

  applyFilter(filterString: string) {
    this.dataSource.filter = filterString;
  }

  getRoadsData(selected: string) {
    this.mainService.getRoadworks(selected).subscribe((data) => {
        this.roadsData = data.roadworks;
        this.dataSource = new MatTableDataSource<RoadsModel>(data.roadworks);
        this.dataSource.paginator = this.paginator;
        this.sort.sort({ id: 'title', start: 'asc' } as MatSortable);
        this.dataSource.sort = this.sort;
        this.searchText.setValue('');
      },
      (error) => {
        console.error('Error fetching construction sites', error);
      }
    );
  }

  trackById(index: number, item: RoadsModel) {
    return item.identifier;
  }

  onRowClicked(identifier: string) {
    this.dialog.open(RoadsDetailsComponent, {
      width: '855px',
      data: identifier
    }).afterClosed().subscribe(differences => {
      // if (differences) {
      // }
    });
  }


}
