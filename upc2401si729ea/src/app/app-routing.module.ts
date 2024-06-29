import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {
  MentalStateExamsContentComponent
} from "./nursing/pages/mental-state-exams-content/mental-state-exams-content.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path: 'nursing/mental-state-exams', component: MentalStateExamsContentComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
