
import { Component, NgModule, OnInit } from '@angular/core';
import { ClassModel } from '../../model/ClassModel';
import { ManageService } from '../../services/manage-service';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentService } from '../../services/student-service';
import { StudentModel } from '../../model/StudentModel';
import { EmployeeService } from '../../services/EmployeeService';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})

export class ChangePasswordComponent  implements OnInit{
  //board: ComesUnder,

 
  myForm :any;
  passwordData :any;
 result:any;
 constructor(private empService : EmployeeService) { 
 this.passwordData={
  username:sessionStorage.getItem('username'),
  old: '',
  new : '',
  confirm :'',
  message: ''
}

  
}
ngOnInit(): void {
 
  this.myForm = new FormGroup({
    name:new FormControl(0, Validators.nullValidator),
    old: new FormControl('', Validators.nullValidator),
    new: new FormControl('', Validators.nullValidator),
    confirm: new FormControl('', Validators.required),
   
    
   
  });
 
  
  
}


  onSubmit(){
    
    if( this.passwordData.old !='' &&this.passwordData.new !='' && this.passwordData.confirm !='' &&  this.passwordData.confirm == this.passwordData.new ){
      this.empService.changePassword(this.passwordData).subscribe((data: any[]) => {
        this.result = data;
     });
     if( this.result.message !=''){
     alert(JSON.stringify(this.result.message));
    }
    }else{
      alert('Either all detail is not filled or Confirm password not equal to New password')
    }
    this.passwordData={
      username:sessionStorage.getItem('username'),
      old: '',
      new : '',
      confirm :'',
      message: ''
    }
  }
  
  
}
