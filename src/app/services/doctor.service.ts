import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  Doctor } from '../interfaces/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { 

  }
  public getDoctors():Observable<Doctor[]>{
    return this.http.get<Doctor[]>("https://localhost:7212/api/v1/medics")
  }
  public getDoctor(id:number):Observable<Doctor>{
    return this.http.get<Doctor>(`https://localhost:7212/api/v1/medics/${id}`)
  }
   public addDoctor(formData:FormData):Observable<any>{
    return this.http.post<any>("https://localhost:7212/api/v1/medics",formData)
  }
  public updateDoctor(id:number,formData:FormData):Observable<any>{
    return this.http.put<any>(`https://localhost:7212/api/v1/medics/${id}`,formData)
  }
  public deleteDoctor(id:number):Observable<any>{
    return this.http.delete<any>(`https://localhost:7212/api/v1/medics/${id}`)
  }
 
}
