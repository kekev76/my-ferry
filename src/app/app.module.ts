import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FerryComponent } from './ferry/ferry-container/ferry-show/ferry.component';
import { FerryContainerComponent } from './ferry/ferry-container/ferry-container.component';
import { FerryActionComponent } from './ferry/ferry-container/ferry-action/ferry-action.component';


@NgModule({
  declarations: [
    AppComponent,
    FerryComponent,
    FerryContainerComponent,
    FerryActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
