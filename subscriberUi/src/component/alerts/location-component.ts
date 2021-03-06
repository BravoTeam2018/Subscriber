import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {AlertService} from "../../service/alert.service";
import {ModalService} from "../../service/modal/modal-service";
import {IAlert} from "../../model/alert-model";


@Component({
  selector : 'Location-list',
  template : `    
    <div>
      <h1>
        <jw-modal id="custom-modal-1" class="hidden">
          <pre> <b>{{alert}} </b></pre>
          <button (click)="closeModal('custom-modal-1');">Close</button>
        </jw-modal>
       <div class="jw-modal-background"></div>
      </h1>
      <h3>
        <div>
          <table class="table table-inverse table-bordered" border="1">
            <tr>
              <th>Severity</th>
              <th>Location</th>
              <th>Time Stamp</th>
              <th>Access Allowed</th>
              <!--<th>Description</th>-->
            </tr>
            <tr *ngFor="let alert of alerts">
              <td><a href="#" (click)="openModal('custom-modal-1',alert);false;">{{alert.severity}}</a></td>
              <td>  {{alert.currentEvent.location.relativeLocation}}</td>
              <td>  {{alert.currentEvent.timestamp| date:'medium'}}</td>
              <td>{{alert.currentEvent.accessAllowed}}</td>
              <!--<td>  {{alert.description}}</td>-->
            </tr>
          </table>
        </div>
      </h3>
      <button type="button" class="button" (click)="cancel()">clear</button>
    </div>
  `

})
export class LocationComponent implements OnInit{
  url:string;
  alerts:IAlert[];
  alert:string;
  constructor(private route:ActivatedRoute,
              private router:Router,
              private alertService:AlertService,
              private modalService:ModalService){
  }
  cancel(){
    this.router.navigate(["/home"])
  }

  ngOnInit() {
    this.url = '/server/api/v1/alerts/location/'.concat(this.route.snapshot.params['location']);
    this.alertService.getAlerts(this.url).subscribe((alerts:any[])=>{this.alerts = alerts});
  }

  openModal(id:string,alert){
    this.alert = JSON.stringify(alert, null, 2);
    console.log(JSON.stringify(alert,undefined,2));
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
