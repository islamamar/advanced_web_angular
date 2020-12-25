import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student = [] 
  constructor( public stService: StudentService) {
    this.student = stService.getStudent(); 
   } 
 

  
 newStudent = this.student[0] ; 

  ngOnInit(): void {
  } 
  getStudent(arg:Student)
  {
    this.student.push(arg);
  }
  onUpdate(st:Student){
    let index = this.student.indexOf(st); 
    this.student[index].name = 'updateted';  
    this.student[index].gpa = 77; 
    this.student[index].instructor = 'sss'; 
    this.student[index].university = 'hhhhh'; 

  } 
  onRemove(st){ 
    
    let index = this.student.indexOf(st); 
    this.student.splice(index,1); 
  }

}
