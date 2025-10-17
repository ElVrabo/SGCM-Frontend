import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../../interfaces/appointment';
import { AppointmentService } from '../../../services/appointment.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-appointments',
  imports: [RouterLink,CommonModule],
  templateUrl: './list-appointments.component.html',
  styleUrl: './list-appointments.component.css'
})
export class ListAppointmentsComponent implements OnInit {
appointments : Appointment[] =[]
constructor(private appointmentService : AppointmentService){}
ngOnInit(): void {
    this.appointmentService.getAppointments().subscribe({
      next:(data)=>{
        this.appointments = data;
      },
      error:(err)=>{
        console.log('ocurrio el siguiente error', + err)
      }
    })
}
}
