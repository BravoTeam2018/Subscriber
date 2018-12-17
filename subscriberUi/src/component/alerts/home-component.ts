import {Component} from '@angular/core';
import {AlertService} from "../../service/alert.service";
import {Router} from "@angular/router";
import {SubscribeService} from "../../service/subscribe/subscribe-service";
import {ModalService} from "../../service/modal/modal-service";

@Component({
  selector: 'app-root',
  templateUrl: './home-component.html',
})
export class HomeComponent {
  locationModel:any;
  severityModel:any;
  userModel:any;
  panelModel:any;
  url:string;
  message:string;

  constructor(private alertService:AlertService,
              private router:Router,
              private subscriber:SubscribeService,
              private modalService:ModalService
  ){
  }

  onSubmit(formValues:string,route:string){
    this.url = route.concat(formValues);
    this.router.navigate([this.url])
  }

  subscribeMqtt(){
    if (this.subscriber.isSuscribed()){
      this.message = "Already Subscribed!";
      this.openModal('custom-modal-2')
    }else{
      this.message="Subscribing";
      this.subscriber.subscribeMqtt()
    }
  }

  openModal(id:string){
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
