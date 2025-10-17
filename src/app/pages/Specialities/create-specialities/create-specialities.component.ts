import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SpecialtyService } from '../../../services/specialty.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-specialities',
  imports: [CommonModule,ReactiveFormsModule, RouterLink],
  templateUrl: './create-specialities.component.html',
  styleUrl: './create-specialities.component.css'
})
export class CreateSpecialitiesComponent implements OnInit {
   specialitieForm!:FormGroup
   constructor(
    private specService : SpecialtyService,
    private formBuilder :FormBuilder,
    private router : Router,
   ){
   }
   ngOnInit(): void {
       this.specialitieForm = this.formBuilder.group({
        name:['',[Validators.required]],
        description:['',[Validators.required]]
       })
   }
   sendForm(){
    this.specialitieForm.markAllAsTouched()
    if(this.specialitieForm.invalid){
      return
    }
    const specialitieData = this.specialitieForm.value
    this.specService.createSpecialitie(specialitieData).subscribe({
      next: (response)=>{
        console.log(response.message)
        this.router.navigate(['/specialities'])
      },
      error:(err)=>console.log('ocurrio el siguiente error: ' + err)
    })
   }
  
}
