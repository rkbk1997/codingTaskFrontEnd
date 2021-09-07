import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  backendUrl = environment.backendUrl;

  options = {

  }

  constructor(private http: HttpClient) { }

  registations(payload: Object): Observable<any>{
    return this.http.post( this.backendUrl + '/public/register' ,payload);
  }

  login(payload: Object): Observable<any>{
    return this.http.post( this.backendUrl + '/public/login', payload);
  }

}
