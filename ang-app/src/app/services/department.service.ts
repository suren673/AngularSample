import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Department} from 'src/app/models/department-model';
import { observable, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private Http: HttpClient) { }
  formData: Department;
  readonly APIUrl = '';


  getDepartmentList(): Observable<Department[]> {
    return this.Http.get<Department[]>(this.APIUrl + '/department');
  }

  addDepartment(dep: Department) {
    return this.Http.post(this.APIUrl + '/department', dep);
  }

  deleteDepartment(id: number) {
return this.Http.delete(this.APIUrl + '/department/' + id);
  }

  updateDepartment(dep: Department) {
    return this.Http.put(this.APIUrl + '/department', dep);
  }
}
