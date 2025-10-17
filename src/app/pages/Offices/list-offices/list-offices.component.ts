import { Component, OnInit } from '@angular/core';
import { Office } from '../../../interfaces/office.model';
import { OfficeService } from '../../../services/office.service';

@Component({
  selector: 'app-list-offices',
  imports: [],
  templateUrl: './list-offices.component.html',
  styleUrl: './list-offices.component.css'
})
export class ListOfficesComponent implements OnInit {
offices:Office[]=[]
constructor(private officeService : OfficeService){}

ngOnInit(): void {
    this.officeService.getOffices().subscribe(data=>{
      this.offices=data
    })
}
}
