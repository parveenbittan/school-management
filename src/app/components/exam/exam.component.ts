import { Component, NgModule, OnInit } from '@angular/core';
import { ExamMasterModel } from '../../model/ExamMasterModel';
import { ManageService } from '../../services/manage-service';

import { FormGroup, FormControl, Validators } from '@angular/forms';

  
@Component({
  selector: 'app-subject',
 
   // imports: [FormsModule],
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.css'
})
export class ExamComponent  implements OnInit{
  //board: ComesUnder,
  myForm :any;
 exams :any;
 examData : any;
 constructor(private mangeService: ManageService) { 
  this.examData={
    examId: 0, 
   examName : '', 
    examCode : '',
    isActive :true,
} 
  this.exams=[];
  
}
ngOnInit(): void {
  this.myForm = new FormGroup({
    examId: new FormControl('', Validators.nullValidator),
    name: new FormControl('', Validators.required),
    code: new FormControl('', [Validators.required, Validators.email]),
    isActive: new FormControl('', Validators.required)
  });
  this.mangeService.getExamList().subscribe((data: any[]) => {
    this.exams = data;
 });

}
  addNewExam() {
    this.examData={
      examId: 0, 
     examName : '', 
      examCode : '',
      isActive :true,
  }
}
  editExam(exam:any) {
    this.examData={
      examId: exam.examId ,
     examName : exam.examName ,
      examCode : exam.examCode ,
      isActive :exam.isActive ,
    }
  }
  onSubmit(){
    if(this.examData.examName !='' && this.examData.examCode !='' ){
    if (confirm("Are you sure to save Exam ?")) {
      this.mangeService.saveExam(this.examData).subscribe((data: any) => {
        this.exams = data;
     });
    } else {
     
    }
    this.addNewExam();
    this.ngOnInit();  
    location.reload(); 
  }
}
}
