import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../../interfaces/doctor.model';
import { DoctorService } from '../../../services/doctor.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-doctors',
  imports: [RouterLink],
  templateUrl: './list-doctors.component.html',
  styleUrl: './list-doctors.component.css'
})
export class ListDoctorsComponent implements OnInit {
doctors : Doctor[] = []

constructor(private doctorService : DoctorService){}

ngOnInit():void{
this.doctorService.getDoctors().subscribe(data=>{
  console.log(data)
  this.doctors = data
})
}
deleteDoctor(id:number):void{
this.doctorService.deleteDoctor(id).subscribe({
  next:()=>{
    this.doctors = this.doctors.filter(d=>d.medicId!==id)
  },
  error: err => console.log("Erro al eliminar al doctor", err)
})
}
}
