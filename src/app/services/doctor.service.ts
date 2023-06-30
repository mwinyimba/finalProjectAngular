import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  API = "http://localhost:9090"

  constructor(private httpClient:HttpClient) { }
  getAllDoctor(){
    
  }
  
}
