import { Component } from '@angular/core';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { IEmployee } from '../../shared/interfaces/employee';
import { EmployeeService } from '../../services/employee.service';
import { FormControl, FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [NgbPaginationModule, NgbTypeaheadModule, FormsModule, DecimalPipe],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {
  employees:IEmployee[] = [];
  page = 1;
	pageSize = 10;
	collectionSize = 0;
  filter = new FormControl('', { nonNullable: true });

  constructor(
    private employeeService: EmployeeService,
  ){
    this.employees = employeeService.getAll();
    this.refreshDataTable();
    this.collectionSize = this.employeeService.getAll().length;
  }

  refreshDataTable() {
		this.employees = this.employeeService.getAll().slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
	}
}
