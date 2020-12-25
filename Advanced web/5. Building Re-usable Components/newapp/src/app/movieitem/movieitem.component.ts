import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movieitem',
  templateUrl: './movieitem.component.html',
  styleUrls: ['./movieitem.component.css']
})
export class MovieitemComponent implements OnInit { 
  _movie 
  @Input() 
  set movie(movie: Movie){  
    this._movie= movie;  

  } 
  @Output() remove = new EventEmitter();  
  @Output() adding = new EventEmitter(); 
  constructor() { }

  ngOnInit(): void { 
    
  } 
  onRemove(mov)
  {
    this.remove.emit(mov); 
  } 
  onadding(mov){ 
    this.adding.emit(mov); 

  }

}
