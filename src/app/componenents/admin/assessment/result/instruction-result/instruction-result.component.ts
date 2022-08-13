import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-instruction-result',
  templateUrl: './instruction-result.component.html',
  styleUrls: ['./instruction-result.component.scss']
})
export class InstructionResultComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
