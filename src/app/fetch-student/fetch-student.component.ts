import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './../myservice.service';

@Component({
  selector: 'app-fetch-student',
  templateUrl: './fetch-student.component.html',
  styleUrls: ['./fetch-student.component.css']
})
export class FetchStudentComponent implements OnInit {
  public persondata = [];
  constructor(private myservice: MyserviceService) { }

  ngOnInit() {
    this.myservice.getData().subscribe((data) => {
      this.persondata = Array.from(Object.keys(data), k=>data[k]);
      console.log(this.persondata);
  });

}
}