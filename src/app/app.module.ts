import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticlesComponent } from './articles/articles.component';
import { MatButtonModule } from '@angular/material/button';
import { Error404Component } from './error404/error404.component';
import { TopComponent } from './top/top.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { CardArticleComponent } from './articles/card-article/card-article.component'
@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    Error404Component,
    TopComponent,
    CardArticleComponent
  ],
  imports: [
    MatGridListModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
