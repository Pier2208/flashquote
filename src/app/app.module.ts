import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlashquoteModule } from './flashquote/flashquote.module';

import { FlashquoteComponent } from './pages/flashquote/flashquote.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FlashquoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlashquoteModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
