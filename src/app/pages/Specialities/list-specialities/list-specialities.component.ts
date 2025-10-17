import { Component, OnInit } from '@angular/core';
import { Specialty } from '../../../interfaces/specialty.model';
import { SpecialtyService } from '../../../services/specialty.service';

@Component({
  selector: 'app-list-specialities',
  imports: [],
  templateUrl: './list-specialities.component.html',
  styleUrl: './list-specialities.component.css'
})
export class ListSpecialitiesComponent implements OnInit {
specialities : Specialty[] = []

constructor(private specialtyService:SpecialtyService){}

ngOnInit(): void {
    this.specialtyService.getSpecialities().subscribe(data=>{
      this.specialities = data
    })
}
}
