import { Component, OnInit, OnDestroy } from '@angular/core';
import { MyserviceService, IData } from './../myservice.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-fetch-student',
  templateUrl: './fetch-student.component.html',
  styleUrls: ['./fetch-student.component.css']
})
export class FetchStudentComponent implements OnInit, OnDestroy {
  public persondata: IData[]= [];
  private jsonSub: Subscription;
  constructor(private myservice: MyserviceService) { }

  ngOnInit() {
    this.jsonSub = this.myservice.getData().subscribe((data: IData[]) => {
      this.persondata = data;
      console.log(this.persondata);
    });

  }
  ngOnDestroy() {
    this.jsonSub.unsubscribe();
  }
}