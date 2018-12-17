import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from "../component/alerts/user-component";
import {LocationComponent} from "../component/alerts/location-component";
import {PanelComponent} from "../component/alerts/panel-component";
import {SeverityComponent} from "../component/alerts/severity-component";
import {Error404Component} from "../errors/404-component";
import {RawComponent} from "../component/alerts/raw-component";
import {HomeComponent} from "../component/alerts/home-component";


const routes: Routes = [
  {path: 'user/:user',component:UserComponent },
  {path: 'location/:location',component:LocationComponent},
  {path: 'panel/:panel', component:PanelComponent},
  {path: 'severity/:sev', component:SeverityComponent},
  {path: 'raw', component:RawComponent},
  {path: 'home', component:HomeComponent},
  {path: '', component:HomeComponent},
  {path: '**', component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
