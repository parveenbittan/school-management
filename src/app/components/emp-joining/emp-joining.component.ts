import { Component, NgModule, OnInit } from '@angular/core';
import { ClassModel } from '../../model/ClassModel';
import { ManageService } from '../../services/manage-service';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentService } from '../../services/student-service';
import { StudentModel } from '../../model/StudentModel';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { EmployeeService } from '../../services/EmployeeService';

  
@Component({
  selector: 'app-emp-joining',
  templateUrl: './emp-joining.component.html',
  styleUrl: './emp-joining.component.css'
})
export class EmpJoiningComponent  implements OnInit{
 //board: ComesUnder,

 visible:boolean;
 myForm :any;
 searchForm :any;
 activePosts: any;
 
 
  employees :any;
  employee :any;
searchData :any;
orgname:any;
affidiateno:any;
orgaddress:any;
orgemail:any;
contact:any;
contact2:any;
board:any;
constructor(private mangeService: ManageService,private employeeService: EmployeeService) { 
 this.orgname= sessionStorage.getItem('orgname');
   this.affidiateno= sessionStorage.getItem('affidiateno');
   this.orgaddress= sessionStorage.getItem('orgaddress');
   this.orgemail= sessionStorage.getItem('orgemail');
   this.contact= sessionStorage.getItem('contact');
   this.contact2= sessionStorage.getItem('contact2');
   this.board= sessionStorage.getItem('board');
 this.searchData={
  postId: 0,
  employeeId: 0,
   
   
 }
 
 this.employees=[];
 this.visible=false;
 this.mangeService.getActivePostList().subscribe((data: any[]) => {
   this.activePosts = data;
 });
 
 
}
ngOnInit(): void {
 this.searchForm = new FormGroup({
   postId: new FormControl(0, Validators.nullValidator),
   employeeId: new FormControl(0, Validators.nullValidator),
   
  
 });
 

 
 /*this.studentService.getStudentList(this.searchData).subscribe((data: any[]) => {
   this.students = data;
});*/
}

 
employeeList(){

 this.employeeService.getEmployeeList(this.searchData).subscribe((data: any[]) => {
   this.employees = data;
});
 
  this.visible=false;
  

 }
 character(){
   
   this.employeeService.getEmployee(this.searchData.employeeId).subscribe((data: any[]) => {
     this.employee = data;
  });
  
  if(this.searchData.employeeId>0){
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
