import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../models/message';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public apiUrl: string = environment.apiUrl + 'message'
  constructor(public http: HttpClient) { }

  getAll(): Observable<Message[]> {
    return this.http.get<Message[]>(this.apiUrl+"/");
  }

  add(data: any): Observable<any> {
    return this.http.post(this.apiUrl+"/", data);
  }

  getById(id: any): Observable<Message> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Message>(url);
  }

  updateMessage(id: any, body: any): Observable<Message> {
    const url = `${this.apiUrl+"/message"}/${id}`;
    return this.http.put<Message>(url, body);
  }
  
  update(id: any, body: any): Observable<Message> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Message>(url, body);
  }
}
