import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-lifting-record-form',
  templateUrl: './new-lifting-record-form.page.html',
  styleUrls: ['./new-lifting-record-form.page.scss'],
})
export class NewLiftingRecordFormPage implements OnInit {



  constructor(private route: Router, private form: FormBuilder) { }

  ngOnInit() {
  }

  records_form = new FormGroup({
    liftArea: new FormControl(''),
    liftName: new FormControl(''),
    weight: new FormControl(''),
    reps: new FormControl(''),
    date: new FormControl(''),
    time: new FormControl('')
  })

  back(){
    this.route.navigate(['/personal-records/lifting-records']);
  }

}
