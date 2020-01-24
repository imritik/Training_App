import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
name='TEST';
flag=true;
email='training@tek.com';
Fathername='TEST';
Mothername='Test';
pid='474739';

  constructor() { }

  ngOnInit() {
  }

}
