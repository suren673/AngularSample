import {Component, OnInit, ViewChild} from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {Employee} from 'src/app/models/employee-model';

import {MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AddEmpComponent} from 'src/app/employee/add-emp/add-emp.component';
import { EmployeeService } from 'src/app/services/employee.service';
import {EditEmpComponent } from 'src/app/employee/edit-emp/edit-emp.component';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {
  sort: MatSort;

  constructor(private service: EmployeeService, private dialog: MatDialog) { }

  listData: MatTableDataSource<any>;
displayColumns: string[] = ['Options', 'EmployeeID', 'EmployeetName', 'Department', 'MailID', 'DOJ'];

  ngOnInit(): void {
    this.refeshEmpList();
  }
  refeshEmpList() {
    const dummyData = [{EmployeeID: 1, EmployeetName: 'Surender' ,
    Department: 'Math', MailID: 'suren@gmail.com', DOD : '03/26/2020'}];

    this.listData = new MatTableDataSource(dummyData);
    this.listData.sort = this.sort;
    }
    onEdit(emp: Employee) {
      this.service.formData = emp;
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '75%';
      this.dialog.open(AddEmpComponent, dialogConfig);
    }


    onAdd() {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '75%';
      this.dialog.open(AddEmpComponent, dialogConfig);
        }
        onDelete(id: number) {
          if (confirm('are you sure you want to delete??')) {
            this.service.deleteEmployee(id).subscribe(responce => {
              this.refeshEmpList();
            });
          }
        }


}
