import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Specialty } from '../../../interfaces/specialty.model';
import { Office } from '../../../interfaces/office.model';
import { SpecialtyService } from '../../../services/specialty.service';
import { OfficeService } from '../../../services/office.service';
import { Router, RouterLink } from '@angular/router';
import { DoctorService } from '../../../services/doctor.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-create-doctors',
  imports: [ReactiveFormsModule, CommonModule,RouterLink],
  templateUrl: './create-doctors.component.html',
  styleUrl: './create-doctors.component.css'
})
export class CreateDoctorsComponent implements OnInit {
doctorForm!:FormGroup
selectedFile!: File;
specialities:Specialty[]=[]
offices : Office[]=[]
constructor(
  private doctorService : DoctorService,
  private specialtyService : SpecialtyService,
  private officeService : OfficeService,
  private router : Router,
  private formBuilder : FormBuilder
){}
ngOnInit(): void {
    this.doctorForm = this.formBuilder.group({
      name:['',[Validators.required]],
      lastName:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      phone:['',[Validators.required,Validators.minLength(10)]],
      specialityId:['',[Validators.required]],
      officeId:['',[Validators.required]],
      pictureUrl:['']
    })
    this.specialtyService.getSpecialities().subscribe({
      next: (data)=> this.specialities = data,
      error:(err)=> console.log('Ocurrio el siguiente error', err)
    })
    this.officeService.getOffices().subscribe({
      next:(data)=>this.offices = data,
      error:(err)=>console.log('ocurrio el siguiente error')
    })
}
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    this.doctorForm.patchValue({pictureUrl: this.selectedFile});
    this.doctorForm.get('pictureUrl')?.updateValueAndValidity(); // 
  }
sendForm(){
  this.doctorForm.markAllAsTouched();
  if(this.doctorForm.invalid){
    return
  }
    const formData = new FormData();
    formData.append('pictureUrl', this.selectedFile, this.selectedFile.name); 
    formData.append('name', this.doctorForm.get('name')!.value);
    formData.append('lastName', this.doctorForm.get('lastName')!.value);
    formData.append('email', this.doctorForm.get('email')!.value);
    formData.append('phone', this.doctorForm.get('phone')!.value);
      formData.append('specialityId', this.doctorForm.get('specialityId')!.value);
       formData.append('officeId', this.doctorForm.get('officeId')!.value);
    
  this.doctorService.addDoctor(formData).subscribe({
    next:()=>{
      console.log("El doctor se registro con exito")
       this.router.navigate(['/doctors'])
    },
    error :(err) => console.log('ocurrio un error', err)
  })
}
}
