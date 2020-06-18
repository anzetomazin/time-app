import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { EmployeesModule } from '../employees.module';
import { Employee } from '../shared/employee.model';
import { EmployeeService } from '../shared/employee.service';

@Component({
selector: 'app-employee-list',
templateUrl: './employee-list.component.html',
styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

	displayedColumns: string[] = ['firstName', 'lastName', 'address', 'gender', 'type', 'location'];
	dataSource = new MatTableDataSource<Employee>();

	constructor(
		private employeeService: EmployeeService
	) {}

	ngOnInit(): void {

		this.employeeService.getAll().pipe()
		.subscribe((item: Employee[]) => {
			console.log(item);
			this.dataSource = new MatTableDataSource<Employee>(item);
		});
	}
}
