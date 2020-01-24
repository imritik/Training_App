import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-studentreactive',
  templateUrl: './add-studentreactive.component.html',
  styleUrls: ['./add-studentreactive.component.css']
})
export class AddStudentreactiveComponent implements OnInit {
  registerForm: FormGroup;
    submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm=this.formBuilder.group({
      title:['',Validators.required],
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmPassword:['',Validators.required],
      acceptTerms:[false,Validators.requiredTrue]
    },{
    //  validator:MustMatch('password','confirmPassword') 
    });
  }
  get f() { return this.registerForm.controls; }
  onSubmit(){
    this.submitted=true;
    if(this.registerForm.invalid){
      return;
    }
    console.log(this.registerForm.value);
  }

  onReset(){
    this.submitted=false;
    this.registerForm.reset();
  }
}
