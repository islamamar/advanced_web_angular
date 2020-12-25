import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  watchList = [] 
  @Input()  
  set watchlist(watlist:Movie[]){ 
    console.log("mmmm", watlist);
    this.watchList= watlist ;     
  }

  constructor() { }

  ngOnInit(): void {
  }

}

