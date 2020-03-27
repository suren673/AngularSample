import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { DepartmentService } from 'src/app/services/Department.service';

@Component({
  selector: 'app-edit-dep',
  templateUrl: './edit-dep.component.html',
  styleUrls: ['./edit-dep.component.css']
})
export class EditDepComponent implements OnInit {

  constructor(public service: DepartmentService, public dilogBox: MatDialogRef<EditDepComponent>
     ) { }

  ngOnInit(): void {
  }
  OnClose(): void {
    this.dilogBox.close();
  }
  onSubmit(form: NgForm) {
    this.service.updateDepartment(form.value);
    }
}
