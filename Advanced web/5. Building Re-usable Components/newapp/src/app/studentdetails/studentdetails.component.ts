import { Component, EventEmitter, Input, OnInit , Output} from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {

  constructor() { } 
  @Input() student : Student ;   
  @Output() adding = new EventEmitter();    
  @Output() update = new EventEmitter(); 
  @Output() remove = new EventEmitter(); 

  studentValue = new Student(3,'mohammad', 998, "newinstructor","ppu")

  ngOnInit(): void {
  }  
  onAdd()
  { 
    this.adding.emit(this.studentValue)

  } 
  onUpdate(student: Student){
      this.update.emit(student)
  } 
  onRemove(student){
    this.remove.emit(student) ; 
  }
   

}
