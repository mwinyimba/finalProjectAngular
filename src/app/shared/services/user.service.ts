import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public apiUrl: string = environment.apiUrl + 'user'
  constructor(public http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl+"/");
  }
  getAllByStatus(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl+"/status");
  }


  add(data: any): Observable<any> {
    return this.http.post(this.apiUrl+"/", data);
  }

  login(data: any): Observable<any> {
    return this.http.post(this.apiUrl+"/login", data);
  }

  getById(id: any): Observable<User> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<User>(url);
  }

  update(id: any, body: any): Observable<User> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<User>(url, body);
  }

  delete(id: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
