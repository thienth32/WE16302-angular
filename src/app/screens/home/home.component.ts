import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listStudents: Array<any> = [];
  studentData = {
    fullname: "",
    username: "",
    email: "",
    password: "",
    gender: "",
    birthday: "",
    schoolfee: 0,
  }
  
  constructor(private studentService: StudentService) { }
  keyword: string = "";
  ngOnInit(): void {
    this.getStudent();
  }
  getStudent(searchKeyword: string = ""){
    this.studentService.list(searchKeyword)
      .subscribe(data => {
        this.listStudents = data;
      })
  }

  search(){
    this.getStudent(this.keyword);
  }

  addStudent(){
    this.studentService.addNew(this.studentData)
      .subscribe(newStudent => {
        this.listStudents.push(newStudent);
      });
  }

}
