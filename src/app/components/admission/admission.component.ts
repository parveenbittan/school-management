import { Component, NgModule, OnDestroy, OnInit } from '@angular/core';
import { ClassModel } from '../../model/ClassModel';
import { ManageService } from '../../services/manage-service';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentService } from '../../services/student-service';
import { StudentModel } from '../../model/StudentModel';
import { Router } from '@angular/router';
import { DataService } from '../../services/DataService';
import { Subscription } from 'rxjs';


  
@Component({
  selector: 'app-admission',
 
   // imports: [FormsModule],
  templateUrl: './admission.component.html',
  styleUrl: './admission.component.css'
})
export class AdmissionComponent  implements OnInit,OnDestroy {
  //board: ComesUnder,
  
  message:any;
  subscription: any;
  visible:boolean;
  myForm :any;
  searchForm :any;
  activeSessions: any;
  activeClasses:any
   students :any;
 studentData : any;
 searchData :any;
 constructor(private mangeService: ManageService,private studentService: StudentService,private router: Router,private data: DataService) { 

  
 
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
    photo : '', 
    boardRegistraion:''
	
	
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
  
  this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
 
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
    boardRegistraion : new FormControl('', Validators.required),
  });
 
  
  this.studentService.getStudentList(this.searchData).subscribe((data: any[]) => {
    this.students = data;
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
    photo : '', 
    boardRegistraion:''
    
  } 
  this.visible=true 
  }
  editStudent(sub:any,count :number) {
    
    if (sub != null) {
      this.studentData=sub; 
    }

  this.visible=true;
    
     /*this.studentData={
        studentId: sub.studentId, 
        classId : sub.classId, 
        className :sub.className, 
        sessionId :sub.sessionId, 
        sessionName:sub.sessionName, 
        name: sub.name, 
        fatherName: sub.fatherName, 
        motherName : sub.motherName, 
        isActive:sub.isActive, 
        contact1: sub.contact1, 
        contact2: sub.contact2, 
        currentAddress:sub.currentAddress, 
        permanentAddress: sub.permanentAddress, 
        adhar :sub.adhar, 
        bloodGroup:sub.bloodGroup, 
        dob:sub.dob, 
    admissionDate:sub.admissionDate,
    photo : sub.photo,
    }*/ 
  }

  onSubmit(){
    if(this.studentData.classId >0 &&this.studentData.sessionId >0 && this.studentData.name !='' &&  this.studentData.fatherName!='' && this.studentData.motherName!='' && this.studentData.adhar!=''&& this.studentData.dob!=''){
   
    if (confirm("Are you sure to save Student ?")) {
      this.studentService.saveStudent(this.studentData).subscribe((data: any) => {
        this.studentData = data;
     });
    }
   
    this.addNewStudent();
    this.studentService.getStudentList(this.searchData).subscribe((data: any[]) => {
      this.students = data;
   });  
    location.reload(); 
  }else{
    alert('Required session, class, name ,father name,mother name,adhar,DOB.');
  }
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
  photoStudent(sub:any){
    
    this.data.changeMessage(sub.studentId)
    this.router.navigateByUrl('school/photo-upload');

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
