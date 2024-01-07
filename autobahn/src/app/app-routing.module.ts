import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoadsComponent } from './view/roads/roads.component';

const routes: Routes = [
  {
    path: '',
    runGuardsAndResolvers: 'always',
    children: [
      {
        path: '',
        component: RoadsComponent
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
