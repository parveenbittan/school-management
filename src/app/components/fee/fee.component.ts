import { Component, NgModule, OnInit } from '@angular/core';
import { ClassModel } from '../../model/ClassModel';
import { ManageService } from '../../services/manage-service';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentService } from '../../services/student-service';
import { StudentModel } from '../../model/StudentModel';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

  
@Component({
  selector: 'app-report-card',
 
   // imports: [FormsModule],
  templateUrl: './fee.component.html',
  styleUrl: './fee.component.css'
})
export class FeeComponent  implements OnInit{
  //board: ComesUnder,

  visible:boolean;
  myForm :any;
  searchForm :any;
  activeSessions: any;
  activeClasses:any;
  
   students :any;
   student :any;
 searchData :any;
 orgname:any;
 affidiateno:any;
 orgaddress:any;
 orgemail:any;
 contact:any;
 contact2:any;
 board:any;
feeHistory :any;

 constructor(private mangeService: ManageService,private studentService: StudentService) { 
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
    studentId :0,
    
  }
  this.student={
    studentId: 0,
    classId : 0,  
    sessionId :0,   
    name: '',
    fatherName: '',  
      gender: '',
   
    isActive:true,
   
    currentAddress: '',
    
    
    fee :{
      feeId:0,	
      
      aprF:0,
      mayF:0,
      juneF:0,
      julyF:0,
      augF:0,
      septF:0,
      octF:0,
      novF:0,
      decemF:0,
      janF:0,
      febF:0,
      marF:0,
      isTransport:false,
      aprT:0,
      mayT:0,
      juneT:0,
      julyT:0,
      augT:0,
      septT:0,
      octT:0,
      novT:0,
      decemT:0,
      janT:0,
      febT:0,
      marT:0,
      addmissionFee:0,
      otherFee:0,
      comment:''
        
          }
         
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
    sclass: new FormControl(0, Validators.nullValidator),
    ssession: new FormControl(0, Validators.nullValidator),
    studentId: new FormControl(0, Validators.required),
   
  });
  this.myForm = new FormGroup({
    classId: new FormControl(0, Validators.nullValidator),
    studentId: new FormControl(0, Validators.nullValidator),
    sessionId: new FormControl(0, Validators.nullValidator),
    feeId:new FormControl(0, Validators.nullValidator),
    aprF:new FormControl(0, Validators.nullValidator),
    mayF:new FormControl(0, Validators.nullValidator),
    juneF:new FormControl(0, Validators.nullValidator),
    julyF:new FormControl(0, Validators.nullValidator),
    augF:new FormControl(0, Validators.nullValidator),
    septF:new FormControl(0, Validators.nullValidator),
    octF:new FormControl(0, Validators.nullValidator),
    novF:new FormControl(0, Validators.nullValidator),
    decem:new FormControl(0, Validators.nullValidator),
    janF:new FormControl(0, Validators.nullValidator),
    febF:new FormControl(0, Validators.nullValidator),
    marF:new FormControl(0, Validators.nullValidator),
    isTransport:new FormControl(false, Validators.nullValidator),
    aprT:new FormControl(0, Validators.nullValidator),
    mayT:new FormControl(0, Validators.nullValidator),
    juneT:new FormControl(0, Validators.nullValidator),
    julyT:new FormControl(0, Validators.nullValidator),
    augT:new FormControl(0, Validators.nullValidator),
    septT:new FormControl(0, Validators.nullValidator),
    octT:new FormControl(0, Validators.nullValidator),
    novT:new FormControl(0, Validators.nullValidator),
    decemT:new FormControl(0, Validators.nullValidator),
    janT:new FormControl(0, Validators.nullValidator),
    febT:new FormControl(0, Validators.nullValidator),
    marT:new FormControl(0, Validators.nullValidator),
    addmissionFee:new FormControl(0, Validators.nullValidator),
    otherFee:new FormControl(0, Validators.nullValidator),
    comment:new FormControl('', Validators.required),
	
  });
 
  
  /*this.studentService.getStudentList(this.searchData).subscribe((data: any[]) => {
    this.students = data;
 });*/
}

  
studentList(){

  this.studentService.getStudentList(this.searchData).subscribe((data: any[]) => {
    this.students = data;
 });
  
   this.visible=false;
   
 
  }
  character(){
    
    this.studentService.getStudentFee(this.searchData).subscribe((data: any[]) => {
      this.student = data;
      
   });
   this.studentService.getStudentFeeHis(this.searchData).subscribe((data: any[]) => {
    this.feeHistory = data;
 });
   if(this.searchData.studentId>0){
    this.visible=true;
    
   }
   let htmlShow :any = document.getElementById("history");
 htmlShow.style.display = "none";
  }
  public reportPDF(): void {
    let DATA: any = document.getElementById('report');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
   
  }
  clear(){
    window.location.reload();
  }
  saveFee(){
   this.studentService.saveFee(this.student).subscribe((data: any[]) => {
      this.student = data;
      
   });
   let htmlShow :any = document.getElementById("history");
   htmlShow.style.display = "none";
   this.studentService.getStudentFeeHis(this.student).subscribe((data: any[]) => {
    this.feeHistory = data;
 });
 
  }
 
   showHtmlDiv( x :any ) {
    this.studentService.getStudentFeeHis(this.searchData).subscribe((data: any[]) => {
      this.feeHistory = data;
   });
    let htmlShow :any = document.getElementById("history");
    if (x == "true") {
      htmlShow.style.display = "block";
    } else {
      htmlShow.style.display = "none";
    }
  }
}
