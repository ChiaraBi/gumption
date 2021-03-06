import { Component, OnInit } from '@angular/core';

import {SortOption} from '../../models/sort-option';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {

  sortTypes: SortOption [];
  sortOrder: SortOption [];
  selectedSortType: SortOption;
  selectedSortOrder: SortOption;

  constructor() { }

  ngOnInit() {
    this.sortTypes = [{name: 'Type 1', id: 1}, {name: 'Type 2', id:2 }];
    this.sortOrder = [{name: 'Asc', id: 1}, {name: 'Desc', id:2 }];

  }

}
