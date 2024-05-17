import { Component, NgModule, OnInit } from '@angular/core';
import { ClassModel } from '../../model/ClassModel';
import { ManageService } from '../../services/manage-service';

import { FormGroup, FormControl, Validators } from '@angular/forms';

  
@Component({
  selector: 'app-subject',
 
   // imports: [FormsModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent  implements OnInit{
  //board: ComesUnder,
  myForm :any;
 items :any;
 itemData : any;
 constructor(private mangeService: ManageService) { 
  this.itemData={
    itemId: 0, 
   itemName : '', 
    itemCode : '',
    isActive :true,
} 
  this.items=[];
  
}
ngOnInit(): void {
  this.myForm = new FormGroup({
    itemId: new FormControl('', Validators.nullValidator),
    name: new FormControl('', Validators.required),
    code: new FormControl('', [Validators.required, Validators.email]),
    isActive: new FormControl('', Validators.required)
  });
  this.mangeService.getItemList().subscribe((data: any[]) => {
    this.items = data;
 });

}
  addNewItem() {
    this.itemData={
      itemId: 0, 
     itemName : '', 
      itemCode : '',
      isActive :true,
  } 
  }
  editItem(sub:any) {
    this.itemData={
      itemId: sub.itemId, 
      itemName : sub.itemName, 
      itemCode : sub.itemCode,
      isActive :sub.isActive, 
    }
    
  }
  onSubmit(){
    if(this.itemData.itemName !='' && this.itemData.itemCode !='' ){
    if (confirm("Are you sure to save Item ?")) {
      this.mangeService.saveItem(this.itemData).subscribe((data: any) => {
        this.items = data;
     });
    } else {
     
    }
    this.addNewItem();
    this.ngOnInit();  
    location.reload(); 
  }
}
}
