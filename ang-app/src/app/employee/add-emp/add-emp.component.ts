import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  constructor(public dilogBox: MatDialogRef<AddEmpComponent>, public service: EmployeeService) { }

public listItems: Array<string> = [];

  ngOnInit(): void {
    this.resetform();
  }

  dropDownRefresh() {
this.service.getDepDropDownValues();
  }
  resetform(form?: NgForm ) {
    if (form != null) {
    form.resetForm();

    this.service.formData ={
      EmployeeID: 0,
      EmployeeName: '',
      Department: '',
      MailID: '',
      DOJ: null    }
    }
}
OnClose(): void {
  this.dilogBox.close();
}

onSubmit(form: NgForm) {
  this.service.addEmployee(form.value).subscribe();
}
}
