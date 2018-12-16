import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AlertService{

  constructor(private http:HttpClient){
  }

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
