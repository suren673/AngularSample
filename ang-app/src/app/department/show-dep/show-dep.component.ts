import {Component, OnInit, ViewChild} from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

import {MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AddDepComponent} from 'src/app/department/add-dep/add-dep.component';
import { DepartmentService } from 'src/app/services/department.service';
import { Department } from 'src/app/models/department-model';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private service: DepartmentService, private dialog: MatDialog) { }

  listData: MatTableDataSource<any>;
displayColumns: string[] = ['Options', 'DepartmentID', 'DepartmentName'];

@ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit(): void {
    this.refeshDeptList();
  }
  refeshDeptList() {
    const dummyData = [{DepartmentID: 1, DepartmentName: 'IT'},
    {DepartmentID: 2, DepartmentName: 'Finance'}];

    this.listData = new MatTableDataSource(dummyData);
    this.listData.sort = this.sort;
  }
  onAdd() {
const dialogConfig = new MatDialogConfig();
dialogConfig.disableClose = true;
dialogConfig.autoFocus = true;
dialogConfig.width = '50%';
this.dialog.open(AddDepComponent, dialogConfig);
  }

  applyFilter(filtervalue: string){
    this.listData.filter = filtervalue.trim().toLocaleLowerCase();
  }
  onEdit(dept: Department) {
    console.log(dept);
  }
  onDelete(id: number) {
    if (confirm('are you sure you want to delete??')) {
      this.service.deleteDepartment(id).subscribe(responce => {
        this.refeshDeptList();
      });
    }
  }

}
