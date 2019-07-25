import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lifting-records',
  templateUrl: './lifting-records.page.html',
  styleUrls: ['./lifting-records.page.scss'],
})
export class LiftingRecordsPage implements OnInit {

  lifting_records = [
    {
      liftName: '',
      weightLifted: '',
      reps: '',
      dateTime: '' //probably check if there is method that can get dateTime from system
    }
  ]

  constructor(private route: Router) { }

  ngOnInit() {
  }

  newRecord(){
    this.route.navigate(['/new-lifting-record-form']);
  }

}
