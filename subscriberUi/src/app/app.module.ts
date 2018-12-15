import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AlertListComponent} from "../component/alerts/alert-list-component";
import {AlertService} from "../service/alert.service";
import {LocationComponent} from "../component/alerts/location-component";
import {PanelComponent} from "../component/alerts/panel-component";
import {SeverityComponent} from "../component/alerts/severity-component";
import {UserComponent} from "../component/alerts/user-component";
import {Error404Component} from "../errors/404-component";
import {RawComponent} from "../component/alerts/raw-component";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    AlertListComponent,
    LocationComponent,
    PanelComponent,
    SeverityComponent,
    UserComponent,
    Error404Component,
    RawComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
