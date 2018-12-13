import { Component,OnInit} from '@angular/core';
import { DataService } from '../service/dataService/data.service'
import {Observable} from 'rxjs';
@Component({
    selector: 'app-displayData',
    templateUrl: './display.component.html'
  })

  export class DisplayDataComponent implements OnInit{
    formData: any;
    list = [];
    constructor(private _dataService:DataService)
    {}
    ngOnInit()
    {
           
       //    console.log( 'From Component' + this. _dataService.fetchValue());
           /* console.log("data recieve from firebase");
           console.log(this.list); */
           
          this._dataService.fetchValue('data').subscribe(data => {
            console.log('In display' +data);
            this.formData = data;
           });
        //   this.af.list(listPath).valueChanges();
           console.log('In display' + this.formData)
            
}
}