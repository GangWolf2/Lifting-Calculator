import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { IonList, Platform, ToastController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';
import { CRecords } from '../services/storage.service';



@Component({
  selector: 'app-cardio-records',
  templateUrl: './cardio-records.page.html',
  styleUrls: ['./cardio-records.page.scss'],
})
export class CardioRecordsPage implements OnInit {

  records: CRecords[] = [];

  constructor(private form: FormBuilder, private route: Router, private storageService: StorageService,
    private toast: ToastController, private pltForm: Platform) {
      this.pltForm.ready().then(() =>{
        this.loadCRecords();
      });
      
    }

  
  createRecord(){
    this.route.navigate(['./new-cardio-record-form']);
  }  

  loadCRecords(){
    this.storageService.getCRecords().then(records => {
      this.records = records; 
      console.log(JSON.stringify(this.records))
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

  async showToast(msg){
    const toast = await this.toast.create({
      message: msg,
      duration: 2000
    })
    toast.present();
  }

  ngOnInit() {
  }

}
