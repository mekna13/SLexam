import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { ViewNewsComponent } from './view-news/view-news.component';
import { FormsModule } from '@angular/forms';
import { NewsService } from './news.service';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ViewNewsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ NewsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
