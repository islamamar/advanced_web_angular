import { Component, EventEmitter, OnInit, Output , Input } from '@angular/core';

@Component({
  selector: 'app-testcom',
  templateUrl: './testcom.component.html',
  styleUrls: ['./testcom.component.css']
}) 

export class TestcomComponent implements OnInit { 
  @Input()  newValue : boolean  
  @Output() change = new EventEmitter();     
   isClicked = false ; 
  constructor() { }  
  


  ngOnInit(): void {
  } 
  onClick() { 
    this.isClicked = !this.isClicked ; 
     console.log(" test compoennt is clicked ");  
     this.change.emit(this.isClicked) ;  
     this.getValue() ; 
  } 
  getValue(){
    console.log("innnnnn" + this.newValue); 
  }
 
}
