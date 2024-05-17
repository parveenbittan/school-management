import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent implements OnInit {
 
  orgname:any;
  affidiateno:any;
  orgaddress:any;
  orgemail:any;
  contact:any;
  contact2:any;
  board:any;
  constructor(){
    this.orgname= sessionStorage.getItem('orgname');
    this.affidiateno= sessionStorage.getItem('affidiateno');
    this.orgaddress= sessionStorage.getItem('orgaddress');
    this.orgemail= sessionStorage.getItem('orgemail');
    this.contact= sessionStorage.getItem('contact');
    this.contact2= sessionStorage.getItem('contact2');
    this.board= sessionStorage.getItem('board');
  }
  ngOnInit(): void {
    
  }
  
}
