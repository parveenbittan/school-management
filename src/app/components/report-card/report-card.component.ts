import { Component, NgModule, OnInit } from '@angular/core';
import { ClassModel } from '../../model/ClassModel';
import { ManageService } from '../../services/manage-service';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { StudentService } from '../../services/student-service';
import { StudentModel } from '../../model/StudentModel';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

  
@Component({
  selector: 'app-report-card',
 
   // imports: [FormsModule],
  templateUrl: './report-card.component.html',
  styleUrl: './report-card.component.css'
})
export class ReportCardComponent  implements OnInit{
  //board: ComesUnder,
  orgname:any;
  affidiateno:any;
  orgaddress:any;
  orgemail:any;
  contact:any;
  contact2:any;
  board:any;
  visible:boolean;
  myForm :any;
  searchForm :any;
  activeSessions: any;
  activeClasses:any;
  activeExams: any;
   students :any;
   report :any;
 searchData :any;
 resultParamData:any;
 constructor(private mangeService: ManageService,private studentService: StudentService,private formBuilder: FormBuilder) { 
  this.orgname= sessionStorage.getItem('orgname');
    this.affidiateno= sessionStorage.getItem('affidiateno');
    this.orgaddress= sessionStorage.getItem('orgaddress');
    this.orgemail= sessionStorage.getItem('orgemail');
    this.contact= sessionStorage.getItem('contact');
    this.contact2= sessionStorage.getItem('contact2');
    this.board= sessionStorage.getItem('board');
  this.searchData={
    sessionId: 0,
    classId : 0,
    examId :0,
    isSmesterSystem:false
  }
  
  this.students=[];
  this.report=[];
  this.visible=false;
  this.mangeService.getActiveClasList().subscribe((data: any[]) => {
    this.activeClasses = data;
  });
   this.mangeService.getSessionList().subscribe((data: any[]) => {
    this.activeSessions = data;
  });
 
}
ngOnInit(): void {
  this.searchForm = new FormGroup({
    sclass: new FormControl('', Validators.nullValidator),
    ssession: new FormControl('', Validators.nullValidator),
    ename: new FormControl('', Validators.required),
    isSmesterSystem : new FormControl('', Validators.required)
  });
  
 
  this.myForm=this.formBuilder.group({});
  

  /*this.studentService.getStudentList(this.searchData).subscribe((data: any[]) => {
    this.students = data;
 });*/
}
examList(){
  this.mangeService.getExamListByClassId(this.searchData).subscribe((data: any[]) => {
    this.activeExams = data;
  });
}
  editStudent(sub:any,count :number) {
    this.report=[];
    this.report.push(sub); 
  this.visible=true;
    
     
  }

  
  onSearch(){
    this.studentService.getStudentResultList(this.searchData).subscribe((data: any[]) => {
      this.students = data;
      this.report=this.students;
      if(data.length>0){
        this.visible=true; 
      }
     
      for(let i=0;i<this.students.length;i++ ){
        for(let j=0;j<this.students[i].result.length;j++ ){
                
          this.myForm.addControl('students['+i+'].result['+j+'].Obtained',new FormControl('', Validators.required))
      this.myForm.addControl('students['+i+'].result['+j+'].max',new FormControl('', Validators.required))
    
          }
      }
      for(let i=0;i<this.students.length;i++ ){
        let obt: any = document.getElementById('obtain['+i+']')?.innerHTML.valueOf;
        let max: any = document.getElementById('max['+i+']')?.innerHTML.valueOf;
        /*let sum = Number(obt) + Number(max);
        let total: any = document.getElementById('total['+i+']')?.innerHTML.valueOf;
        total = sum;*/
        }
   });
   
   
   /*this.searchData={
    sessionId: 0,
    classId : 0,
    examId :0,
    isSmesterSystem:false
  } */
  
  

  }
  closeForm(){    
      

  }
  public reportPDF(): void {
    let DATA: any = document.getElementById('report');
    html2canvas(DATA).then((canvas) => {
      var imgData = canvas.toDataURL('image/png');
      var imgWidth = 210; 
      var pageHeight = 295;  
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      var doc = new jsPDF('p', 'mm');
      var position = 0;
      
      doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      doc.save( 'reportCard.pdf');
    });
 
  }
  clear(){
    window.location.reload();
  }
  save(studentList :any){
    this.resultParamData={
      students : studentList,
      ssf:this.searchData
    }
    this.studentService.saveResultList(this.resultParamData).subscribe((data: any[]) => {
      this.students = data;
    });
alert("Result saved successfully")
  }

  
}
