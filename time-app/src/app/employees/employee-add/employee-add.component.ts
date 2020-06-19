import { Component, OnInit } from '@angular/core';
import { EmployeesModule } from '../employees.module';
import { EmployeeService } from '../shared/employee.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../shared/employee.model';
import { SnackbarService } from 'src/app/core/snackbar.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  form: FormGroup; 

  constructor(
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder,
    private router: Router,
    private snackbarService: SnackbarService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: [
        '', 
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z]*')
        ]
      ],
      lastName: [
        '', 
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z]*')
        ]
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ]
    });
  }

  addEmployee(): void {
    if (this.form.valid) {
        this.employeeService
          .put(this.form.value as Employee)
          .subscribe(
            data => this.router.navigateByUrl('employees')
        );
      this.form.reset();
      this.snackbarService.openSnackBar('Successfully added an employee', 'Dismiss', 'success');
    }

    else {
      this.snackbarService.openSnackBar('Form is invalid.', 'Dismiss', 'error');
    }
  }

}
