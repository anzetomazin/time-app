import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-shared-list',
  templateUrl: './shared-list.component.html',
  styleUrls: ['./shared-list.component.css']
})
export class SharedListComponent implements OnInit {

  	@Input() displayedColumns: string[];
	@Input() dataSource: MatTableDataSource<Employee>;

	ngOnInit(): void {}

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}

}
