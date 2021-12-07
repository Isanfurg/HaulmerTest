import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticlesComponent } from './articles/articles.component';
import { MatButtonModule } from '@angular/material/button';
import { Error404Component } from './error404/error404.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { CardArticleComponent } from './articles/card-article/card-article.component'
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule} from '@angular/material/icon';
import { MatProgressSpinner, MatProgressSpinnerModule, MatSpinner } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    Error404Component,

    CardArticleComponent
  ],
  imports: [
    MatListModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatPaginatorModule,
    MatGridListModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
