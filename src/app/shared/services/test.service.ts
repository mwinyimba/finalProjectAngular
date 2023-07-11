import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Test } from '../models/test';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  public apiUrl: string = environment.apiUrl + 'test'
  constructor(public http: HttpClient) { }

  getAll(): Observable<Test[]> {
    return this.http.get<Test[]>(this.apiUrl+"/");
  }

  add(data: any): Observable<any> {
    return this.http.post(this.apiUrl+"/", data);
  }

  getById(id: any): Observable<Test> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Test>(url);
  }

  update(id: any, body: any): Observable<Test> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Test>(url, body);
  }

  delete(id: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
