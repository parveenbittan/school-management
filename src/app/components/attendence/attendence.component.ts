import { Component, NgModule, OnInit } from '@angular/core';
import { ClassModel } from '../../model/ClassModel';
import { ManageService } from '../../services/manage-service';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentService } from '../../services/student-service';
import { StudentModel } from '../../model/StudentModel';


  
@Component({
  selector: 'app-attendence',
 
   // imports: [FormsModule],
  templateUrl: './attendence.component.html',
  styleUrl: './attendence.component.css'
})
export class AttendenceComponent  implements OnInit{
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
    name :'',
    attendenceDate:(new Date()).toISOString().substring(0,10)

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
    photo : '' ,
    attendence:{
      isPresent: false,
      attendenceDate:(new Date()).toISOString().substring(0,10)
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
    sclass: new FormControl('', Validators.nullValidator),
    ssession: new FormControl('', Validators.nullValidator),
    sname: new FormControl('', Validators.required),
    attendenceDate: new FormControl((new Date()).toISOString().substring(0,10), Validators.required)
  });
  
 
  
 
}

  onSearch(){
   


    if(this.searchData.classId>0 && new Date(this.searchData.attendenceDate) < new Date()){
        this.studentService.getStudentAttendenceList(this.searchData).subscribe((data: any[]) => {
      this.students = data;
      
      
   });
   
    }else{
      alert('Please check class is selected and attendence date is not greater than current date');
    }
  }
  checked(){
  let check :any=document.getElementById("checkAll");

var allInputs = document.getElementsByTagName("input");
if(check.checked==true){

for (var i = 0, max = allInputs.length; i < max; i++){
    if (allInputs[i].type === 'checkbox')
        allInputs[i].checked = true;
}
}else{
  for (var i = 0, max = allInputs.length; i < max; i++){
    if (allInputs[i].type === 'checkbox')
        allInputs[i].checked = false;
}
}
 }
 saveAttendence(stdents :any){
  
   for (let i = 0; i < stdents.length; i++) {
    let el:any=document.getElementById(""+i);
    stdents[i].attendence.attendenceDate=this.searchData.attendenceDate;
    stdents[i].attendence.isPresent=el.checked;
 

 }
 
 this.studentService.saveAttendence(stdents).subscribe((data: any[]) => {
  this.students = data;
  
  
});
alert("Saved Successfully")
if(this.searchData.classId>0 && new Date(this.searchData.attendenceDate) < new Date()){
  this.studentService.getStudentAttendenceList(this.searchData).subscribe((data: any[]) => {
this.students = data;


});

}
  }


 clear(){
  window.location.reload();
}
}
