import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-cardio-record-form',
  templateUrl: './new-cardio-record-form.page.html',
  styleUrls: ['./new-cardio-record-form.page.scss'],
})
export class NewCardioRecordFormPage implements OnInit {

  cardio_records = [
    {
      cardioType: '', //walking,running, biking, stationary, swimming,...
      distance: '', //miles, km, m
      completion_time:'',
      //maybe splits can go here
      dateTime: '' //probably check if there is method that can get dateTime from system
    }
  ]

 

  constructor(private form: FormBuilder, private route: Router) { 

  }

  records_form = new FormGroup({
    cardioType: new FormControl(''),
    distance: new FormControl('',[Validators.compose([Validators.maxLength(2)])]),
    denominator: new FormControl(''),
    completionTime: new FormControl(''),
    dateTime: new FormControl('')
  });
  

  ngOnInit() {
  }

  back(){
    this.route.navigate(['/personal-records/cardio-records']);
  }

}
