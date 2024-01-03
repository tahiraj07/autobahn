import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RoadsComponent } from './roads/roads.component';
import { MaterialModule } from '../shared/material.module';



@NgModule({
  declarations: [RoadsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [RoadsComponent]
})
export class ViewModule { }
