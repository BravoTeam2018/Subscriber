import {Component} from '@angular/core';
import {AlertService} from "../service/alert.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'subscriberUi';
  constructor(private alertService:AlertService){

  }

  onSubmit(){
    console.log("hi");
    this.alertService.getAlerts('/server/api/v1/alerts/').subscribe();
  }

}
