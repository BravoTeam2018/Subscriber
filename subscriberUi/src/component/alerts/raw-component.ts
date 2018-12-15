import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";


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

export class RawComponent implements OnInit{
  constructor(private router:Router){

  }

  cancel(){
    this.router.navigate(["/"])
  }

  ngOnInit(){

  }
}
