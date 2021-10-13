import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  col1: number;
  col2: string;
  col3: string;
  col4: string;
  col5: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { col1: 1, col2: 'Hydrogen', col3: '1.0079', col4: 'H', col5: 'col5' },
  { col1: 2, col2: 'Helium', col3: '4.0026', col4: 'He', col5: 'col5' },
  { col1: 3, col2: 'Lithium', col3: '6.941', col4: 'Li', col5: 'col5' },
  { col1: 4, col2: 'Beryllium', col3: '9.0122', col4: 'Be', col5: 'col5' },
  { col1: 5, col2: 'Boron', col3: '10.811', col4: 'B', col5: 'col5' },
  { col1: 6, col2: 'Carbon', col3: '12.0107', col4: 'C', col5: 'col5' },
  { col1: 7, col2: 'Nitrogen', col3: '14.0067', col4: 'N', col5: 'col5' },
  { col1: 8, col2: 'Oxygen', col3: '15.9994', col4: 'O', col5: 'col5' },
  { col1: 9, col2: 'Fluorine', col3: '18.9984', col4: 'F', col5: 'col5' },
  { col1: 10, col2: 'Neon', col3: '20.1797', col4: 'Ne', col5: 'col5' },
];

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css'],
})
export class TooltipComponent implements OnInit {
  displayedColumns: string[] = ['col1', 'col2', 'col3', 'col4', 'col5'];
  dataSource = ELEMENT_DATA;
  constructor() {}

  ngOnInit(): void {}
}
