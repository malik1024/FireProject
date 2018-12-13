import { Component, OnInit, DoCheck} from '@angular/core';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import { DataService } from '../service/dataService/data.service';
@Component({
    selector: 'app-signIn',
    templateUrl: './signIn.component.html'
})

export class SignInComponent implements OnInit, DoCheck{

    public employee:FormGroup;
    firstName;
    lastName;
    fullName;

    constructor(private _dataService:DataService)
    {

    }
    ngOnInit()
     {
       this.employee= new FormGroup({

        FirstName:new FormControl(),
        LastName:new FormControl(),
      DisplayName:new FormControl(),
             Email:new FormControl(),
          Password:new FormControl(),
   ConfirmPassword:new FormControl()


       })      
     }

     ngDoCheck(){
         if(this.firstName && this.lastName) {
            this.fullName = this.firstName + ' ' + this.lastName;
         }
     }

     onSubmit()
     {
        this._dataService. registerValue(this.employee.value);
     }
}

