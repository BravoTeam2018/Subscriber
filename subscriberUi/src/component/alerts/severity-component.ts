import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {AlertService} from "../../service/alert.service";
import {IAlert} from "../../model/alert-model";
import {ModalService} from "../../service/modal/modal-service";

@Component({
  selector : 'Location-list',
  template : `    
    <div>
      <h1>
        <jw-modal id="custom-modal-1" class="hidden">
          <p> {{alert}} </p>
          <button (click)="closeModal('custom-modal-1');">Close</button>
        </jw-modal>
       <div class="jw-modal-background"></div>
      </h1>
      <h3>
        <div>
          <table class="table table-inverse table-bordered" border="1">
            <tr>
              <th>Severity</th>
              <th>Description</th>
              <th>Location</th>
            </tr>
            <tr *ngFor="let alert of alerts">
              <td><a href="#" (click)="openModal('custom-modal-1',alert);false;">{{alert.severity}}</a></td>
              <td>  {{alert.description}}  </td>
              <td>  {{alert.currentEvent.location.relativeLocation}}</td>
            </tr>
          </table>
        </div>
      </h3>
      <button type="button" class="button" (click)="cancel()">clear</button>
    </div>
  `

})
export class SeverityComponent implements OnInit{
  url:string;
  alerts:IAlert[];
  alert:string;

  constructor(private route:ActivatedRoute,
              private router:Router,
              private alertService:AlertService,
              private modalService:ModalService){
  }
  cancel(){
    this.router.navigate(["/"])
  }

  ngOnInit(){
    console.log(this.route.snapshot.params['sev']);
    this.url = '/server/api/v1/alerts/severity/'.concat(this.route.snapshot.params['sev']);
    console.log(this.url);
    this.alertService.getAlerts(this.url).subscribe((alerts:any[])=>{this.alerts = alerts});
  }

  openModal(id:string,alert){
    this.alert=JSON.stringify(alert);
    //this.alert = alert.toString();
    console.log(JSON.stringify(alert));
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
