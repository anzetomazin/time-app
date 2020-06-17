import { Component, OnInit } from '@angular/core';
import { EmployeesModule } from '../employees.module';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
