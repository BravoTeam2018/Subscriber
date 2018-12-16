import {Component} from '@angular/core';
import {AlertService} from "../service/alert.service";
import {Router} from "@angular/router";
import {SubscribeService} from "../service/subscribe/subscribe-service";

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
  mqttConnected:any;

  constructor(private alertService:AlertService,
              private router:Router,
              private subscriber:SubscribeService
  ){

  }

  onSubmit(formValues:string,route:string){
    console.log(formValues);
    this.url = route.concat(formValues);
    this.router.navigate([this.url])
  }

  subscribeMqtt(){
    this.subscriber.subscribeMqtt().subscribe()
  }

  connected(){
    //this.subscriber.isSuscribed().subscribe((mqttConnected:boolean)=>{this.connected = mqttConnected})
  }
}
