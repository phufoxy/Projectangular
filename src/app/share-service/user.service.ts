import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable}   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import{User}  from '../user';

@Injectable()
export class UserService {
  private baseUrl:string='';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private user = new User();
  constructor(private _http:Http) { } 
  getUsers(){
    return this._http.get(this.baseUrl+'http://localhost:3000/user',this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  login(username:String,password:String){
    return this._http.get(this.baseUrl+'http://localhost:3000/user?username='+username+"&password="+password,this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  errorHandler(error:Response){
    return Observable.throw(error||"SERVER ERROR");
 }
}
