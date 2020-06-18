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

  getAll(): Observable<Employee[]> {
    return this.apiService.get(`/employee`)
        .pipe(map(data => data));
  }
}
