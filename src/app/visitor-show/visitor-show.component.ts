import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitor-show',
  templateUrl: './visitor-show.component.html',
  styleUrls: ['./visitor-show.component.scss'],
})
export class VisitorShowComponent implements OnInit {
  constructor() {}

  visitorsDisplay: any;
  ngOnInit(): void {
    this.visitorsDisplay = JSON.parse(localStorage.getItem('visitorsEntry'));
  }
}
