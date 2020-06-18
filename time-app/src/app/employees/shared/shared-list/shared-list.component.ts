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

	@ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

	ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
			this.dataSource.filterPredicate = function(data, filter: string): boolean {
				return data.FirstName.toLowerCase().includes(filter)
				|| data.LastName.toLowerCase().includes(filter)
				|| `${data.FirstName.toLowerCase()} ${data.LastName.toLowerCase()}`.includes(filter)
				|| `${data.LastName.toLowerCase()} ${data.FirstName.toLowerCase()}`.includes(filter);
			}
  }

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}

}
