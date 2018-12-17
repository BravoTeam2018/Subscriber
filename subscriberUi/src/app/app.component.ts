import {Component, OnDestroy, OnInit} from '@angular/core';
import {SubscribeService} from "../service/subscribe/subscribe-service";
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'subscriberUi';
  mqttConnected:any = false;
  sub:Subscription;
  public intervallTimer = interval(10000);

  constructor(
    private subscriber:SubscribeService
  ){
  }

  mqttIsConnected(){
    try{
      this.subscriber.isSuscribed().subscribe((mqttConnected:boolean)=>{this.mqttConnected = mqttConnected});
    }catch (e) {
      this.mqttConnected = false;
    }
    let ledGreen = document.getElementById("ledGreen");
    let ledRed = document.getElementById("ledRed");
    if (this.mqttConnected){
      ledGreen.style.display = "block";
      ledRed.style.display = "none";
    } else {
      ledGreen.style.display = "none";
      ledRed.style.display = "block";
    }
  }

  ngOnInit(){
    this.sub = this.intervallTimer.subscribe(() => this.mqttIsConnected());
    this.mqttIsConnected();
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
