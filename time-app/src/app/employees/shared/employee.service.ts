import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';
import { map } from 'rxjs/operators';

@Injectable({
providedIn: 'root'
})
export class EmployeeService {

	constructor(
		private apiService : ApiService
	) { }

	getAllPresent(): Observable<Employee[]> {
		return this.apiService.get(`/Presence?TimeStamp=${new Date().toJSON()}&OrgUnitID=10000083&showInactiveEmployees=false`)
			.pipe(map(data => data));
	}

	getAll(): Observable<Employee[]> {
		return this.apiService.get(`/employee`)
			.pipe(map(data => data));
	}

	put(employee: Employee): Observable<Employee> {
		return this.apiService.put(`/employee`, employee)
			.pipe(map(data => data));
	}
}
