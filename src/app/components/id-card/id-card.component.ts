
import { Component, NgModule, OnInit } from '@angular/core';
import { ClassModel } from '../../model/ClassModel';
import { ManageService } from '../../services/manage-service';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentService } from '../../services/student-service';
import { StudentModel } from '../../model/StudentModel';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

  
@Component({
  selector: 'app-id-card',
  templateUrl: './id-card.component.html',
  styleUrl: './id-card.component.css'
})
export class IdCardComponent  implements OnInit{
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
 className:any;
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
    studentId: new FormControl('', Validators.required),
   
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
    
    this.studentService.getStudent(this.searchData.studentId).subscribe((data: any[]) => {
      this.student = data;
   });
   this.mangeService.getclassById(this.searchData.classId).subscribe((data: any) => {
    this.className = data;
   
 });
   
   if(this.searchData.studentId>0){
    this.visible=true;
   }
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
}
