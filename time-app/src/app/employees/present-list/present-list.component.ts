import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Employee } from '../shared/employee.model';
import { EmployeesModule } from '../employees.module';
import { EmployeeService } from '../shared/employee.service';


@Component({
  selector: 'app-present-list',
  templateUrl: './present-list.component.html',
  styleUrls: ['./present-list.component.css']
})
export class PresentListComponent implements OnInit {

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

};
