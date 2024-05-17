import { Component, NgModule, OnInit } from '@angular/core';
import { ClassModel } from '../../model/ClassModel';
import { ManageService } from '../../services/manage-service';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentService } from '../../services/student-service';
import { StudentModel } from '../../model/StudentModel';


  
@Component({
  selector: 'app-dashboard',
 
   // imports: [FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent  implements OnInit{
  //board: ComesUnder,

  visible:boolean;
  myForm :any;
  searchForm :any;
  activeSessions: any;
  activeClasses:any
   students :any;
 studentData : any;
 searchData :any;
 constructor(private mangeService: ManageService,private studentService: StudentService) { 
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
 
  
  this.studentService.getStudentList(this.searchData).subscribe((data: any[]) => {
    this.students = data;
 });
}

  onSearch(){
        this.studentService.getStudentList(this.searchData).subscribe((data: any[]) => {
      this.students = data;
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
  uploadImage(data:any){
    
  }
}
