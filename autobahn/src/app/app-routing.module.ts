import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoadsComponent } from './view/roads/roads.component';
import { WebcamsComponent } from './view/webcams/webcams.component';
import { ClosureComponent } from './view/closure/closure.component';
import { ElectricComponent } from './view/electric/electric.component';
import { ParkingComponent } from './view/parking/parking.component';
import { WarningComponent } from './view/warning/warning.component';

const routes: Routes = [
  {
    path: '',
    runGuardsAndResolvers: 'always',
    children: [
      {
        path: '',
        component: RoadsComponent
      },
      {
        path: 'webcam',
        component: WebcamsComponent
      },
      {
        path: 'closure',
        component: ClosureComponent
      },
      {
        path: 'electric',
        component: ElectricComponent
      },
      {
        path: 'parking',
        component: ParkingComponent
      },
      {
        path: 'warning',
        component: WarningComponent
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
