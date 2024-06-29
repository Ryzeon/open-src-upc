import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ToolbarContentComponent } from './public/components/toolbar-content/toolbar-content.component';
import { HomeComponent } from './public/pages/home/home.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatCard, MatCardModule} from "@angular/material/card";
import { NewTruckRegisterComponentComponent } from './owners/pages/new-truck-register-component/new-truck-register-component.component';
import { TruckRegisterFormComponent } from './owners/components/truck-register-form/truck-register-form.component';
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatExpansionModule} from "@angular/material/expansion";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarContentComponent,
    HomeComponent,
    PageNotFoundComponent,
    NewTruckRegisterComponentComponent,
    TruckRegisterFormComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbar,
    MatButtonModule,
    MatGridList,
    MatGridTile,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
