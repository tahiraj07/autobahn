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



@NgModule({
  declarations: [RoadsComponent, RoadsDetailsComponent, WebcamsComponent, WebcamsDetailsComponent, MainTableComponent, ParkingComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule
  ],
  exports: [RoadsComponent]
})
export class ViewModule { }
