import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-visitorform',
  templateUrl: './visitorform.component.html',
  styleUrls: ['./visitorform.component.scss'],
})
export class VisitorformComponent implements OnInit {
  visitorsEntry = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    type: new FormControl(''),
    personName: new FormControl(''),
    dateOfVisit: new FormControl(''),
    timeToVisit: new FormControl(''),
    timeToLeave: new FormControl(''),
  });
  constructor() {}

  ngOnInit(): void {}
}
