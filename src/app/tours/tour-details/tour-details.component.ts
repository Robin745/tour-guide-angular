import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css'],
})
export class TourDetailsComponent implements OnInit {
  constructor(private _route: ActivatedRoute) {}
  ngOnInit(): void {
    this.id = this._route.snapshot.params['oid'];
  }
  id: string = '';
}
