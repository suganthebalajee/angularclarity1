import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
	id: number;
  private sub:any = [];
  public userTodos:any = [];
  title: string = '';
  checkboxStatus:boolean;


   constructor(private user:UserService, private route: ActivatedRoute) {  
	  this.user = user;
  }
  
  ngOnInit(){
//getting value from route param	  
	this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
    });
	  this.user.getTodos(this.id).subscribe(data => {
		  this.userTodos = data
	      console.log(this.userTodos);
		});
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  deleteTodo(id:number){
	  console.log(id);
	  this.user.deleteTodos(id).subscribe(data => {
		  console.log(data);
		  window.location.reload()
		  alert("deleted");
		});
  }
  updateTodo(id:number, completedStatus:boolean){
	  	this.user.updateTodos(id, completedStatus).subscribe(data => {
		  alert("updated");
		  window.location.reload();
		});
  }
  createTodo(title:string, id:number){
	  this.user.createTodos(title,id).subscribe(data => {
		  console.log(data);
		  alert("created");
		  window.location.reload();
		});
  }

}
