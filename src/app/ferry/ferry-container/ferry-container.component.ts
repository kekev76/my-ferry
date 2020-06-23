import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-ferry-container',
  templateUrl: './ferry-container.component.html',
  styleUrls: ['./ferry-container.component.css']
})
export class FerryContainerComponent implements OnInit {

  accessRightOpen: Boolean;
  accessLeftOpen: Boolean;

  constructor() { }

  ngOnInit(): void {
    this.accessLeftOpen = false;
    this.accessRightOpen = false;
  }

  onAccessRightChange(open: Boolean){
    this.accessRightOpen = open
  }

  onAccessLeftChange(open: Boolean){
    this.accessLeftOpen = open
  }
}
