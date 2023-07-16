import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lab } from '../models/lab';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class LabService {
  // api=" http://localhost:9090/api/"
  public apiUrl: string = environment.apiUrl + 'lab'

  constructor(private httpClient:HttpClient) { }
  

  getAll(): Observable<Lab[]> {
    return this.httpClient.get<Lab[]>(this.apiUrl+"/");
  }

  add(data: any): Observable<any> {
    return this.httpClient.post(this.apiUrl+"/", data);
  }

  getById(id: any): Observable<Lab> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.get<Lab>(url);
  }

  update(id: any, body: any): Observable<Lab> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.put<Lab>(url, body);
  }

  delete(id: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.delete(url);
  }


  fillResult(lab:Lab): Observable<object>{
    return this.httpClient.post(`${this.apiUrl}`, lab)
    
  }
  getAllResult():Observable <Lab []> {
    return this.httpClient.get<Lab []>(this.apiUrl)
  }
}
