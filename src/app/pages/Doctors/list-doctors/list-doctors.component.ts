import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-doctors',
  imports: [],
  templateUrl: './list-doctors.component.html',
  styleUrl: './list-doctors.component.css'
})
export class ListDoctorsComponent implements OnInit {
doctors : string[] = []

ngOnInit():void{
this.doctors = ["luis","javier","brandon",]
}
}
