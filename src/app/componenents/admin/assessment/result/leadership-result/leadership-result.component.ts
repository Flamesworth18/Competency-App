import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-leadership-result',
  templateUrl: './leadership-result.component.html',
  styleUrls: ['./leadership-result.component.scss']
})
export class LeadershipResultComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
