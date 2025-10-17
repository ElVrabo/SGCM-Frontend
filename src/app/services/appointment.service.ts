import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../interfaces/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http:HttpClient) { }

  public getAppointments():Observable<Appointment[]>{
    return this.http.get<Appointment[]>("https://localhost:7212/api/v1/appointments")
  }
  public createAppointment(formData:Appointment):Observable<any>{
    return this.http.post<any>("https://localhost:7212/api/v1/appointments", formData)
  }
}
