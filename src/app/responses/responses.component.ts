import { Component, OnInit } from '@angular/core';
import { ResponsesService } from '../services/responses.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.css']
})
export class ResponsesComponent implements OnInit {

  userId:              any;
  responses:           any;
  page: number         = 1;
  count: number        = 0;
  tableSize:  number   = 7;
  tableSizes: number[] = [10, 25, 50, 100];

  constructor(
    private responseService: ResponsesService,
    private tokenStorageService: TokenStorageService
  ){}

  ngOnInit(): void {
    this.userId = this.tokenStorageService.getUser().id;
    this.fetchResponses();
  }

  fetchResponses(): void {
    this.responseService.getRawResponses(this.userId).subscribe((data) => {
      this.responses = data.body;
    });
  }

  onTableDataChange(event: any){
    this.page = event;
    this.fetchResponses();
  }  

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchResponses();
  }  

}
