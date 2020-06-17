import { Component, OnInit } from '@angular/core';
import { EmployeesModule } from '../employees.module';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-present-list',
  templateUrl: './present-list.component.html',
  styleUrls: ['./present-list.component.css']
})
export class PresentListComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
	dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

	ngOnInit(): void {
	}

}

export interface PeriodicElement {
	name: string;
	position: number;
	weight: number;
	symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
	{position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
	{position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
	{position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
	{position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
	{position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
	{position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
	{position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
	{position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
	{position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
	{position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
	{position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
	{position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
	{position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];
