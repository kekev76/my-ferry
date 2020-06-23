import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ferry-action',
  templateUrl: './ferry-action.component.html',
  styleUrls: ['./ferry-action.component.css']
})
export class FerryActionComponent implements OnInit {

  accessLeftOpen:Boolean = false;
  accessRightOpen:Boolean = false;


  @Output() accessRight = new EventEmitter<Boolean>();
  @Output() accessLeft = new EventEmitter<Boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  accessLeftActivate(){
    this.accessLeftOpen = !this.accessLeftOpen;
    this.accessLeft.emit(this.accessLeftOpen)
  }
  accessRightActivate(){
    this.accessRightOpen = !this.accessRightOpen;
    this.accessRight.emit(this.accessRightOpen)

  }

}
