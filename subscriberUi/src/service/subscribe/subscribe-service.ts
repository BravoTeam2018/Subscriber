import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export class SubscribeService {

  constructor(private http:HttpClient){

  }

  subscribeMqtt():Observable<boolean>{
    this.http.get<boolean>('/server/api/v1/subscriber/connect').subscribe();
    return
  }

  isSuscribed():Observable<boolean>{
    return this.http.get<boolean>('/server/api/v1/subscriber/connected')
  }
}
