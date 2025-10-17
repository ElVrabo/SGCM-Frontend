import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../../interfaces/doctor.model';
import { DoctorService } from '../../../services/doctor.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-doctors',
  imports: [RouterLink,CommonModule],
  templateUrl: './detail-doctors.component.html',
  styleUrl: './detail-doctors.component.css'
})
export class DetailDoctorsComponent implements OnInit {
doctor!: Doctor
doctorId!:number
constructor(private doctorService :DoctorService, private route:ActivatedRoute){}
ngOnInit(): void {
  this.doctorId = Number(this.route.snapshot.paramMap.get('id'))
  this.doctorService.getDoctor(this.doctorId).subscribe({
    next:(data)=>{
      this.doctor = {
        medicId : data.medicId,
        pictureUrl: data.pictureUrl,
        officeName : data.officeName,
        specialtyName:data.specialtyName,
        name:data.name,
        lastName:data.lastName,
        email:data.email,
        phone:data.phone
      }
    },
    error:(err)=>{
      console.log("ocurrio el siguiente error", err)
    }
  })
}
}
