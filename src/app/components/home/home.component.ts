import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, NgModule, OnInit, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-home',
  //exportAs :[],
  standalone: true,
  imports: [SidebarComponent,RouterLinkActive,RouterOutlet,RouterLink,CommonModule,ReactiveFormsModule],

  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
})

export class HomeComponent implements OnInit{
  @ViewChild('content') content: ElementRef;

  constructor(private router: Router,elem: ElementRef){
   this.content= elem;
  }
  ngOnInit(): void {
    history.pushState(null, '');
  }
  
   

  }

