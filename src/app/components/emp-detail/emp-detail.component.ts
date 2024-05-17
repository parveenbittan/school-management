import { Component, NgModule, OnInit } from '@angular/core';
import { ClassModel } from '../../model/ClassModel';
import { ManageService } from '../../services/manage-service';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentService } from '../../services/student-service';
import { StudentModel } from '../../model/StudentModel';
import { EmployeeService } from '../../services/EmployeeService';


  
@Component({
  selector: 'app-emp-detail',
 
   // imports: [FormsModule],
  templateUrl: './emp-detail.component.html',
  styleUrl: './emp-detail.component.css'
})
export class EmpDetailComponent  implements OnInit{
  //board: ComesUnder,

  visible:boolean;
  myForm :any;
  searchForm :any;
  activePosts: any;
 
   employees :any;
 employeeData : any;
 searchData :any;
 constructor(private mangeService: ManageService,private employeeService: EmployeeService) { 
  this.searchData={
    postId: 0,    
    name :''
  }
  this.employeeData={
    empId: 0,
   
    postId :0,
    postName:'',
    name: '',
    fatherName: '',
    isActive:true,
    contact1: '',
    contact2: '',
    currentAddress: '',
    permanentAddress: '',
    adhar :'',
    bloodGroup:'',
    gender:'',
    dob: '',
    joinDate:'' ,
    releavingDate :'' ,
    updateDate :'' ,
    photo : '' 
   
	
	
} 
  this.employees=[];
  this.visible=false;
  this.mangeService.getActivePostList().subscribe((data: any[]) => {
    this.activePosts = data;
  });
  
  
}
ngOnInit(): void {
  this.searchForm = new FormGroup({
    spost: new FormControl(0, Validators.nullValidator),
    sname: new FormControl('', Validators.required),
  });
  this.myForm = new FormGroup({
    post: new FormControl(0, Validators.nullValidator),
    empId: new FormControl(0, Validators.nullValidator), 
    name: new FormControl('', Validators.required),
   
   
    fatherName: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    adhar: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    currentAddress: new FormControl('', Validators.required),
    permanentAddress: new FormControl('', Validators.required),
    contact1: new FormControl('', Validators.required),
    contact2: new FormControl('', Validators.required),
    bloodGroup: new FormControl('', Validators.required),
    joinDate:new FormControl('', Validators.required),
    relieveDate:new FormControl('', Validators.required),
    isActive: new FormControl('', Validators.required),
   
  });
 
  
  this.employeeService.getEmployeeList(this.searchData).subscribe((data: any[]) => {
    this.employees = data;
 });
}
addNewStudent() {
  this.employeeData={
    empId: 0,
   
    postId :0,
    postName:'',
    name: '',
    fatherName: '',
    isActive:true,
    contact1: '',
    contact2: '',
    currentAddress: '',
    permanentAddress: '',
    adhar :'',
    bloodGroup:'',
    gender:'',
    dob: '',
    joinDate:'' ,
    releavingDate :'' ,
    updateDate :'' ,
    photo : '' 
   
	
	
} 
  this.visible=true 
  }
  editStudent(sub:any,count :number) {
    
    if (sub != null) {
      this.employeeData=sub; 
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
    if(this.employeeData.postId >0  && this.employeeData.name !='' &&  this.employeeData.fatherName!=''  && this.employeeData.adhar!=''&& this.employeeData.dob!=''){
   
    if (confirm("Are you sure to save Employee ?")) {
      this.employeeService.saveEmp(this.employeeData).subscribe((data: any) => {
        this.employeeData = data;
     });
    }
   
    this.addNewStudent();
    this.employeeService.getEmployeeList(this.searchData).subscribe((data: any[]) => {
      this.employees = data;
   });  
    location.reload(); 
  }else{
    alert('Required session, class, name ,father name,mother name,adhar,DOB.');
  }
  }
  onSearch(){
    this.employeeService.getEmployeeList(this.searchData).subscribe((data: any[]) => {
      this.employees = data;
   });
   this.visible=false;
   this.searchData={
    postId: 0,    
    name :''
  } 
  }
  closeForm(){    
    this.visible=false;   

  }
  uploadImage(data:any){
    
  }
}
