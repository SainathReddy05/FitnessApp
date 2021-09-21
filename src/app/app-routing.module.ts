import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlantypesComponent } from './plantypes/plantypes.component';

const routes: Routes = [
  {
    path:"plantypes",
    component:PlantypesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
