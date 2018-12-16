import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IAlert} from "../model/alert-model";
import {catchError} from "rxjs/operators";

@Injectable()
export class AlertService{
  private data:IAlert[];

  constructor(private http:HttpClient){
  }

  getAlerts(url:string):Observable<IAlert[]>{
    return this.http.get<IAlert[]>(url).pipe(catchError(this.handleError<IAlert[]>('getAlerts',[])))
  }

  getAlertsArray(url:string){
    this.http.get(url).subscribe((data:IAlert[]) => {
      this.data= data;
    } )
    return this.data
  }

  private handleError<T>(operation='operation',result?:T){
    return(error:any):Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
