import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
 
  role:any;
  constructor(private router: Router){
    this. role=sessionStorage.getItem('role');
  }
  ngOnInit(): void {
    
  }
  comesUnder(){ 
    
    this.router.navigateByUrl('school/class');
    
    }
    session(){ 
    
      this.router.navigateByUrl('school/session');
      
      }
      subject(){ 
    
        this.router.navigateByUrl('school/subject');
        
        }
        exam(){ 
    
          this.router.navigateByUrl('school/exam');
          
          }
          post(){ 
    
            this.router.navigateByUrl('school/post');
            
            }
            admission(){ 
    
              this.router.navigateByUrl('school/admission');
              
              }
              item(){ 
    
                this.router.navigateByUrl('school/item');
                
                }
                classSubject(){ 
    
                  this.router.navigateByUrl('school/class-subject');
                  
                  }
                  rleaving(){ 
    
                    this.router.navigateByUrl('school/relieving');
                    
                    }
                    report(){ 
    
                      this.router.navigateByUrl('school/report-card');
                      
                      }
                      cc(){ 
    
                        this.router.navigateByUrl('school/character-certificate');
                        
                        }
                        employee(){
                          this.router.navigateByUrl('school/emp-detail'); 
                        }
                        changePassword(){
                          this.router.navigateByUrl('school/change-password'); 
                        }
                        dashboard(){
                          this.router.navigateByUrl('school/dashboard');
                        }
                        contact(){
                          this.router.navigateByUrl('school/contact');
                        }
                        empJoining(){
                          this.router.navigateByUrl('school/emp-joining');
                        }
                        empExperience(){
                          this.router.navigateByUrl('school/emp-experience');
                        }
                        empRelieving(){
                          this.router.navigateByUrl('school/emp-relieving');
                        }
                        fee(){
                          this.router.navigateByUrl('school/fee');
                        } 
                        feeReport(){
                          this.router.navigateByUrl('school/fee-report');
                        } 
                        attendence() 
                        {
                          this.router.navigateByUrl('school/attendence');
                        } 
                        examClass() 
                        {
                          this.router.navigateByUrl('school/exam-class');
                        } 
                        SIDCard() 
                        {
                          this.router.navigateByUrl('school/id-card');
                        } 
              logout(){ 
                sessionStorage.clear();
                this.router.navigateByUrl('/');
                
                }
}
