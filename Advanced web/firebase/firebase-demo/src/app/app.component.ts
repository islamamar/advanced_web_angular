import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { from, Observable, Subscription } from 'rxjs';   




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'firebase-demo'; 
  // courses : any  = [] ;  
  // subscription : Subscription 
  courses$; 
  author$ ;  
  course$; 

  constructor( private db : AngularFireDatabase){  
    this.courses$= db.list('/courses').valueChanges(); 
    this.course$ = db.object('/courses/1').valueChanges();  
    this.author$= db.object('/author/1').valueChanges(); 
    console.log( this.courses$) ; 
    // this.subscription=db.list('/courses').valueChanges()
    // .subscribe(course =>{ 
    //   this.courses= course; 
    //   console.log(course);  
    // })  
  }
  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe(); 
  // } 

add(input:HTMLInputElement){
  console.log("asdasdas");
  this.courses$.push(input.value) ; 
  input.value= ' ';

}  
onUpdate(course){ 
  // console.log(course)  ;  
   console.log(course.payload.val())  ; 
  this.db.object('/courses/1'+ course.key)
  .set(course+' updated'); 

}



}
