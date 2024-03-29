import { Component, OnInit } from '@angular/core';
import { Subject, Subscription, tap } from 'rxjs';
import { ParkingModel } from 'src/app/models/ParkingModel';
import { MainService } from 'src/app/shared/services/main.service';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.scss'],
})
export class ParkingComponent implements OnInit {
  private sub: Subscription;

  private _unsubscribe = new Subject<void>();

  parkingData: ParkingModel[] = [];

  constructor(private mainService: MainService) {}
  values: any;
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
        this.getParkingData(this.selectedHighway);
      });
  }

  ngOnDestroy() {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }

  getParkingData(selected: string) {
    this.mainService.getParking(selected).subscribe(
      (data) => {
        this.parkingData = data.parking_lorry;
      },
      (error) => {
        console.error('Error fetching construction sites', error);
      }
    );
  }

  trackById(index: number, item: ParkingModel) {
    return item.identifier;
  }
}
