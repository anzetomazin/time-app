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

	@ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

	ngOnInit(): void {

		this.employeeService.getAll()
		.subscribe((item: Employee[]) => {
			this.dataSource = new MatTableDataSource<Employee>(item);
			this.dataSource.filterPredicate = function(data, filter: string): boolean {
				return data.FirstName.toLowerCase().includes(filter)
				|| data.LastName.toLowerCase().includes(filter)
				|| `${data.FirstName.toLowerCase()} ${data.LastName.toLowerCase()}`.includes(filter)
				|| `${data.LastName.toLowerCase()} ${data.FirstName.toLowerCase()}`.includes(filter);
			}
			this.dataSource.paginator = this.paginator;
		});
	}
}
