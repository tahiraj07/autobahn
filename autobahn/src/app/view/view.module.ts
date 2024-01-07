import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RoadsComponent } from './roads/roads.component';
import { MaterialModule } from '../shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RoadsDetailsComponent } from './roads/roads-details/roads-details.component';
import { WebcamsComponent } from './webcams/webcams.component';
import { WebcamsDetailsComponent } from './webcams/webcams-details/webcams-details.component';
import { MainTableComponent } from './main-table/main-table.component';
import { ParkingComponent } from './parking/parking.component';
import { WarningComponent } from './warning/warning.component';
import { ClosureComponent } from './closure/closure.component';
import { ElectricComponent } from './electric/electric.component';
import { WarningDetailsComponent } from './warning/warning-details/warning-details.component';
import { ParkingDetailsComponent } from './parking/parking-details/parking-details.component';
import { ElectricDetailsComponent } from './electric/electric-details/electric-details.component';
import { ClosureDetailsComponent } from './closure/closure-details/closure-details.component';



@NgModule({
  declarations: [RoadsComponent, RoadsDetailsComponent, WebcamsComponent, WebcamsDetailsComponent, MainTableComponent, ParkingComponent, WarningComponent, ClosureComponent, ElectricComponent, WarningDetailsComponent, ParkingDetailsComponent, ElectricDetailsComponent, ClosureDetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule
  ],
  exports: [RoadsComponent]
})
export class ViewModule { }
