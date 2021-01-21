import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Filter } from '../models/filter';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css']
})
export class FilterFormComponent implements OnInit {

  @Input() agents: any;

  readonly DELIMITER = '-';
  
  model = new Filter(0,'','');

  @Output() filterDashboard = new EventEmitter<any>();

  filterDashboardData(){
    this.model.agentID   = this.model.agentID;
    this.model.startDate = this.formatSelectedDate(this.model.startDate);
    this.model.endDate   = this.formatSelectedDate(this.model.endDate);
    this.filterDashboard.emit(this.model);
  }

  constructor(){}
  
  ngOnInit(){}

  formatSelectedDate(date: any): string {
    return date ? date.year + this.DELIMITER + date.month + this.DELIMITER + date.day : '';
  }

}