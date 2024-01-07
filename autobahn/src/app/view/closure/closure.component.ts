import { Component, OnInit } from '@angular/core';
import { Subject, Subscription, tap } from 'rxjs';
import { RoadClosureModel } from 'src/app/models/ClosureModel';
import { MainService } from 'src/app/shared/services/main.service';

@Component({
  selector: 'app-closure',
  templateUrl: './closure.component.html',
  styleUrls: ['./closure.component.scss']
})
export class ClosureComponent implements OnInit {
  private sub: Subscription;

  private _unsubscribe = new Subject<void>();

  closureData: RoadClosureModel[] = [];

  constructor(private mainService: MainService) {}
  highways: string[] = [];
  selectedHighway: string = '';

  ngOnInit() {
    this.mainService
      .getHighways()
      .pipe(
        tap((highways) => {
          this.highways = highways;
          if (this.highways.length > 0) {
            this.selectedHighway = this.highways[0];
          }
        })
      )
      .subscribe(() => {
        this.getClosureData(this.selectedHighway);
      });
  }

  ngOnDestroy() {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }

  getClosureData(selected: string) {
    this.mainService.getClosure(selected).subscribe(
      (data) => {
        this.closureData = data.closure;
      },
      (error) => {
        console.error('Error fetching construction sites', error);
      }
    );
  }

  trackById(index: number, item: RoadClosureModel) {
    return item.identifier;
  }
}
