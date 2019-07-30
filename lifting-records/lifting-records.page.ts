import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Time } from '@angular/common';
import { LRecords } from '../services/storage.service';
import { IonList, Platform, ToastController,} from '@ionic/angular';
import { StorageService } from '../services/storage.service';
import { NewLiftingRecordFormPage } from '../new-lifting-record-form/new-lifting-record-form.page'
//ideally should have access to newLRecord from new-lifting-record page, but dont

@Component({
  selector: 'app-lifting-records',
  templateUrl: './lifting-records.page.html',
  styleUrls: ['./lifting-records.page.scss'],
})

export class LiftingRecordsPage implements OnInit {

  records: LRecords[] = [];
  
  /*
    for 7/30, easiest way to get collected data from Storage is going to be moving the 
    new-lifting-form.ts data over into this file, as there is no easy way to transfer that data 
    between pages. To take the place of the form page, now use a fab-button that, when pressed, 
    will create an instance of an ion-alert which will allow the user to 
    enter information in the same format that they would on the form page.
    Repeat for both pages
  */

  constructor(private storageService: StorageService, private plt: Platform, 
    private router: Router, private route: ActivatedRoute, private toast: ToastController) { 
      this.plt.ready().then(() => {
        this.loadRecords();
      });
  }

  ngOnInit() {
  
  }

  createRecord(){
    this.router.navigate(['/new-lifting-record-form']);
  }

  loadRecords(){
    this.storageService.getLRecords().then(archive => { //hoping this records = LRECORDS
      this.records = archive; 
      console.log(JSON.stringify(this.records))
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

  async showToast(msg){
    const toast = await this.toast.create({
      message: msg,
      duration: 2000
    })
    toast.present();
  }

}
