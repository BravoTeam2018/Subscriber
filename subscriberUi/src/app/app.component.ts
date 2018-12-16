import {Component} from '@angular/core';
import {AlertService} from "../service/alert.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'subscriberUi';
  locationModel:any;
  severityModel:any;
  userModel:any;
  panelModel:any;
  url:string;
  constructor(private alertService:AlertService, private router:Router){

  }

  onSubmit(formValues:string,route:string){
    console.log(formValues);
    this.url = route.concat(formValues);
    this.router.navigate([this.url])
  }

}
