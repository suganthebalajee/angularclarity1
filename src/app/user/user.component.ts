import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service.service';
import { ViewUserComponent } from '../view-user/view-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public userDetails:any = [];
  constructor(private user:UserService) {  
	  this.user = user;
  }

  ngOnInit(){	  
	  this.user.getUsers().subscribe(data => {
		  this.userDetails = data;
		});
  }

}
