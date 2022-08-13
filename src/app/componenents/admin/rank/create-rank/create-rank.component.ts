import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Rank } from 'src/app/models/add ons/rank.model';
import { RankService } from 'src/app/services/rank.service';

@Component({
  selector: 'app-create-rank',
  templateUrl: './create-rank.component.html',
  styleUrls: ['./create-rank.component.scss']
})
export class CreateRankComponent implements OnInit {

  rank:Rank = {
    id: '',
    name: ''
  }

  constructor(
    private router: Router,
    private rankService: RankService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  navigateToRankList(){
    this.router.navigate(['/rank-list']);
  }

  createRankForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
  });

  createRank(){
    this.rank.name = this.createRankForm.get('name')?.value || '';

    this.createAnotherRank(this.rank);
  }

  createAnotherRank(rank: Rank){
    this.rankService.addRank(rank)
    .subscribe(
      res => {
        setTimeout(() => {
          this.toastr.success("has been created succesfully", rank.name);
          this.router.navigate(['/rank-list']);
        }, 3000);
      },
      err => {
        setTimeout(() => {
          this.toastr.error("An error occured!")
        }, 3000);
      }
    )
  }

}
