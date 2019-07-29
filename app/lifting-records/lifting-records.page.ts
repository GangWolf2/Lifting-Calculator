import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Time } from '@angular/common';
import { LRecords } from '../services/storage.service';
import { IonList, Platform, ToastController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';
import { NewLiftingRecordFormPage } from '../new-lifting-record-form/new-lifting-record-form.page';
import { newLRecord } from '../new-lifting-record-form/new-lifting-record-form.page';
//ideally should have access to newLRecord from new-lifting-record page

@Component({
  selector: 'app-lifting-records',
  templateUrl: './lifting-records.page.html',
  styleUrls: ['./lifting-records.page.scss'],
})
export class LiftingRecordsPage implements OnInit {

  newLRecord: LRecords = newLRecord;
   //might have to get value from the form page, try using state to navigate the value of the newLRecords array to this page to display
  //might also just need to reference my-lrecords or my-crecords, since those hold all info
  //and are located in the storage service, which you can create a reference to
  

  constructor(private storageService: StorageService, private plt: Platform, 
    private router: Router, private route: ActivatedRoute) { 
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

  createRecord(){
    this.router.navigate(['/new-lifting-record-form']);
  }

}
