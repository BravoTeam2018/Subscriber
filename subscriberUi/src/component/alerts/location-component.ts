import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  template : `
  <div>
    <h1>
      <alert-lisr> </alert-lisr>
      <button type="button" class="button" (click)="cancel()">clear</button>
    </h1>
  </div>
  `
})
export class LocationComponent implements OnInit{
  constructor(private route:ActivatedRoute,private router:Router){

  }
  cancel(){
    this.router.navigate(["/"])
  }
  ngOnInit() {
    //this.route.snapshot.params['location'];
  }
}
