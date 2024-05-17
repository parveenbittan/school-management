import { Component, NgModule, OnInit } from '@angular/core';
import { ClassModel } from '../../model/ClassModel';
import { ManageService } from '../../services/manage-service';

import { FormGroup, FormControl, Validators } from '@angular/forms';

  
@Component({
  selector: 'app-subject',
 
   // imports: [FormsModule],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent  implements OnInit{
  //board: ComesUnder,
  myForm :any;
 subjects :any;
 subjectData : any;
 constructor(private mangeService: ManageService) { 
  this.subjectData={
    subjectId: 0, 
   subjectName : '', 
    subjectCode : '',
    isActive :true,
} 
  this.subjects=[];
  
}
ngOnInit(): void {
  this.myForm = new FormGroup({
    subjectId: new FormControl('', Validators.nullValidator),
    name: new FormControl('', Validators.required),
    code: new FormControl('', [Validators.required, Validators.email]),
    isActive: new FormControl('', Validators.required)
  });
  this.mangeService.getSubjectList().subscribe((data: any[]) => {
    this.subjects = data;
 });

}
  addNewSubject() {
    this.subjectData={
      subjectId: 0, 
     subjectName : '', 
      subjectCode : '',
      isActive :true,
  } 
  }
  editSubject(sub:any) {
    this.subjectData={
      subjectId: sub.subjectId, 
      subjectName : sub.subjectName, 
      subjectCode : sub.subjectCode,
      isActive :sub.isActive, 
    }
    
  }
  onSubmit(){
    if(this.subjectData.subjectName !='' && this.subjectData.subjectCode !='' ){
    if (confirm("Are you sure to save Subject ?")) {
      this.mangeService.saveSubject(this.subjectData).subscribe((data: any) => {
        this.subjects = data;
     });
    } else {
     
    }
    this.addNewSubject();
    this.ngOnInit();  
    location.reload(); 
  }
}
}
