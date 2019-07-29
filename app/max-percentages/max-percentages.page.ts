import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-max-percentages',
  templateUrl: './max-percentages.page.html',
  styleUrls: ['./max-percentages.page.scss'],
})
export class MaxPercentagesPage implements OnInit {


  public maxperForm: FormGroup;
  
  percentages = [];
  oneRepMax: number = 0;
  rounded: number;
  roundUp: boolean = true;
  
  

  constructor(public navCtrl: NavController, private form: FormBuilder) { 
    //this.oneRepMax = this.navParams.get("oneRepMax");
    //this.roundUp = this.navParams.get("rounding"); //will most likely need to create a Storage, static variable not resetting when closing app
    this.maxperForm = this.form.group({
      oneRep: new FormControl('', Validators.pattern("^[0-9]*$") ) 
    })
    this.maxperForm.valueChanges.subscribe(console.log);
  }

  ngOnInit(){
   
  }

  set1RM(oneRep: string){
   this.oneRepMax = Number(oneRep);
   console.log(this.oneRepMax);
  
   this.percentages = [
    {value: 100,multiplier: Math.abs(this.oneRepMax * 1)},
    {value: 95, multiplier: Math.ceil(this.oneRepMax * 0.95)},
    {value: 90, multiplier: Math.ceil(this.oneRepMax * 0.90)},
    {value: 85, multiplier: Math.ceil(this.oneRepMax * 0.85)},
    {value: 80, multiplier: Math.ceil(this.oneRepMax * 0.80)},
    {value: 75, multiplier: Math.ceil(this.oneRepMax * 0.75)},
    {value: 70, multiplier: Math.ceil(this.oneRepMax * 0.70)},
    {value: 65, multiplier: Math.ceil(this.oneRepMax * 0.65)},
    {value: 60, multiplier: Math.ceil(this.oneRepMax * 0.60)},
    {value: 55, multiplier: Math.ceil(this.oneRepMax * 0.55)},
    {value: 50, multiplier: Math.ceil(this.oneRepMax * 0.50)}
];
  }

changeDisplay(){
  var x = document.getElementById("results");
  if (x.style.display == "none"){
    x.style.display = "block";
  }
}

closestRoundUp(value: number){
  this.rounded = value;
  while(this.rounded % 5 != 0){
    this.rounded += 1;
  }
  var x = document.getElementById("round");

  if(x.style.display == "none"){
    x.style.display = "inline";
  }
  console.log(this.rounded);
  return this.rounded;
}


}




