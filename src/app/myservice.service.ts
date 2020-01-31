import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  private finaldata = [];
  private apiurl = "http://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) { }
  getData(): Observable<IData[]> {
    return this.http.get<IData[]>(this.apiurl);
  }
}
export interface IData {
  userId: string;
  id: number;
  title: string;
  body: string
}