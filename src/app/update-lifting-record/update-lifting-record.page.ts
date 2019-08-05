import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { IonList, Platform, ToastController,} from '@ionic/angular';
import { ActivatedRoute, Router} from '@angular/router';
import { LRecords } from '../services/storage.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-lifting-record',
  templateUrl: './update-lifting-record.page.html',
  styleUrls: ['./update-lifting-record.page.scss'],
})
export class UpdateLiftingRecordPage implements OnInit {

  record: LRecords = <LRecords>{};
  updateForm: FormGroup;

  liftname: string;
  weight: number;
  reps: number;
  date: Date;

  constructor(private router: Router, private route: ActivatedRoute, 
    private toast: ToastController, private storageService: StorageService, private form: FormBuilder) { 
      
      this.route.queryParams.subscribe(params => {
        if(this.router.getCurrentNavigation().extras.state){
          this.liftname = this.router.getCurrentNavigation().extras.state.liftname;
          this.weight = this.router.getCurrentNavigation().extras.state.weight;
          this.reps = this.router.getCurrentNavigation().extras.state.reps;
          this.date = this.router.getCurrentNavigation().extras.state.date;
        }
      });
      
      this.updateForm = this.form.group({
        liftname: new FormControl('', Validators.compose([Validators.minLength(4), Validators.required])),
        weight: new FormControl('', Validators.compose([Validators.min(0), Validators.required])),
        reps: new FormControl('', Validators.compose([Validators.min(0), Validators.required])),
        date: new FormControl('', Validators.compose([Validators.required]))
      })

    }

  ngOnInit() {
  }

  setRecordValues(){
    
  }
  
  updateRecord(record: LRecords){

    this.storageService.updateLRecord(record).then(record =>{
      this.showToast('Record Updated')
    })
  }

  async showToast(msg){
    const toast = await this.toast.create({
      message: msg,
      duration: 500
    })
    toast.present();
  }

  back(){
    this.router.navigate(['/personal-records/lifting-records'])
  }

}
