import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Test } from '../models/test';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  api = " http://localhost:9090/api/test/test"
  constructor(public http: HttpClient) { }

  getAllTest(): Observable<Test[]> {
    return this.http.get<Test[]>(this.api);
  }

  addTest(test:Test): Observable<object> {
    return this.http.post(`${this.api}`,test);
  }

  getById(id: any): Observable<Test> {
    const url = `${this.api}/${id}`;
    return this.http.get<Test>(url);
  }

  update(id: any, body: any): Observable<Test> {
    const url = `${this.api}/${id}`;
    return this.http.put<Test>(url, body);
  }

  delete(id: any): Observable<any> {
    const url = `${this.api}/${id}`;
    return this.http.delete(url);
  }
}
