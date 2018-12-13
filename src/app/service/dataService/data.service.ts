import{Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs';
import { AngularFireDatabase, AngularFireList }from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase/app';
@Injectable()
export class DataService{
   // formData: Observable<any[]>;
    constructor(private af: AngularFireDatabase, public Http : Http,
        public afAuth: AngularFireAuth
    ){}
    
    formValue(data:any){
        console.log('Data received from component');
      /*  this.af.post('https://fir-demo-da191.firebaseio.com/data.json', data).subscribe(
            (response) => {console.log(response); },
            (error) => {console.log(error); },
            () => {}
        );*/

        this.af.list('/data').push(data)
        

    }

    fetchValue(path)
    {
       /* this.http.get('https://fir-demo-da191.firebaseio.com/data.json').subscribe(
            (response)=> { 
                console.log( response.json());
                return JSON.stringify(response);
            }
        );*/     
        console.log('Data received from firebase');
        return this.af.list(path).valueChanges();
    }
 registerValue(data:any)
   
    {
        console.log('Data received from SingIn Component');
        this.af.list('/registerValue').push(data);
    }

    getCountryService(){
        return  this.Http.get('https://raw.githubusercontent.com/substack/provinces/master/provinces.json').pipe(map(data => data));
    }

    loginGithub() {
        const provider = new firebase.auth.GithubAuthProvider();
        return this.oAuthLogin(provider);
      }
      private oAuthLogin(provider) {
        return this.afAuth.auth.signInWithPopup(provider)
        .then((credential) => {
        console.log(credential);
           });
      }
}
