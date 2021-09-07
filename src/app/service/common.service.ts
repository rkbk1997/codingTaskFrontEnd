import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  SERVER_URL = environment.backendUrl;
  constructor(private http: HttpClient) {}

  createPost(payload: any): Observable<any> {
    return this.http.post(this.SERVER_URL + '/users/create-post', payload);
  }
}
