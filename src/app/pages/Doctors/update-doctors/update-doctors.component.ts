// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Specialty } from '../../../interfaces/specialty.model';
// import { Office } from '../../../interfaces/office.model';
// import { DoctorService } from '../../../services/doctor.service';
// import { SpecialtyService } from '../../../services/specialty.service';
// import { OfficeService } from '../../../services/office.service';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Doctor } from '../../../interfaces/doctor.model';

// @Component({
//   selector: 'app-update-doctors',
//   imports: [],
//   templateUrl: './update-doctors.component.html',
//   styleUrl: './update-doctors.component.css'
// })
// export class UpdateDoctorsComponent {
// private doctorId!: number; 
// doctorForm!:FormGroup
// doctorData!: FormData;
// selectedFile!: File; 
// specialities:Specialty[]=[]
// offices : Office[]=[]
// constructor(
//    private route: ActivatedRoute,
//   private doctorService : DoctorService,
//   private specialtyService : SpecialtyService,
//   private officeService : OfficeService,
//   private router : Router,
//   private formBuilder : FormBuilder
// ){}
// ngOnInit(): void {
//    this.doctorId = Number(this.route.snapshot.paramMap.get('id'));

//     this.doctorForm = this.formBuilder.group({
//       name:['',[Validators.required]],
//       lastName:['',[Validators.required]],
//       email:['',[Validators.required,Validators.email]],
//       phone:['',[Validators.required,Validators.minLength(10)]],
//       specialityId:['',[Validators.required]],
//       officeId:['',[Validators.required]],
//       pictureUrl:['']
//     })
//     this.specialtyService.getSpecialities().subscribe({
//       next: (data)=> this.specialities = data,
//       error:(err)=> console.log('Ocurrio el siguiente error', err)
//     })
//     this.officeService.getOffices().subscribe({
//       next:(data)=>this.offices = data,
//       error:(err)=>console.log('ocurrio el siguiente error')
//     })
//     this.loadDoctorData();
// }
// loadDoctorData(){

// }
//   onFileSelected(event: any): void {
//     this.selectedFile = event.target.files[0];
//     this.doctorForm.patchValue({pictureUrl: this.selectedFile});
//     this.doctorForm.get('pictureUrl')?.updateValueAndValidity(); // 
//   }
// sendForm(){
//   this.doctorForm.markAllAsTouched();
//   if(this.doctorForm.invalid){
//     return
//   }
//     const formData = new FormData();
//     formData.append('pictureUrl', this.selectedFile, this.selectedFile.name); 
//     formData.append('name', this.doctorForm.get('name')!.value);
//     formData.append('lastName', this.doctorForm.get('lastName')!.value);
//     formData.append('email', this.doctorForm.get('email')!.value);
//     formData.append('phone', this.doctorForm.get('phone')!.value);
//       formData.append('specialityId', this.doctorForm.get('specialityId')!.value);
//        formData.append('officeId', this.doctorForm.get('officeId')!.value);
    
//   this.doctorService.updateDoctor(this.doctorId,formData).subscribe({
//     next:()=>{
//       console.log("El doctor se registro con exito")
//        this.router.navigate(['/doctors'])
//     },
//     error :(err) => console.log('ocurrio un error', err)
//   })
// }
// }
