import { Component, OnInit } from '@angular/core';
import { Subject, Subscription, tap } from 'rxjs';
import { WarningModel } from 'src/app/models/WarningModel';
import { MainService } from 'src/app/shared/services/main.service';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.scss']
})
export class WarningComponent implements OnInit {
  private sub: Subscription;

  private _unsubscribe = new Subject<void>();

  warningData: WarningModel[] = [];

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
        this.getWarningData(this.selectedHighway);
      });
  }

  ngOnDestroy() {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }

  getWarningData(selected: string) {
    this.mainService.getWarning(selected).subscribe(
      (data) => {
        this.warningData = data.warning;
      },
      (error) => {
        console.error('Error fetching construction sites', error);
      }
    );
  }

  trackById(index: number, item: WarningModel) {
    return item.identifier;
  }
}
