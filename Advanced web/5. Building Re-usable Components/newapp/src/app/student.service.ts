import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  student :Student [] =  [
    new Student(13,'islam', 88, ' mohammad', 'ppu'), 
    new Student(13,'islam', 88, ' mohammad', 'ppu'), 
    new Student(13,'islam', 88, ' mohammad', 'ppu'), 
    new Student(13,'islam', 88, ' mohammad', 'ppu'),
  ]
  getStudent(){
    return this.student; 
  } 
  addstudent(student)
  {
    this.student.push(student); 
  } 
  onRemove(student){
    let index = this.student.indexOf(student);
    this.student.splice(index,1) ; 
  }
  constructor() { } 
}
