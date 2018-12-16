import {Component,OnInit} from "@angular/core";
import {AlertService} from "../../service/alert.service";
import {IAlert} from "../../model/alert-model";

@Component({
  selector : 'alert-lisr',
  template : `
    <div>
      <div *ngFor="let alert of alerts">
        <p>{{alert.severity}}</p> 
        <p *ngFor="let currentEvent of alert.currentEvent"> 
          {{currentEvent.panelId}}
        </p>
      </div>
    </div>
    \`,
    })
  `
})

export class AlertListComponent implements OnInit{
  alerts:IAlert[];
  constructor(private alertService : AlertService){
  }

  ngOnInit(){
    this.alertService.getAlerts('').subscribe((alerts:any[])=>{this.alerts = alerts})
  }
}
