import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras} from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-weight-finder',
  templateUrl: './weight-finder.page.html',
  styleUrls: ['./weight-finder.page.scss'],
})
export class WeightFinderPage implements OnInit {

  public wfForm: FormGroup;
  userWeight: number;
  bar: number;
  constructor(private router: Router, private dataService: DataService, private form: FormBuilder) { 
    //this.userWeight = this.navParams.get("userWeight"); //used to set weight if this page is navigated from another page
    this.wfForm = this.form.group({
      weight: new FormControl('', Validators.pattern("^[0-9]*$")),
    })
  }

  ngOnInit() {
  }

  bartype = [
    {name: 'Olympic Bar', number: 0, weight: 45, img: "assets/olympic.jpg", isChecked: true},
    {name: 'Training Bar', number: 1, weight: 15, img: "assets/training.jpg",isChecked: false},
    {name: 'Hex/Trap Bar', number: 2, weight: 45, img: "assets/hex.jpg", isChecked: false},
    {name: 'Yoke Bar', number: 3, weight: 65, img: "assets/yoke.jpg", isChecked: false},
    {name: 'Swiss Bar', number: 4, weight: 35, img: "assets/swiss.jpg", isChecked: false}
  ];

  private barTypeHolder = [
    {name: 'Holder', weight: 0, img:"https://imgur.com/2RgEPaO.png", isChecked: false}
  ];

  setUserWeight(userWeight: string){
    this.userWeight = Number(userWeight);
    console.log("User weight set: " + this.userWeight);
  }

  setBarsFalse(bar: number){
    this.bartype[bar].isChecked = true; 
    
    /*
      for(var i = 0; i < this.bartype.length; i++){
      if (this.bartype[i] != this.bartype[bar]){
        this.bartype[i].isChecked = false;
      }
    }
    this.barTypeHolder[0] = this.bartype[bar];
    this.bartype[bar] = this.bartype[0];
    this.bartype[0] = this.barTypeHolder[0];

    for(var i = 1; i < this.bartype.length; i++){
      this.bartype[i].isChecked = false;
    }
*/
    if(this.bartype[bar].isChecked){
      this.bar = this.bartype[bar].weight;
      console.log("Bar weight is set");
    }
    console.log('Bars are reset');
  } 


  loadWeightFinderResultsPage(userWeight: string){
    try{
      this.setUserWeight(userWeight);
      console.log('User Weight Set: ' + this.userWeight);
      
      let navigationExtras:NavigationExtras = {
        state: {
          userWeight: this.userWeight,
          bar: this.bar
        }
      };
      this.router.navigate(['weight-finder-results'], navigationExtras);
    }
    catch(error){
      console.error(error);
    }
  
    /*
    this.navCtrl.navigateForward(['./weight-finder-results', {
      userWeight: this.userWeight,
      bar: this.bar
    }]);
    */
  }


  
}
