import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras} from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-weight-finder',
  templateUrl: './weight-finder.page.html',
  styleUrls: ['./weight-finder.page.scss'],
})
export class WeightFinderPage implements OnInit {

  userWeight: number = 45;
  bar: number = 45;
  totalWeight: number = this.userWeight - this.bar;
  currentBarSet: string;


  constructor(private router: Router, private form: FormBuilder) { 
    //this.userWeight = this.navParams.get("userWeight"); //used to set weight if this page is navigated from another page
  }

  ngOnInit() {
  }

  bartype = [
    {name: 'Olympic Bar (45lb, Standard)', number: 0, weight: 45, image: "assets/olympic.jpg"},
    {name: 'Yoke Bar (65lb)', number: 1, weight: 65, image: "assets/yoke.jpg"},
    {name: 'Olympic Bar (55lb)',number: 2, weight: 55, image: "assets/olympic.jpg"},
    {name: 'Hex/Trap Bar (45lb)', number: 3, weight: 45, image: "assets/hexbar2.jpg"},
    {name: 'Olympic Bar (35lb)', number: 4, weight: 35, image: "assets/olympic.jpg"},
    {name: 'Olympic Bar (25lb)', number: 5, weight: 25, image: "assets/olympic.jpg"},
    {name: 'Training Bar (15lb)', number: 6, weight: 15, image: "assets/training.jpg"}
  ];
  
  setUserWeight(userWeight: string){
    this.userWeight = Number(userWeight);
    console.log("User weight set: " + this.userWeight);
  }
  setBar(barWeight){
    this.bar = this.bartype[barWeight].weight;
    this.currentBarSet = this.bartype[barWeight].name;
    console.log("Bar Weight set: " + this.bar)
  }



  loadResults(userWeight: string){
      this.setUserWeight(userWeight);
      
      let navigationExtras: NavigationExtras = {
        state: {
          userWeight: this.userWeight,
          barWeight: this.bar
        }
      };

      this.router.navigate(['/weight-finder-results'], navigationExtras);
  }
  
}
