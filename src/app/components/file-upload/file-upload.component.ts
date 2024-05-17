import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { FileUploadService } from '../../services/file-upload.service';
import { Router } from '@angular/router';
import { DataService } from '../../services/DataService';


@Component({
  selector: 'app-file-upload',
  //standalone: true,
 // imports: [CommonModule],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css',
  
})
export class FileUploadComponent implements OnInit, OnDestroy {
  studentId:any;
  subscription: any;
  currentFile?: File;
  message = '';
  fileInfos?: Observable<any>;

  constructor(private uploadService: FileUploadService,private router: Router,private data: DataService ) {}

  ngOnInit(): void {
    this.subscription = this.data.currentMessage.subscribe(message => this.studentId = message)
   
  }

  selectFile(event: any): void {
    this.message = '';
    this.currentFile = event.target.files.item(0);
  
  }
  back(){
    this.router.navigateByUrl('school/admission');

  }
  upload(): void {
   
    if (this.currentFile) {
      this.uploadService.upload(this.currentFile,this.studentId).subscribe((data: any) => {
        //this.userSession = data;
 
      });
    }
    alert("Photo uploaded");
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}