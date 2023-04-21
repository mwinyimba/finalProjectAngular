import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Doctor } from '../models/doctor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private apiUrl: string = environment.apiUrl + 'doctor'
  constructor(private http: HttpClient) { }

  getAll(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.apiUrl+"/");
  }

  add(data: any): Observable<any> {
    return this.http.post(this.apiUrl+"/", data);
  }

  getById(id: any): Observable<Doctor> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Doctor>(url);
  }

  update(id: any, body: any): Observable<Doctor> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Doctor>(url, body);
  }

  delete(id: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
