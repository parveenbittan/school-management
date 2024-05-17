import { Component, NgModule, OnInit } from '@angular/core';
import { ClassModel } from '../../model/ClassModel';
import { ManageService } from '../../services/manage-service';

import { FormGroup, FormControl, Validators } from '@angular/forms';

  
@Component({
  selector: 'app-session',
 
   // imports: [FormsModule],
  templateUrl: './session.component.html',
  styleUrl: './session.component.css'
})
export class SessionComponent  implements OnInit{
  //board: ComesUnder,
  myForm :any;
 sessions :any;
 sessionData : any;
 constructor(private mangeService: ManageService) { 
  this.sessionData={
    sessionId: 0, 
    sessionName : '', 
    sessionCode : '',
    isActive :true,
} 
  this.sessions=[];
  
}
ngOnInit(): void {
  this.myForm = new FormGroup({
    sessionId: new FormControl('', Validators.nullValidator),
    name: new FormControl('', Validators.required),
    code: new FormControl('', [Validators.required, Validators.email]),
    isActive: new FormControl('', Validators.required)
  });
  this.mangeService.getSessionList().subscribe((data: any[]) => {
    this.sessions = data;
 });

}
  addNewSession() {
    this.sessionData={
      sessionId: 0, 
      sessionName : '', 
      sessionCode : '',
      isActive :true,
  } 
  }
  editSession(sess:any) {
    this.sessionData={
      sessionId: sess.sessionId, 
      sessionName : sess.sessionName, 
      sessionCode : sess.sessionCode,
      isActive :sess.isActive, 
    }
    
  }
  onSubmit(){
    if(this.sessionData.sessionName !='' && this.sessionData.sessionCode !='' ){
   
    if (confirm("Are you sure to save Session ?")) {
      this.mangeService.saveSession(this.sessionData).subscribe((data: any) => {
        this.sessions = data;
     });
    } else {
     
    }
    this.addNewSession();
    this.ngOnInit();  
    location.reload(); 
  }
}

}
