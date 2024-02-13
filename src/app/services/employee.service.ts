import { Injectable } from '@angular/core';
import { IEmployee } from '../shared/interfaces/employee';
import { EMPLOYEES } from '../shared/dummyData/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeList: IEmployee[] = EMPLOYEES;
  constructor() { }

  getAll(){
    return this.employeeList;
  }
}
