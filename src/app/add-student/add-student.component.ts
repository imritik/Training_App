import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  genders = ['male', 'female'];
  userData = {
    username: '',
    mobile:'',
    email: '',
    country: '',
    gender: '',
    check:''
  };
  submitted = false;
 
  
onSubmit(form:any,formData:any):void {
    console.log('submitted formdata',formData);  
    
    alert('Form submitted');
    
    form.reset();
  }
  constructor() { }

  ngOnInit() {
  }

}
