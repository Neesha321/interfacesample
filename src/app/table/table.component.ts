import { Component, OnInit } from '@angular/core';

export interface Transaction {
  item: string;
  name: string;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})


export class TableComponent implements OnInit {
  displayedColumns: string[] = ['item', 'name'];
  transactions: Transaction[] = [
    {item: 'Dummy data', name: 'ram'},
    {item: 'Dummy data', name: 'sita'},
    {item: 'Dummy data', name: 'rita'},
    {item: 'Dummy data', name:'shyam'},
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
