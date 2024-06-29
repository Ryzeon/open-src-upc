import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {
  NewTruckRegisterComponentComponent
} from "./owners/pages/new-truck-register-component/new-truck-register-component.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'owners/food-trucks/new', component: NewTruckRegisterComponentComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
