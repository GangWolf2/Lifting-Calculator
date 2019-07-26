import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-lifting-record-form',
  templateUrl: './new-lifting-record-form.page.html',
  styleUrls: ['./new-lifting-record-form.page.scss'],
})
export class NewLiftingRecordFormPage implements OnInit {

  records_form: FormGroup;

  constructor(private route: Router, private form: FormBuilder) { 
    this.records_form = this.form.group({
      liftArea: ['', Validators.compose([Validators.required])],
      liftName: ['', Validators.compose([Validators.maxLength(20), Validators.required])],
      weight:['', Validators.compose([Validators.maxLength(4), Validators.required])],
      reps: ['', Validators.compose([Validators.maxLength(2), Validators.required])],
      date: ['', Validators.compose([Validators.required])],
      time: ['']
    })
  }

  ngOnInit() {
  }

  
  /*
  records_form = new FormGroup({
    liftArea: new FormControl(''),
    liftName: new FormControl(''),
    weight: new FormControl(''),
    reps: new FormControl(''),
    date: new FormControl(''),
    time: new FormControl('')
  })
  */
  back(){
    this.records_form.reset();
    this.route.navigate(['/personal-records']);
  }
  submitForm(formData: any){
    console.log(this.records_form.value)
    /*
    let navExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(this.records_form.value)
      }
    };
    */
    
    let navExtras: NavigationExtras = {
      state: {
        submitted: this.records_form.value
      }
    };
    
    
    this.route.navigate(['/personal-records/lifting-records'], navExtras);
  }

}
