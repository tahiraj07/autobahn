import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RoadsComponent } from './roads/roads.component';
import { MaterialModule } from '../shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RoadsDetailsComponent } from './roads/roads-details/roads-details.component';



@NgModule({
  declarations: [RoadsComponent, RoadsDetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule
  ],
  exports: [RoadsComponent]
})
export class ViewModule { }
