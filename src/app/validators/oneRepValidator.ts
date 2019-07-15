import { FormControl } from '@angular/forms';

export class oneRepValidator{

    constructor(private control: FormControl){

    }

    static isValid(control: FormControl){
        if(isNaN(control.value)){
            return {
                "Please Enter Number (0-9)": true
            };
        }

        if(control.value % 1 !== 0){
            return {
                "Please enter a whole number": true
            };
        }

        return null;
    }

   
}