import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/EmployeeService';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent implements OnInit {

loginObj :any;
userSession :any;
constructor(private router: Router,private empService : EmployeeService){
  this.loginObj={
username : '',
password: ''
  };
}
ngOnInit(): void {
  
}
login(){
  
  this.empService.login(this.loginObj).subscribe((data: any[]) => {
    this.userSession = data;
  
 });
 
  if(this.userSession.isAuth){ 
    sessionStorage.setItem('username',this.userSession.username);
    sessionStorage.setItem('role',this.userSession.role);
    sessionStorage.setItem('orgname',this.userSession.orgname);
    sessionStorage.setItem('affidiateno',this.userSession.affidiateno);
    sessionStorage.setItem('ownername',this.userSession.ownername);
    sessionStorage.setItem('orgaddress',this.userSession.orgaddress);
    sessionStorage.setItem('orgemail',this.userSession.orgemail);
    sessionStorage.setItem('contact',this.userSession.contact);
    sessionStorage.setItem('contact2',this.userSession.contact2);
    sessionStorage.setItem('board',this.userSession.board);
    this.router.navigateByUrl('school/dashboard');
  }else{
  sessionStorage.clear();
   alert('Please enter correct ID and password') ;
  }
}
}
