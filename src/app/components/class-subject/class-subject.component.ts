import { Component, NgModule, OnInit } from '@angular/core';
import { ExamMasterModel } from '../../model/ExamMasterModel';
import { ManageService } from '../../services/manage-service';

import { FormGroup, FormControl, Validators } from '@angular/forms';

  
@Component({
  selector: 'app-class-subject',
 
   // imports: [FormsModule],
  templateUrl: './class-subject.component.html',
  styleUrl: './class-subject.component.css'
})
export class ClassSubjectComponent  implements OnInit{
  //board: ComesUnder,
  myForm :any;
 classSubjects :any;
 classSubjectData : any;
 activeSubjects: any;
 activeClasses:any
 constructor(private mangeService: ManageService) { 
  this.classSubjectData={
    classSubjectMappingId: 0,
    classId: 0,  
    subjectId: 0,
   className : '', 
   subjectName : '',
    isActive :true,
} 
  this.classSubjects=[];
  this.mangeService.getActiveClasList().subscribe((data: any[]) => {
    this.activeClasses = data;
   
  });
   this.mangeService.getActiveSubjectList().subscribe((data: any[]) => {
    this.activeSubjects = data;
    
  });
}
ngOnInit(): void {
  this.myForm = new FormGroup({
    classSubjectMappingId: new FormControl('', Validators.nullValidator),
    class: new FormControl('', Validators.required),
    subject: new FormControl('', [Validators.required, Validators.email]),
    isClassSubjectActive: new FormControl('', Validators.required)
  });
  this.mangeService.getClassSubjectsList().subscribe((data: any[]) => {
    this.classSubjects = data;
    
 });

}
addNewClassSubject() {
    this.classSubjectData={
      classSubjectMappingId: 0,
      classId: 0,  
      subjectId: 0,
     className : '', 
     subjectName : '',
      isActive :true,
  } 
}
editClassSubjects(cs:any) {
 
  this.classSubjectData=cs;

  }
  onSubmit(){
   
    if (confirm("Are you sure to save Class Subject ?")) {
      this.mangeService.saveClassSubjects(this.classSubjectData).subscribe((data: any) => {
        this.classSubjects = data;
     });
    } else {
     
    }
    this.addNewClassSubject();
    this.ngOnInit();  
    location.reload(); 
  }
}
