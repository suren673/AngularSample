import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {

  constructor(public service: EmployeeService, public dilogBox: MatDialogRef<EditEmpComponent>) { }

  ngOnInit(): void {
  }
  OnClose(): void {
    this.dilogBox.close();
  }
  onSubmit(form: NgForm) {
    this.service.updateEmployee(form.value);
    }
}
