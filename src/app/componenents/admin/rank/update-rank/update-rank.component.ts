import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Rank } from 'src/app/models/add ons/rank.model';
import { RankService } from 'src/app/services/rank.service';

@Component({
  selector: 'app-update-rank',
  templateUrl: './update-rank.component.html',
  styleUrls: ['./update-rank.component.scss']
})
export class UpdateRankComponent implements OnInit {

  rank:Rank = {
    id: '',
    name: '',
  }

  tempRank:Rank = {
    id: '',
    name: '',
  }

  constructor(
    private router: Router,
    private rankService: RankService,
    private toastr: ToastrService,
  ) {

    this.rankService.getRank.subscribe(r => this.tempRank = r);

   }

  ngOnInit(): void {
  }

  navigateToRankList(){
    this.router.navigate(['/department-list']);
  }

  editRankForm = new FormGroup({
    name: new FormControl(null, [Validators.required])
  });

  editRank(){
    this.rank.name = this.editRankForm.get('name')?.value || '';

    this.requestEditRank(this.rank);
  }

  requestEditRank(rank: Rank){
    this.rankService.updateRank(this.tempRank.id ,rank)
    .subscribe(
      res => {
        setTimeout(() => {
          this.toastr.success("has been successfully updated.", rank.name);
          this.router.navigate(['/rank-list'])
        }, 3000);
      },
      err => {
        console.log(rank)
        setTimeout(() => {
          this.toastr.error("An error occured");
        }, 3000);
      }
    )
  }

}
