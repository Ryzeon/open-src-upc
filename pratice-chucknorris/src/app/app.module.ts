import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {HttpClientModule} from "@angular/common/http";
import {ToolBarComponent} from './public/components/toolbar-content/tool-bar.component';
import {MatToolbar} from "@angular/material/toolbar";
import {NgOptimizedImage} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {FooterContentComponent} from './public/components/footer-content/footer-content.component';
import {MatAnchor, MatButton} from "@angular/material/button";
import { JokesGridComponent } from './jokes/components/jokes-grid/jokes-grid.component';
import {MatGridList, MatGridListModule, MatGridTile} from "@angular/material/grid-list";
import { JokeCardComponent } from './jokes/components/joke-card/joke-card.component';
import {
  MatCard,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardImage, MatCardModule,
  MatCardTitleGroup
} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    FooterContentComponent,
    JokesGridComponent,
    JokeCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbar,
    NgOptimizedImage,
    MatIcon,
    MatAnchor,
    MatGridListModule,
    MatCardModule,
    MatButton,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
