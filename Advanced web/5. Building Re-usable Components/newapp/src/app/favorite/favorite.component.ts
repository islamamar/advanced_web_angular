import { Component, OnInit, Output ,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  inputs: ['isfavorite']
})
export class FavoriteComponent implements OnInit { 
   @Input()isfavorite: boolean ;  
   @Output() change = new EventEmitter();  

  constructor() { }

  ngOnInit(): void { 

  }   
  onClick() {
    this.change.emit(); 
  }

  

}
