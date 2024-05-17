import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ComesUnderComponent } from './components/comes-under/comes-under.component';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import {  SessionComponent } from './components/session/session.component';
import { SubjectComponent } from './components/subject/subject.component';
import { ExamComponent } from './components/exam/exam.component';
import { PostComponent } from './components/post/post.component';
import { AdmissionComponent } from './components/admission/admission.component';
import { ItemComponent } from './components/item/item.component';
import { ClassSubjectComponent } from './components/class-subject/class-subject.component';
import { ReportCardComponent } from './components/report-card/report-card.component';
import { RelievingComponent } from './components/relieving/relieving.component';
import { CharacterComponent } from './components/character/character.component';
import { EmpDetailComponent } from './components/emp-detail/emp-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ContactComponent } from './components/contact/contact.component';
import { EmpJoiningComponent } from './components/emp-joining/emp-joining.component';
import { EmpExperienceComponent } from './components/emp-experience/emp-experience.component';
import { EmpRelievingComponent } from './components/emp-relieving/emp-relieving.component';
import { FeeComponent } from './components/fee/fee.component';
import { FeeReportComponent } from './components/fee-report/fee-report.component';
import { AttendenceComponent } from './components/attendence/attendence.component';
import { ExamClassComponent } from './components/exam-class/exam-class.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { IdCardComponent } from './components/id-card/id-card.component';





@NgModule({
  declarations: [
    AppComponent,ComesUnderComponent, SessionComponent, SubjectComponent, ExamComponent, PostComponent, AdmissionComponent, ItemComponent, ClassSubjectComponent, ReportCardComponent, RelievingComponent, CharacterComponent, EmpDetailComponent,DashboardComponent, ChangePasswordComponent, ContactComponent, EmpJoiningComponent, EmpExperienceComponent, EmpRelievingComponent, FeeComponent, FeeReportComponent, AttendenceComponent, ExamClassComponent, FileUploadComponent, IdCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
