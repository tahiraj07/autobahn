import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SideNavComponent } from './side-nav.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [SideNavComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [SideNavComponent]
})
export class NavbarModule { }
