import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantypesComponent } from './plantypes/plantypes.component';
import { WorkouttypesComponent } from './workouttypes/workouttypes.component';
import { MealComponent } from './meal/meal.component';
import { ProfileComponent } from './profile/profile.component';




@NgModule({
  declarations: [
    AppComponent,
    PlantypesComponent,
    WorkouttypesComponent,
    MealComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
