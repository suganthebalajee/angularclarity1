import { Component } from '@angular/core';
import { UserService } from './user-service.service';
import { ViewUserComponent } from './view-user/view-user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public userDetails:any = [];
  constructor(private user:UserService) {  
	  this.user = user;
  }
  
  ngOnInit(){	  
	  this.user.getUsers().subscribe(data => {
		  this.userDetails = data
	      console.log(this.userDetails);
		});
  }
}
