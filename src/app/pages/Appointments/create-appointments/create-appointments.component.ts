import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppointmentService } from '../../../services/appointment.service';
import { Router, RouterLink } from '@angular/router';
import { DoctorService } from '../../../services/doctor.service';
import { OfficeService } from '../../../services/office.service';
import { AppComponent } from '../../../app.component';
import { Appointment } from '../../../interfaces/appointment';
import { Office } from '../../../interfaces/office.model';
import { Doctor } from '../../../interfaces/doctor.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-appointments',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './create-appointments.component.html',
  styleUrl: './create-appointments.component.css'
})
export class CreateAppointmentsComponent implements OnInit {
appointmentForm !: FormGroup
offices : Office[] = []
medics :Doctor[]=[]
alertError :string =""

constructor(
  private appointmentService : AppointmentService,
  private doctorService : DoctorService,
  private officeService : OfficeService,
  private formBuilder : FormBuilder,
  private router :Router
){}
ngOnInit(): void {
   this.appointmentForm = this.formBuilder.group({
    reason:['',[Validators.required]],
    officeId:['',[Validators.required]],
    medicId:['',[Validators.required]],
    date:['',[Validators.required]]
   })
   this.officeService.getOffices().subscribe({
    next:(data)=>{
     this.offices = data
    }
   })
   this.doctorService.getDoctors().subscribe({
    next:(data)=>{
      this.medics = data
    }
   })
}
sendForm(){
  this.appointmentForm.markAllAsTouched()
  if(this.appointmentForm.invalid){
    return
  }
  const formData = this.appointmentForm.value
  this.appointmentService.createAppointment(formData).subscribe({
    next:()=> {
      this.router.navigate(['/appointments'])
    },
    error:(err) => {
      this.alertError = err.error.message
      setTimeout(()=>{
      this.alertError = ""
      },5000)
    }
  })
}


}
