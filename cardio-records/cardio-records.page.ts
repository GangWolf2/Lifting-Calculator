import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-cardio-records',
  templateUrl: './cardio-records.page.html',
  styleUrls: ['./cardio-records.page.scss'],
})
export class CardioRecordsPage implements OnInit {

  constructor(private form: FormBuilder, private route: Router) {}

  
  createRecord(){
    this.route.navigate(['./new-cardio-record-form']);
  }  

  ngOnInit() {
  }

}
