import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Office } from '../interfaces/office.model';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  constructor(private http:HttpClient) { }

  public getOffices():Observable<Office[]>{
   return this.http.get<Office[]>("https://localhost:7212/api/v1/offices")
  }
}
