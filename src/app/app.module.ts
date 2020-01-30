import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddStudentreactiveComponent } from './add-studentreactive/add-studentreactive.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MyserviceService } from './myservice.service';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: '', component: StudentDetailsComponent },
  { path: 'Add', component: AddStudentComponent },
  { path: 'Addreactive', component: AddStudentreactiveComponent },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    AddStudentComponent,
    AddStudentreactiveComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),CommonModule,
    // AppRoutingModule,
    HttpClientModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
export class AppRoutingModule { }
