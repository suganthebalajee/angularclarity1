import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
//https://jsonplaceholder.typicode.com/users
@Injectable()
export class UserService {

  constructor(public http: HttpClient) {
	   this.http = http;
       console.log('Hello user service Provider');
  }
  
  getUsers():Observable<any> {
	    return this.http.get('https://jsonplaceholder.typicode.com/users')
		.map(res =>
			res = res
		, err => {
			console.log(err);
			
		})		
  }
  getTodos(property):Observable<any> {
	let params = new HttpParams();
	params = params.append('userId', property);

	  return this.http.get('https://jsonplaceholder.typicode.com/todos?',{params: params})
		.map(res =>
			res = res
		, err => {
			console.log(err);
			
		})		
  }
  deleteTodos(property):Observable<any> {
	  return this.http.delete('https://jsonplaceholder.typicode.com/todos/'+property)
		.map(res =>
			res = res
		, err => {
			console.log(err);
			
		})		
  }
  updateTodos(id, chkStatus):Observable<any> {
	  let params = new HttpParams();
	  params = params.append('chkStatus', chkStatus);
	  params = params.append('id', id);
	  return this.http.put('https://jsonplaceholder.typicode.com/todos/'+id, {params: params})
		.map(res =>
			res = res
		, err => {
			console.log(err);
			
		})		
  }
  createTodos(title, id):Observable<any> {
	  let params = new HttpParams();
	  params = params.append('title', title);
	  params = params.append('id', id);
	  return this.http.post('https://jsonplaceholder.typicode.com/todos', {params: params})
		.map(res =>
			res = res
		, err => {
			console.log(err);
			
		})		
  }
}
