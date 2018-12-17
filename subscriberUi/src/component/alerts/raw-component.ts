import {Component, HostListener,  OnDestroy, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AlertService} from "../../service/alert.service";
import {ModalService} from "../../service/modal/modal-service";
import {IAlert} from "../../model/alert-model";
import {interval, Subscription} from "rxjs";


@Component({
  selector : 'raw-alert',
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
              <th>Access Allowed</th>
              <th>time</th>
            </tr>
            <tr *ngFor="let alert of alerts">
              <td><a href="#" (click)="openModal('custom-modal-1',alert);false;">{{alert.severity}}</a></td>
              <td>  {{alert.description}}  </td>
              <td>  {{alert.currentEvent.location.relativeLocation}}</td>
              <td>  {{alert.currentEvent.accessAllowed}}</td>
              <td>  {{alert.currentEvent.timestamp}}</td>
            </tr>
          </table>
        </div>
      </h3>
      <div id="notifications-list"  (scroll)="updateAlerts($event)"  ></div>
        <div class="row notification-row" *ngFor = "let notification of notifications" ></div>
        <button type="button" class="button" (click)="cancel()">clear</button>
    </div>
  `
})
export class RawComponent implements OnInit,OnDestroy{
  url:string;
  alerts:IAlert[];
  alert:string;
  sub:Subscription;
  public intervallTimer = interval(1000);

  constructor(private router:Router,
              private alertService:AlertService,
              private modalService:ModalService){

  }

  cancel(){
    this.router.navigate(["/home"])
  }

  ngOnInit() {
    this.url = '/server/api/v1/alerts/';
    this.sub = this.intervallTimer.subscribe(() => this.getAlerts());
    //this.alertService.getAlerts(this.url).subscribe((alerts:any[])=>{this.alerts = alerts});
    this.alerts = this.alertService.getAlertsArray(this.url);
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
  getAlerts(){
    this.alerts = this.alertService.getAlertsArray(this.url);
  }

 /* @HostListener('window:scroll', ['$event'])
  updateAlerts(event){
    console.log('scrolling')
    this.alerts = this.alertService.getAlertsArray(this.url)
  }*/

  openModal(id: string, alert) {
    this.alert = JSON.stringify(alert);
    //this.alert = alert.toString();
    console.log(JSON.stringify(alert));
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
