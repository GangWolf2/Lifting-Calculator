import { Component, OnInit, ViewChild } from '@angular/core';
import { CRecords } from '../services/storage.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { IonList, Platform, ToastController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-new-cardio-record-form',
  templateUrl: './new-cardio-record-form.page.html',
  styleUrls: ['./new-cardio-record-form.page.scss'],
})
export class NewCardioRecordFormPage implements OnInit {

  records: CRecords[] = [];

  newCRecord: CRecords = <CRecords>{};

  @ViewChild('crecords')crecords: IonList;

  constructor(private form: FormBuilder, private route: Router, private plt: Platform, 
    private toast: ToastController, private storageService: StorageService) { 
      
      this.plt.ready().then(() => {
      this.loadCRecords();
      })
  }

  addCRecord(){
    this.storageService.addCRecord(this.newCRecord).then(records => {
      this.newCRecord = <CRecords>{};
      this.showToast('Record Added')
      this.loadCRecords();
      this.route.navigate(['./cardio-records'])
    })
  }

  loadCRecords(){
    this.storageService.getCRecords().then(records => {
      this.records = records; //no idea what this is line specifically does
    });
  }

  updateCRecord(record: CRecords){
    this.storageService.updateCRecord(record).then(record =>{
      this.showToast('Record Updated')
      this.loadCRecords();
    })
  }

  deleteCRecord(record: CRecords){
    this.storageService.deleteLRecord(record.cardioType).then(record => {
      this.showToast('Record Removed');
      this.loadCRecords();
    })
  }

  /*
  createRecord(){
    this.route.navigate(['./new-cardio-record-form']);
  }
  */
 
  async showToast(msg){
    const toast = await this.toast.create({
      message: msg,
      duration: 2000
    })
    toast.present();
  }

  

  ngOnInit() {
  }

  back(){
    this.route.navigate(['/personal-records/cardio-records']);
  }

}
