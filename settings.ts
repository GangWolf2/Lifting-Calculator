import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
}) 
export class SettingsPage{

    roundUp: boolean;

    constructor(public navCtrl: NavController, public navParams: NavParams){

    }
                    //EDIT: after going through it, for loop would assign a separate eventListener for each collapsible button
    collapsible(){ //issue i see is this may activate all "collapsible" buttons at same time
      var collapse = document.getElementsByClassName("collapsible");

      for(var i = 0; i < collapse.length; i++){//this part specifically

        collapse[i].addEventListener("click", function(){
          this.classList.toggle("active"); //this is the reference to collapse[i]
          var content = this.nextElementSibling;
          if(content.style.display == "block"){
            content.style.display = "none";
          }
          else{
            content.style.display = "block";
          }
        });

      }
    }

}

