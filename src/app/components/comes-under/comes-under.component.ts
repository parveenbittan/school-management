import { Component, NgModule, OnInit } from '@angular/core';
import { ClassModel } from '../../model/ClassModel';
import { ManageService } from '../../services/manage-service';

import { FormGroup, FormControl, Validators } from '@angular/forms';

  
@Component({
  selector: 'app-comes-under',
 
   // imports: [FormsModule],
  templateUrl: './comes-under.component.html',
  styleUrl: './comes-under.component.css'
})
export class ComesUnderComponent  implements OnInit{
  //board: ComesUnder,
  myForm :any;
 classes :any;
 clasData : any;
 constructor(private mangeService: ManageService) { 
  this.clasData={
    classId: 0, 
    className : '', 
    classDesc : '',
    isActive :true,
} 
  this.classes=[];
  
}
ngOnInit(): void {
  this.myForm = new FormGroup({
    classId: new FormControl('', Validators.nullValidator),
    name: new FormControl('', Validators.required),
    desc: new FormControl('', [Validators.required, Validators.email]),
    isActive: new FormControl('', Validators.required)
  });
  this.mangeService.getClasList().subscribe((data: any[]) => {
    this.classes = data;
 });

}
  addNewClass() {
    this.clasData={
      classId: 0, 
      className : '', 
      classDesc : '',
      isActive :true,
  } 
  }
  editClass(cl:any) {
    this.clasData={
      classId: cl.classId, 
      className : cl.className, 
      classDesc : cl.classDesc,
      isActive :cl.isActive, 
    }
    
  }
  onSubmit(){
   if(this.clasData.className!='' && this.clasData.classDesc!=''){
    if (confirm("Are you sure to save Class ?")) {
      this.mangeService.saveClass(this.clasData).subscribe((data: any) => {
        this.classes = data;
     });
    } else {
     
    }
    this.addNewClass();
    this.ngOnInit();  
    location.reload(); 
  }
}
}
