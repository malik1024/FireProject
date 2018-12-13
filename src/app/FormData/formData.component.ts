import { Component,OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../service/dataService/data.service';
import * as _ from 'lodash';
@Component({
    selector: 'app-formData',
    templateUrl: './formData.component.html'
  })
export class FormDataComponent implements OnInit{
     public countryList:any;
     public  student:FormGroup;
     public data:any;
     public states;
     constructor(private _dataService:DataService)
     {}
     
     

     ngOnInit()
     {
       
       this.student= new FormGroup({
       
        name: new FormControl(),
        age : new FormControl(),
        city : new FormControl(),
        country:new FormControl(),
        state: new FormControl()
    
       })
       this.getCountries();
         }

         onSubmit()
         {
            if(this.student.valid)
           console.log(this.student.value) 

          this._dataService.formValue(this.student.value);
             
         }

         getCountries(): any{
           this._dataService.getCountryService().subscribe(
            (response)=> { 
                console.log( response.json());
               this.data = response.json();
              
             this.countryList = _.uniq(_.map(this.data, 'country'));
              
            })
         }

         getStateList(item){
           const selectedStates =  this.student;
           this.states = _.filter(this.data, {country: item });
         }
         login(){
          this._dataService.loginGithub();
         }
}

