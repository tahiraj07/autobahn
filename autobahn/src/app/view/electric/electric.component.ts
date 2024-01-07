import { Component, OnInit } from '@angular/core';
import { Subject, Subscription, tap } from 'rxjs';
import { ChargingStationModel } from 'src/app/models/CharginStationModel';
import { MainService } from 'src/app/shared/services/main.service';

@Component({
  selector: 'app-electric',
  templateUrl: './electric.component.html',
  styleUrls: ['./electric.component.scss']
})
export class ElectricComponent implements OnInit {
  private sub: Subscription;

  private _unsubscribe = new Subject<void>();

  chargingData: ChargingStationModel[] = [];

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
        this.getElectricData(this.selectedHighway);
      });
  }

  ngOnDestroy() {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }

  getElectricData(selected: string) {
    this.mainService.getElectric(selected).subscribe(
      (data) => {
        this.chargingData = data.electric_charging_station;
      },
      (error) => {
        console.error('Error fetching construction sites', error);
      }
    );
  }

  trackById(index: number, item: ChargingStationModel) {
    return item.identifier;
  }
}
