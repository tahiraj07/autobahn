import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoadsComponent } from './view/roads/roads.component';
import { WebcamsComponent } from './view/webcams/webcams.component';

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
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
