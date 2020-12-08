import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputComponent } from './input/input.component';
import { ViewNewsComponent } from './view-news/view-news.component';

const routes: Routes = [
  { path: 'addNews', component: InputComponent },
  { path: 'news', component: ViewNewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
