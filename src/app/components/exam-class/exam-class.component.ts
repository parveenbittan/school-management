import { Component, NgModule, OnInit } from '@angular/core';
import { ClassModel } from '../../model/ClassModel';
import { ManageService } from '../../services/manage-service';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentService } from '../../services/student-service';
import { StudentModel } from '../../model/StudentModel';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

  
@Component({
  selector: 'app-exam-class',
 
   // imports: [FormsModule],
  templateUrl: './exam-class.component.html',
  styleUrl: './exam-class.component.css'
})
export class ExamClassComponent  implements OnInit{
  //board: ComesUnder,
  
  myForm :any;
  searchForm :any;
 
  activeClasses:any;
  activeExams: any;
   examClasses:any;
 examClasshData :any;
 constructor(private mangeService: ManageService) { 
 
  this.examClasshData={
    examClassId: 0,
    classId : 0,
    examId :0,
    maxMarks:0
  }
  
  

  this.mangeService.getActiveClasList().subscribe((data: any[]) => {
    this.activeClasses = data;
  });
  
  this.mangeService.getActiveExam().subscribe((data: any[]) => {
    this.activeExams = data;
  });
  this.mangeService.getExamClassList().subscribe((data: any[]) => {
    this.examClasses = data;
  });
}
ngOnInit(): void {
  this.myForm = new FormGroup({
    examclassId: new FormControl(0, Validators.nullValidator),
    classId: new FormControl(0, Validators.nullValidator),
    examId: new FormControl(0, Validators.nullValidator),
    maxMarks: new FormControl(0, Validators.required),
    
  });
  
 
  
  /*this.studentService.getStudentList(this.searchData).subscribe((data: any[]) => {
    this.students = data;
 });*/
}

  editExamClass(examClass:any) {
    this.examClasshData=examClass;
     
    
     
  }

  addNewExamClass(){
    this.examClasshData={
      examClassId: 0,
      classId : 0,
      examId :0,
      maxMarks:0
    }
  }
  onSubmit(){
   
    if (confirm("Are you sure to save Exam Class  ?")) {
      this.mangeService.saveExamClass(this.examClasshData).subscribe((data: any) => {
        this.examClasshData = data;
     });
    } else {
     
    }
    this.addNewExamClass();
    this.ngOnInit();  
    location.reload(); 
  }
  
  
  

  }
  

