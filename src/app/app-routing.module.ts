import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

import { ComesUnderComponent } from './components/comes-under/comes-under.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SessionComponent } from './components/session/session.component';
import { SubjectComponent } from './components/subject/subject.component';
import { ExamComponent } from './components/exam/exam.component';
import { PostComponent } from './components/post/post.component';
import { AdmissionComponent } from './components/admission/admission.component';
import { ItemComponent } from './components/item/item.component';
import { ClassSubjectComponent } from './components/class-subject/class-subject.component';
import { RelievingComponent } from './components/relieving/relieving.component';
import { ReportCardComponent } from './components/report-card/report-card.component';
import { CharacterComponent } from './components/character/character.component';
import { EmpDetailComponent } from './components/emp-detail/emp-detail.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ContactComponent } from './components/contact/contact.component';
import { EmpRelievingComponent } from './components/emp-relieving/emp-relieving.component';
import { EmpJoiningComponent } from './components/emp-joining/emp-joining.component';
import { EmpExperienceComponent } from './components/emp-experience/emp-experience.component';
import { FeeComponent } from './components/fee/fee.component';
import { FeeReportComponent } from './components/fee-report/fee-report.component';
import { AttendenceComponent } from './components/attendence/attendence.component';
import { ExamClassComponent } from './components/exam-class/exam-class.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { IdCardComponent } from './components/id-card/id-card.component';

const routes: Routes = [
  { 
   path :'',
   redirectTo : 'login',
   pathMatch : 'full'
 },
 { 
   path :'login',
   component : LoginComponent
  
 },
 { 
   path :'school',
   component : HomeComponent,
   children : [
       { 
           path :'dashboard',
           component : DashboardComponent
          
         },
         { 
           path :'class',
           component : ComesUnderComponent
          
         },
         { 
          path :'session',
          component : SessionComponent
         
        },
        { 
          path :'subject',
          component : SubjectComponent
         
        },
        { 
          path :'exam',
          component : ExamComponent
         
        },
        { 
          path :'post',
          component : PostComponent
         
        },
        { 
          path :'admission',
          component : AdmissionComponent
         
        },{ 
          path :'item',
          component : ItemComponent
         
        },
        { 
          path :'class-subject',
          component : ClassSubjectComponent
         
        },
        { 
          path :'character-certificate',
          component : CharacterComponent
         
        },
        { 
          path :'report-card',
          component : ReportCardComponent
         
        },
        { 
          path :'relieving',
          component : RelievingComponent
         
        },
        { 
          path :'emp-relieving',
          component : EmpRelievingComponent
         
        },
        { 
          path :'emp-joining',
          component : EmpJoiningComponent
         
        },
        { 
          path :'emp-experience',
          component : EmpExperienceComponent
         
        },
        { 
          path :'emp-detail',
          component : EmpDetailComponent
         
        },
        { 
          path :'change-password',
          component : ChangePasswordComponent
         
        },
        {
          path:'contact',
          component : ContactComponent
        },
        {
          path:'fee',
          component : FeeComponent
        },
        {
          path:'fee-report',
          component : FeeReportComponent
        },
        {
          path:'attendence',
          component : AttendenceComponent
        },
        {
          path:'exam-class',
          component : ExamClassComponent
        },
        {
          path:'photo-upload',
          component : FileUploadComponent
        },
        {
          path:'id-card',
          component : IdCardComponent
        }
        
   ]
 }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
