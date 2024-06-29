import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import { HomeComponent } from './public/pages/home/home.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { LanguageSwitcherComponent } from './public/components/language-switcher/language-switcher.component';
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import { ToolbarContentComponent } from './public/components/toolbar-content/toolbar-content.component';
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor} from "@angular/material/button";
import { MentalStateExamsContentComponent } from './nursing/pages/mental-state-exams-content/mental-state-exams-content.component';
import { MentalExamCardComponent } from './nursing/components/mental-exam-card/mental-exam-card.component';
import {MatCardModule} from "@angular/material/card";
import {MatGridList, MatGridListModule} from "@angular/material/grid-list";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    LanguageSwitcherComponent,
    ToolbarContentComponent,
    MentalStateExamsContentComponent,
    MentalExamCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatButtonToggleGroup,
    MatButtonToggle,
    MatToolbar,
    MatAnchor,
    MatCardModule,
    MatGridListModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
