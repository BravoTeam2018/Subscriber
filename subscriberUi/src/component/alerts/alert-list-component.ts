import {Component, Input, OnInit} from "@angular/core";
import {AlertService} from "../../service/alert.service";

@Component({
  selector : 'alert-lisr',
  template : `
    <div>
      <p>{{alerts}}</p>
    </div>
    \`,
    })
  `
})

export class AlertListComponent implements OnInit{
  @Input('alert') alerts;
  constructor(private alertService : AlertService){
  }

  ngOnInit(){
    this.alertService.getAlerts('').subscribe((alerts:any[])=>{this.alerts = alerts})
  }
}
