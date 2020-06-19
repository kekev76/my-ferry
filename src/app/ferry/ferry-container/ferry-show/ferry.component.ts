import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Ferry } from '../../Ferry';

@Component({
  selector: 'app-ferry',
  templateUrl: './ferry.component.html',
  styleUrls: ['./ferry.component.css']
})
export class FerryComponent implements OnInit {

  constructor() { }

  ferry: Ferry = {
    accessRight: false,
    accessLeft: false
  };

  ngOnInit(): void {
  }

  @Input() accessRightOpen: Boolean;
  @Input() accessLeftOpen: Boolean;

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if(changes.accessLeftOpen != undefined){
      this.accessLeft(changes.accessLeftOpen.currentValue)
    }
    if(changes.accessRightOpen != undefined){
      this.accessRight(changes.accessRightOpen.currentValue)
    }
  }

  accessLeft(open:Boolean){
    if (open){
      document.getElementById('left-barre').style.transform = 'rotate(-80deg)'
    } else {
      document.getElementById('left-barre').style.transform = 'rotate(-45deg)'
    }
  }

  accessRight(open:Boolean){
    if (open){
      document.getElementById('right-barre').style.transform = 'rotate(80deg)'
    } else {
      document.getElementById('right-barre').style.transform = 'rotate(45deg)'
    }
  }

}
