import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Treatment } from '../models/treatment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreatmentService {

  public apiUrl: string = environment.apiUrl + 'treatment'
  constructor(public http: HttpClient) { }

  getAll(): Observable<Treatment[]> {
    return this.http.get<Treatment[]>(this.apiUrl+"/");
  }
  getAllByStatus(): Observable<Treatment[]> {
    return this.http.get<Treatment[]>(this.apiUrl+"/status");
  }


  add(data: any): Observable<any> {
    return this.http.post(this.apiUrl+"/", data);
  }

  

  getById(id: any): Observable<Treatment> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Treatment>(url);
  }

  update(id: any, body: any): Observable<Treatment> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Treatment>(url, body);
  }

  delete(id: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
