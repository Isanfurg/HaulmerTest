import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  {path: '',redirectTo: '/top',pathMatch:'full'},
  {path: 'top',component:ArticlesComponent},
  {path: '**',redirectTo:'404',pathMatch: 'full'},
  {path: '404', component: Error404Component},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
