import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  isactivated : boolean; 
  constructor() { }  
  filmarray :Movie[] = [] ; 
  movie :Movie[] =  [
    new  Movie("film1", 'action',99) ,
    new  Movie("film2", 'action',98) ,
    new  Movie("film3", 'action',44) ,
    new  Movie("film4", 'action',23) 

  ]  
  counterarray= [] ; 
  onRemove(arg){
    let index = this.movie.indexOf(arg); 
    this.movie.splice(index,1); 
  }
  addWatchList(mov){ 
    let index = this.movie.indexOf(mov);   
    let arrayindex = this.filmarray.indexOf(mov); 
    if (arrayindex == -1)
    this.filmarray.push(this.movie[index]);   
    // console.log(this.filmarray);
  } 
  Toggle(){ 
    this.isactivated =!this.isactivated ;  
    this.counterarray.push(this.counterarray.length+1 ); 
  } 
  

  ngOnInit(): void {
  }

}
