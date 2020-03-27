import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { Employee } from 'src/app/models/employee-model';
import { Department } from '../models/department-model';
//import {EmployeeService} from 'src/app/services/employee.service';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private Http: HttpClient) { }
  formData: Employee;
  readonly APIUrl = '';


  getEmployeeList(): Observable<Employee[]> {
    return this.Http.get<Employee[]>(this.APIUrl + '/Employee');
  }

  addEmployee(dep: Employee) {
    return this.Http.post(this.APIUrl + '/Employee', dep);
  }

  deleteEmployee(id: number) {
return this.Http.delete(this.APIUrl + '/Employee/' + id);
  }

  updateEmployee(dep: Employee) {
    return this.Http.put(this.APIUrl + '/Employee', dep);
  }
getDepDropDownValues(){
  return this.Http.get<Department[]>(this.APIUrl + '/department');
}

}
