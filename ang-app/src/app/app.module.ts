import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSortModule} from '@angular/material/sort';

import { HttpClientModule } from '@angular/common/http';

import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

import { EmployeeComponent } from './employee/employee.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { EditEmpComponent } from './employee/edit-emp/edit-emp.component';
import { AddEmpComponent } from './employee/add-emp/add-emp.component';
import { DepartmentComponent } from './department/department.component';
import { ShowDepComponent } from './department/show-dep/show-dep.component';
import { EditDepComponent } from './department/edit-dep/edit-dep.component';
import { AddDepComponent } from './department/add-dep/add-dep.component';

import {EmployeeService} from 'src/app/services/employee.service';
import {DepartmentService} from 'src/app/services/department.service';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeComponent,
    ShowEmpComponent,
    EditEmpComponent,
    AddEmpComponent,
    DepartmentComponent,
    ShowDepComponent,
    EditDepComponent,
    AddDepComponent
  ],
  imports: [
    BrowserModule, FormsModule, MatInputModule, BrowserAnimationsModule,
    MatTableModule, MatIconModule, MatButtonModule, HttpClientModule, MatSortModule, MatDialogModule, MatDatepickerModule, AppRoutingModule
  ],
  providers: [EmployeeService, DepartmentService],
  bootstrap: [AppComponent],
  entryComponents: [AddDepComponent, EditDepComponent, AddEmpComponent, EditEmpComponent]
})
export class AppModule { }
