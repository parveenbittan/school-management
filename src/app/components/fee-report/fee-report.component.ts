import { Component, NgModule, OnInit } from '@angular/core';
import { ClassModel } from '../../model/ClassModel';
import { ManageService } from '../../services/manage-service';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentService } from '../../services/student-service';
import { StudentModel } from '../../model/StudentModel';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

  
@Component({
  selector: 'app-fee-report',
 
   // imports: [FormsModule],
  templateUrl: './fee-report.component.html',
  styleUrl: './fee-report.component.css'
})
export class FeeReportComponent  implements OnInit{
  //board: ComesUnder,

  visible:boolean;
  myForm :any;
  searchForm :any;
  activeSessions: any;
  activeClasses:any
   students :any;
 studentData : any;
 searchData :any;
 total : number;
 constructor(private mangeService: ManageService,private studentService: StudentService) { 
  this.total=0;
  this.searchData={
    sessionId: 0,
    classId : 0,
    name :''
  }
  this.studentData={
    studentId: 0,
    classId : 0,
    className :'',
    sessionId :0,
    sessionName:'',
    name: '',
    fatherName: '',
    motherName : '',
    isActive:true,
    contact1: '',
    contact2: '',
    currentAddress: '',
    permanentAddress: '',
    adhar :'',
    bloodGroup:'',
    gender:'',
    dob: '',
    admissionDate:'' ,
    releavingDate :'' ,
    updateDate :'' ,
    photo : '' 
   
	
	
} 
  this.students=[];
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
    sname: new FormControl('', Validators.required),
  });
  this.myForm = new FormGroup({
    studentId:new FormControl(0, Validators.nullValidator),
    class: new FormControl('', Validators.nullValidator),
    session: new FormControl('', Validators.nullValidator),
    name: new FormControl('', Validators.required),
   
    motherName: new FormControl('', Validators.required),
    fatherName: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    adhar: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    currentAddress: new FormControl('', Validators.required),
    permanentAddress: new FormControl('', Validators.required),
    contact1: new FormControl('', Validators.required),
    contact2: new FormControl('', Validators.required),
    bloodGroup: new FormControl('', Validators.required),
    admissionDate:new FormControl('', Validators.required),
    isActive: new FormControl('', Validators.required),
   
  });
 
  
  this.studentService.getStudentListWithFee(this.searchData).subscribe((data: any[]) => {
    this.students = data;
    this.total=0;
    for (var stu of this.students) {
      this.total=this.total+stu.total;
 }
 });
}
addNewStudent() {
    this.studentData={
      studentId: 0,
      classId : 0,
      className :'',
      sessionId :0,
      sessionName:'',
      name: '',
      fatherName: '',
      gender: '',
      motherName : '',
      isActive:true,
      contact1: '',
      contact2: '',
      currentAddress: '',
      permanentAddress: '',
      adhar :'',
      bloodGroup:'',
      dob: '',      
    admissionDate:'' ,
    releavingDate :'' ,
    updateDate :'' ,
    photo : ''
  } 
  this.visible=true 
  }
  
 
  onSearch(){
    this.studentService.getStudentListWithFee(this.searchData).subscribe((data: any[]) => {
      this.students = data;
      this.total=0;
      for (var stu of this.students) {
        this.total=this.total+stu.total;
   }
   });
   this.visible=false;
   this.searchData={
    sessionId: 0,
    classId : 0,
    name :''
  } 
  }
  closeForm(){    
    this.visible=false;   

  }
  public reportPDF(): void {
    let DATA: any = document.getElementById('report');
    var printContents = DATA.innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    location.reload();
  }
  
}
