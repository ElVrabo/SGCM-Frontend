import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Specialty } from '../interfaces/specialty.model';

@Injectable({
  providedIn: 'root'
})
export class SpecialtyService {

  constructor(private http: HttpClient) { }

  public getSpecialities():Observable<Specialty[]>{
    return this.http.get<Specialty[]>("https://localhost:7212/api/v1/specialities")
  }
  public createSpecialitie(formData:Specialty):Observable<any>{
    return this.http.post<any>("https://localhost:7212/api/v1/specialities",formData)
  }
  public DeleteSpecielitie(id:number):Observable<any>{
    return this.http.delete<any>(`https://localhost:7212/api/v1/specialities/${id}`)
  }
}
