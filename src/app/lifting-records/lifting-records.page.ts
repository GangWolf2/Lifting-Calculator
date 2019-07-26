import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Time } from '@angular/common';

@Component({
  selector: 'app-lifting-records',
  templateUrl: './lifting-records.page.html',
  styleUrls: ['./lifting-records.page.scss'],
})
export class LiftingRecordsPage implements OnInit {

  data: any;

  lifting_records = [
    { 
      liftArea: '',
      liftName: '',
      weightLifted: 0,
      reps: 0,
      date: '', //builtin restrictions
      time: ''
    }
  ]

  constructor(private router: Router, private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      
      //need to install cordova sqlite plugin to store and retrieve results
      if(this.router.getCurrentNavigation().extras.state){
        this.data = this.router.getCurrentNavigation().extras.state.submitted;
      }
      console.log("Data: " + this.data);
      
    })
  }

  ngOnInit() {
    this.lifting_records.push(this.data.area, this.data.name, this.data.weight, this.data.reps, this.data.date, this.data.time);
  }


  newRecord(){
    this.router.navigate(['/new-lifting-record-form']);
  }

}
