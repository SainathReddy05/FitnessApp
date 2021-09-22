import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlantypesComponent } from './plantypes/plantypes.component';
import { WorkouttypesComponent } from './workouttypes/workouttypes.component';
import { MealComponent } from './meal/meal.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path:"plantypes",
    component:PlantypesComponent
  },
  {
    path:"workouttypes",
    component:WorkouttypesComponent
  },
  {
    path:"meal",
    component:MealComponent
  },
  {
    path:"profile",
    component:ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
