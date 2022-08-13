import { DatePipe } from '@angular/common';
import { AdminCompetencyService } from 'src/app/services/admin-competency.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  total: any;
  today: any;

  constructor(
    private adminCompetencyService: AdminCompetencyService,
    private datePipe: DatePipe
    ) { }

  ngOnInit(): void {
    this.getTotal();
    this.getToday();
  }

  getTotal(){
    this.adminCompetencyService.getCount()
    .subscribe(
      res => {
        this.total = res;
      }
    )
  }

  getToday(){
    this.adminCompetencyService.getCompetencies()
    .subscribe(
      res => {
        var date = this.datePipe.transform(Date.now(), 'EEEE, d MMMM y');
        var t = res.filter(c => c.dateCreated === date);
        this.today = t.length;
      }
    )
  }

}
