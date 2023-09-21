import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserDetails } from '../parent-container/IUserDetails';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  public validateUser(data: Partial<IUserDetails>): Observable<any>{
    return this.http.post<any>('https://localhost:7139/api/Login/login', data);
  } 
}
