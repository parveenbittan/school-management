import { Component, NgModule, OnInit } from '@angular/core';
import { ExamMasterModel } from '../../model/ExamMasterModel';
import { ManageService } from '../../services/manage-service';

import { FormGroup, FormControl, Validators } from '@angular/forms';

  
@Component({
  selector: 'app-subject',
 
   // imports: [FormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent  implements OnInit{
  //board: ComesUnder,
  myForm :any;
 posts :any;
 postData : any;
 constructor(private mangeService: ManageService) { 
  this.postData={
    postId: 0, 
   postName : '', 
    postCode : '',
    isActive :true,
    salary:'',
    pf :'',
} 
  this.posts=[];
  
}
ngOnInit(): void {
  this.myForm = new FormGroup({
    postId: new FormControl('', Validators.nullValidator),
    name: new FormControl('', Validators.required),
    code: new FormControl('', [Validators.required, Validators.email]),
    isActive: new FormControl('', Validators.required),
   salary: new FormControl('', Validators.required),
    pf: new FormControl('', Validators.required)
  });
  this.mangeService.getPostList().subscribe((data: any[]) => {
    this.posts = data;
 });

}
  addNewPost() {
    this.postData={
      postId: 0, 
   postName : '', 
    postCode : '',
    isActive :true,
    salary:'',
    pf :'',
  }
}
  editPost(pos:any) {
    this.postData={
      postId: pos.postId, 
      postName : pos.postName, 
       postCode : pos.postCode,
       isActive :pos.isActive,
       salary:pos.salary,
       pf :pos.pf,
     
    }
  }
  onSubmit(){
    if(this.postData.postName !='' && this.postData.postCode !='' ){
    if (confirm("Are you sure to save Post ?")) {
      this.mangeService.savePost(this.postData).subscribe((data: any) => {
        this.posts = data;
     });
    } else {
     
    }
    this.addNewPost();
    this.ngOnInit();  
    location.reload(); 
  }
}
}
