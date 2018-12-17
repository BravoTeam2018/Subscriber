import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable()
export class SubscribeService {

  constructor(private http:HttpClient){

  }

  subscribeMqtt():Observable<boolean>{
    this.http.get<boolean>('/server/api/v1/subscriber/connect').subscribe()|| catchError(this.handleError<boolean>('subscribeMqtt',));
    return
  }

  isSuscribed():Observable<boolean>{
    return this.http.get<boolean>('/server/api/v1/subscriber/connected').pipe(catchError(this.handleError<boolean>('isSubscribed',)))
  }

  private handleError<T>(operation='operation',result?:T){
    return(error:any):Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
