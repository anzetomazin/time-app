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

	displayedColumns: string[] = ['firstName', 'lastName', 'type', 'location'];
	dataSource = new MatTableDataSource<Employee>();

	constructor(
		private employeeService: EmployeeService
	) {}

	@ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

	ngOnInit(): void {

		this.refresh();
	}

	refresh(): void {
		this.employeeService.getAllPresent().pipe()
		.subscribe((item: Employee[]) => {
			this.dataSource = new MatTableDataSource<Employee>(item);
			this.dataSource.paginator = this.paginator;
		});
	}
};
