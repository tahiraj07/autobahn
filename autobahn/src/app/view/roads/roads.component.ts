import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MediaObserver } from '@angular/flex-layout';
import { Observable, Subject, Subscription, debounceTime, map } from 'rxjs';
import { RoadsModel } from 'src/app/models/RoadsModel';
import { MainService } from 'src/app/shared/services/main.service';

@Component({
  selector: 'app-roads',
  templateUrl: './roads.component.html',
  styleUrls: ['./roads.component.scss']
})
export class RoadsComponent {
  searchText = new FormControl('');
  searching = false;
  private sub: Subscription;
  requestedShifts: RoadsModel[] = [];

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
    'description',
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

  ngOnInit() {
    this.getFormData("A1");
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

  getFormData(value: string) {
    const params = {
      Section: value
    }
  }

  trackById(index: number, item: RoadsModel) {
    return item.identifier;
  }

  onRowClicked(row: RoadsModel) {
  }

}
