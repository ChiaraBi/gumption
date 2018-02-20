import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Facet } from '../../../models/facet';

@Component({
  selector: 'app-facet',
  templateUrl: './facet.component.html',
  styleUrls: ['./facet.component.css']
})
export class FacetComponent implements OnInit {
  
  @Input() facet: Facet;
  @Output() onCheckBoxChanged = new EventEmitter<Facet>();

  constructor() { }

  ngOnInit() {}

  onCheckboxChange() {
    this.onCheckBoxChanged.emit();
  }

}
