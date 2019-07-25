import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-records',
  templateUrl: './personal-records.page.html',
  styleUrls: ['./personal-records.page.scss'],
})
export class PersonalRecordsPage implements OnInit {

  records_lifting = [
    {
      liftName: '',
      weightLifted: '',
      reps: '',
      dateTime: '' //probably check if there is method that can get dateTime from system
    }
  ]

  records_cardio = [
    {
      cardioType: '', //walking,running, biking, stationary, swimming,...
      distance: '', //miles, km, m
      completion_time:'',
      //maybe splits can go here
      dateTime: '' //probably check if there is method that can get dateTime from system
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
