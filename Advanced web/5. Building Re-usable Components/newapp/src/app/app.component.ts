import { Component, EventEmitter, ɵbypassSanitizationTrustResourceUrl } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newapp';  
  newValueParent = false;  
  Post = {
    title : "titlte",
    isFavorite : false 
  } 
  onChangeEvent(event) {
    console.log(" favorite changed " , event) ; 
  }   

 


}
