import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Rank } from 'src/app/models/add ons/rank.model';
import { LoaderService } from 'src/app/services/loader.service';
import { RankService } from 'src/app/services/rank.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rank-list',
  templateUrl: './rank-list.component.html',
  styleUrls: ['./rank-list.component.scss']
})
export class RankListComponent implements OnInit {

  ranks: Rank[] = [];
  rank: Rank = {
    id: '',
    name: ''
  }

  constructor(
    private rankService: RankService,
    public loader: LoaderService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getRanks();
  }

  //GET ranks
  getRanks(){
    this.rankService.getRanks()
    .subscribe(
      res => {
        this.ranks = res;
      }
    )
  }

  //POST rank
  createRank(){
    this.router.navigate(['/create-rank']);
  }

  //PUT rank
  editRank(rank: Rank){
    this.rankService.setRank(rank);
    this.router.navigate(['/update-rank']);
  }

  confirmDelete(id: string){
    Swal.fire({
      title: "Are you sure you want to remove?",
      text: "You will not be able to recover this file!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, remove it",
      cancelButtonText: "Cancel"
    }).then((result) => {
      if(result.value){
        this.deleteRank(id);
      }
    })
  }

  //DELETE rank
  deleteRank(id: string){
    this.rankService.removeRank(id)
    .subscribe(
      res => {
        setTimeout(() => {
          this.toastr.success("has been successfully deleted.", "Rank");
          this.getRanks();
        }, 3000);
      },
      err => {
        setTimeout(() => {
          this.toastr.error("An error occured");
        }, 3000);
      }
    )
  }

}
