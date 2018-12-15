import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AlertService{
 //get this to return an observable of type alert?
  constructor(private http:HttpClient){
  }

/*  getAlerts():Observable<string[]>{
    return this.http.get<string[]>('/server/api/v1/alerts/')
  }*/

  getAlerts(url:string):Observable<string[]>{
    return this.http.get<string[]>(url)
  }

  private handleError<T>(operation='operation',result?:T){
    return(error:any):Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}

const ALERTS = [{
  "severity" : "Low",
  "currentEvent" : {
    "panelId" : "123b33e8-63b9-4c04-838b-f65aacbeab42",
    "cardId" : "246609c6-ce9c-41a2-b64d-ba8066a376af",
    "timestamp" : 1544289386468,
    "location" : {
      "coordinates" : {
        "longitude" : -0.133313,
        "latitude" : 51.52528
      },
      "altitude" : 150,
      "relativeLocation" : "UCL, Department of Physics & Astronomy Main Entrance, London, UK"
    },
    "accessAllowed" : true
  },
  "previousEvent" : {
    "panelId" : "123b33e8-63b9-4c04-838b-f65aacbeab42",
    "cardId" : "246609c6-ce9c-41a2-b64d-ba8066a376af",
    "timestamp" : 1544289384100,
    "location" : {
      "coordinates" : {
        "longitude" : -0.133313,
        "latitude" : 51.52528
      },
      "altitude" : 150,
      "relativeLocation" : "UCL, Department of Physics & Astronomy Main Entrance, London, UK"
    },
    "accessAllowed" : true
  },
  "title" : "Regular access event. No issue found",
  "description" : "Regular access event. No issue found"
}];
