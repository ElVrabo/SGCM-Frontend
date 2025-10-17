import { Component, OnInit } from '@angular/core';
import { Specialty } from '../../../interfaces/specialty.model';
import { SpecialtyService } from '../../../services/specialty.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-specialities',
  imports: [RouterLink],
  templateUrl: './list-specialities.component.html',
  styleUrl: './list-specialities.component.css'
})
export class ListSpecialitiesComponent implements OnInit {
specialities : Specialty[] = []
alertError : string =""
constructor(private specService:SpecialtyService){}

ngOnInit(): void {
    this.specService.getSpecialities().subscribe(data=>{
      this.specialities = data
    })
}
 deleteSpecialitie(id:number){
    this.specService.DeleteSpecielitie(id).subscribe({
      next:()=>{
       this.specialities = this.specialities.filter(s=>s.specialityId !== id)
      },
      error :(err) => {
        this.alertError = err.error.message
        setTimeout(()=>{
         this.alertError = ""
        },5000)
      }
    })
   }
}
