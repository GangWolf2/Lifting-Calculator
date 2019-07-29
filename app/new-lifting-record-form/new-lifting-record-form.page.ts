import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LRecords } from '../services/storage.service';
import { IonList, Platform, ToastController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-lifting-record-form',
  templateUrl: './new-lifting-record-form.page.html',
  styleUrls: ['./new-lifting-record-form.page.scss'],
})
export class NewLiftingRecordFormPage implements OnInit {
  
  records: LRecords[] = [];

  newLRecord: LRecords = <LRecords>{}; //find interface definition in storage.service.ts

  @ViewChild('lrecords')lrecords: IonList;

  constructor(private storageService: StorageService, private plt: Platform, 
    private router: Router, private route: ActivatedRoute, private toast: ToastController) { 
   
      this.plt.ready().then(() => {
      this.loadRecords();
    });
    /*
    this.route.queryParams.subscribe(params => {
      
      //need to install cordova sqlite plugin to store and retrieve results
      if(this.router.getCurrentNavigation().extras.state){
        this.data = this.router.getCurrentNavigation().extras.state.submitted;
      }
      console.log("Data: " + this.data);
      
    })
    */
  }

  ngOnInit() {
  
  }

  addRecord(){
    this.storageService.addLRecord(this.newLRecord).then(records => {
      this.newLRecord = <LRecords>{};
      this.showToast('Record Added')
      this.loadRecords();
    })
  }

  loadRecords(){
    this.storageService.getLRecords().then(records => {
      this.records = records; //no idea what this is line specifically does
    });
  }

  updateRecord(record: LRecords){
    this.storageService.updateLRecord(record).then(record =>{
      this.showToast('Record Updated')
      this.loadRecords();
    })
  }

  deleteRecord(record: LRecords){
    this.storageService.deleteLRecord(record.liftname).then(record => {
      this.showToast('Record Removed');
      this.loadRecords();
    })
  }


  /*
  createRecord(){
    this.router.navigate(['/new-lifting-record-form']);
  }
  */

  async showToast(msg){
    const toast = await this.toast.create({
      message: msg,
      duration: 2000
    })
    toast.present();
  }
  /*
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


  //back(){
  //  this.records_form.reset();
 //   this.route.navigate(['/personal-records']);
 // }
  
  /*

  submitForm(formData: any){
    console.log(this.records_form.value)
    /*
    let navExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(this.records_form.value)
      }
    };
    
    
    let navExtras: NavigationExtras = {
      state: {
        submitted: this.records_form.value
      }
    };
    
    
    this.route.navigate(['/personal-records/lifting-records'], navExtras);
  }
*/
}
