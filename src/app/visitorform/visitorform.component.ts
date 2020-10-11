import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-visitorform',
  templateUrl: './visitorform.component.html',
  styleUrls: ['./visitorform.component.scss'],
})
export class VisitorformComponent implements OnInit {
  visitorsEntry: FormGroup;
  visitorsDisplay: any;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.visitorsEntry = this.fb.group({
      name: '',
      email: '',
      typeOfVisit: '',
      personNameToVisit: '',
      dateOfVisit: new Date().toLocaleDateString('en-US'),
      timeOfVisit: '',
      timeOfLeave: '',
    });

    this.visitorsDisplay = JSON.parse(localStorage.getItem('visitorsEntry'));
  }

  submitForm = () => {
    const uniqueKey = new Date().getUTCMilliseconds();
    const visitorEntry =
      JSON.parse(localStorage.getItem('visitorsEntry')) || [];
    visitorEntry.push(this.visitorsEntry.value);
    localStorage.setItem('visitorsEntry', JSON.stringify(visitorEntry));
  };
}
