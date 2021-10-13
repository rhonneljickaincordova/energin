import { SelectionModel } from '@angular/cdk/collections';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface Tile {
  cols: number;
  rows: number;
  text: string;
}

export interface PeriodicElement {
  excluded?: boolean;
  colA: string;
  colB: string;
  colC: string;
  colD: string;
  colE: string;
  colF: string;
  colG: string;
  colH: string;
  colI: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    excluded: false,
    colA: '001',
    colB: 'Hydrogen',
    colC: 'Asdasf',
    colD: 'D',
    colE: 'E',
    colF: 'F',
    colG: 'G',
    colH: 'H',
    colI: 'I',
  },
  {
    excluded: false,
    colA: '002',
    colB: 'Helium',
    colC: 'Asdasf',
    colD: 'D',
    colE: 'E',
    colF: 'F',
    colG: 'G',
    colH: 'H',
    colI: 'I',
  },
  {
    excluded: false,
    colA: '003',
    colB: 'Lithium',
    colC: 'Asdasf',
    colD: 'D',
    colE: 'E',
    colF: 'F',
    colG: 'G',
    colH: 'H',
    colI: 'I',
  },
  {
    excluded: false,
    colA: '004',
    colB: 'Beryllium',
    colC: 'Asdasf',
    colD: 'D',
    colE: 'E',
    colF: 'F',
    colG: 'G',
    colH: 'H',
    colI: 'I',
  },
  {
    excluded: true,
    colA: '005',
    colB: 'Boron',
    colC: 'Asdasf',
    colD: 'D',
    colE: 'E',
    colF: 'F',
    colG: 'G',
    colH: 'H',
    colI: 'I',
  },
  {
    excluded: false,
    colA: '006',
    colB: 'Carbon',
    colC: 'Asdasf',
    colD: 'D',
    colE: 'E',
    colF: 'F',
    colG: 'G',
    colH: 'H',
    colI: 'I',
  },
  {
    excluded: false,
    colA: '007',
    colB: 'Nitrogen',
    colC: 'Asdasf',
    colD: 'D',
    colE: 'E',
    colF: 'F',
    colG: 'G',
    colH: 'H',
    colI: 'I',
  },
  {
    excluded: false,
    colA: '008',
    colB: 'Oxygen',
    colC: 'Asdasf',
    colD: 'D',
    colE: 'E',
    colF: 'F',
    colG: 'G',
    colH: 'H',
    colI: 'I',
  },
  {
    excluded: false,
    colA: '009',
    colB: 'Fluorine',
    colC: 'Asdasf',
    colD: 'D',
    colE: 'E',
    colF: 'F',
    colG: 'G',
    colH: 'H',
    colI: 'I',
  },
  {
    excluded: false,
    colA: '010',
    colB: 'Neon',
    colC: 'Asdasf',
    colD: 'D',
    colE: 'E',
    colF: 'F',
    colG: 'G',
    colH: 'H',
    colI: 'I',
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit, OnInit {
  tiles: Tile[] = [
    { text: 'Data 1:', cols: 1, rows: 1 },
    { text: '-154.68', cols: 1, rows: 1 },
    { text: 'Data 2:', cols: 1, rows: 1 },
    { text: '-3.72', cols: 1, rows: 1 },
    { text: 'Data 3:', cols: 1, rows: 1 },
    { text: '-206.48', cols: 1, rows: 1 },
    { text: 'Data 4:', cols: 1, rows: 1 },
    { text: '0.44', cols: 1, rows: 1 },
    { text: 'Data 5:', cols: 1, rows: 1 },
    { text: '56.11', cols: 1, rows: 1 },
    { text: 'Data 6:', cols: 1, rows: 1 },
    { text: '-10.0001', cols: 1, rows: 1 },
  ];
  displayedColumns: string[] = [
    'select',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
  ];

  dataSource = new MatTableDataSource<PeriodicElement>();
  selection = new SelectionModel<PeriodicElement>(true, []);

  public a = '';
  public b = '';
  public c = '';
  public d = '';
  public e = '';
  public f = '';
  public g = '';
  public h = '';
  public i = '';

  @ViewChild(MatPaginator) paginator: any;

  searchForm = new FormGroup({
    a: new FormControl(''),
    b: new FormControl(''),
    c: new FormControl(''),
    d: new FormControl(''),
    e: new FormControl(''),
    f: new FormControl(''),
    g: new FormControl(''),
    h: new FormControl(''),
    i: new FormControl(''),
  });
  constructor(formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.dataSource.data = ELEMENT_DATA;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: any) {
    if (event !== null) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    } else {
      const a = this.searchForm?.get('a')?.value;
      const b = this.searchForm?.get('b')?.value;
      const c = this.searchForm?.get('c')?.value;
      const d = this.searchForm?.get('d')?.value;
      const e = this.searchForm?.get('e')?.value;
      const f = this.searchForm?.get('f')?.value;
      const g = this.searchForm?.get('g')?.value;
      const h = this.searchForm?.get('h')?.value;
      const i = this.searchForm?.get('i')?.value;

      this.a = a === '' ? '' : a;
      this.b = b === '' ? '' : b;
      this.c = c === '' ? '' : c;
      this.d = d === '' ? '' : d;
      this.e = e === '' ? '' : e;
      this.f = f === '' ? '' : f;
      this.g = g === '' ? '' : g;
      this.h = h === '' ? '' : h;
      this.i = i === '' ? '' : i;

      // create string of our searching values and split if by '$'
      const filterValue =
        this.a +
        '$' +
        this.b +
        '$' +
        this.c +
        '$' +
        this.d +
        '$' +
        this.e +
        '$' +
        this.f +
        '$' +
        this.g +
        '$' +
        this.h +
        '$' +
        this.i;

      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }

  getFilterPredicate() {
    return (row: PeriodicElement, filters: string) => {
      // split string per '$' to array
      const filterArray = filters.split('$');
      const columnA = filterArray[0];
      const columnB = filterArray[1];
      const columnC = filterArray[2];
      const columnD = filterArray[3];
      const columnE = filterArray[4];
      const columnF = filterArray[5];
      const columnG = filterArray[6];
      const columnH = filterArray[7];
      const columnI = filterArray[8];

      const matchFilter = [];

      // Fetch data from row
      const _columnA = row.colA;
      const _columnB = row.colB;
      const _columnC = row.colC;

      const _columnD = row.colD;
      const _columnE = row.colE;
      const _columnF = row.colF;

      const _columnG = row.colG;
      const _columnH = row.colH;
      const _columnI = row.colI;

      // verify fetching data by our searching values
      const customFilterA = _columnA.toLowerCase().includes(columnA);
      const customFilterB = _columnB.toLowerCase().includes(columnB);
      const customFilterC = _columnC.toLowerCase().includes(columnC);
      const customFilterD = _columnD.toLowerCase().includes(columnD);
      const customFilterE = _columnE.toLowerCase().includes(columnE);
      const customFilterF = _columnF.toLowerCase().includes(columnF);
      const customFilterG = _columnG.toLowerCase().includes(columnG);
      const customFilterH = _columnH.toLowerCase().includes(columnH);
      const customFilterI = _columnI.toLowerCase().includes(columnI);

      // push boolean values into array
      matchFilter.push(customFilterA);
      matchFilter.push(customFilterB);
      matchFilter.push(customFilterC);
      matchFilter.push(customFilterD);
      matchFilter.push(customFilterE);
      matchFilter.push(customFilterF);
      matchFilter.push(customFilterG);
      matchFilter.push(customFilterH);
      matchFilter.push(customFilterI);

      // return true if all values in array is true
      // else return false
      return matchFilter.every(Boolean);
    };
  }

  applyCustomfilter() {
    this.dataSource.filterPredicate = this.getFilterPredicate();
    this.applyFilter(null);
  }

  resetFilter() {
    this.dataSource.filter = '';
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;

    const numRowsMinusExcluded = this.dataSource.data.filter(
      (row) => !row.excluded
    ).length;

    return numSelected === numRowsMinusExcluded;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => {
          if (!row.excluded) {
            this.selection.select(row);
          }
        });
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.colA + 1
    }`;
  }
}
