import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tnps-trends',
  templateUrl: './tnps-trends.component.html',
  styleUrls: ['./tnps-trends.component.css']
})
export class TnpsTrendsComponent implements OnInit {
  
  @Input() chartData:   any;
  @Input() chartLabel:  any;
  @Input() chartColors: any;
  @Input() chartType:   any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
