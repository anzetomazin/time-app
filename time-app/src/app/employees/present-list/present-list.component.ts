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

	@ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;


	ngOnInit(): void {

		this.employeeService.getAll().pipe()
		.subscribe((item: Employee[]) => {
			console.log(item);
			this.dataSource = new MatTableDataSource<Employee>(item);
			this.dataSource.paginator = this.paginator;
			this.dataSource.filterPredicate = function(data, filter: string): boolean {
				return data.FirstName.toLowerCase().includes(filter)
				|| data.LastName.toLowerCase().includes(filter)
				|| `${data.FirstName.toLowerCase()} ${data.LastName.toLowerCase()}`.includes(filter)
				|| `${data.LastName.toLowerCase()} ${data.FirstName.toLowerCase()}`.includes(filter);
			}
		});
	}

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}

};
