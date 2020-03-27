import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { DepartmentService } from 'src/app/services/department.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-add-dep',
  templateUrl: './add-dep.component.html',
  styleUrls: ['./add-dep.component.css']
})
export class AddDepComponent implements OnInit {
  listData: MatTableDataSource<{ DepartmentID: number; DepartmentName: any; }>;

  constructor(public dilogBox: MatDialogRef<AddDepComponent>, public service: DepartmentService) { }

  ngOnInit(): void {
    this.resetform();
  }
  resetform(form?: NgForm ) {
    if (form != null) {
    form.resetForm();
    }

    this.service.formData = {
      DepartmentID: 0,
      DepartmentName : ''
    };
  }
  OnClose() {
    this.dilogBox.close();
  }
  onSubmit(form: NgForm) {
    //this.service.addDepartment(form.value);
    window.alert(form.value.DepartmentName);
    const dummyData = [{DepartmentID: 3, DepartmentName: form.value.DepartmentName }];
    this.listData = new MatTableDataSource(dummyData);
    // this.service.addDepartment(form.value).subcribe();
  }
}
