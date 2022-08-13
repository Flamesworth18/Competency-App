import { ContactService } from './../../../../services/contact.service';
import { Contact } from 'src/app/models/add ons/contact.model';
import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crud-contact',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.scss']
})
export class FeedbackListComponent implements OnInit {

  feedbacks:Contact[] = [];

  constructor(
    private contactService:ContactService,
    public loader: LoaderService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getFeedbacks();
  }

  //GET all users
  getFeedbacks(){
    this.contactService.getContacts()
    .subscribe(
      res => {
        this.feedbacks = res;
      }
    )
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
        this.deleteFeedback(id);
      }
    })
  }

//DELETE user
deleteFeedback(id: string){
  this.contactService.removeContact(id)
  .subscribe(
    res => {
      setTimeout(() => {
        this.toastr.success("has been successfully deleted.", "Feedback");
        this.getFeedbacks();
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
