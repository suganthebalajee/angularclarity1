import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from 'clarity-angular';
import { UserService } from './user-service.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewUserComponent } from './view-user/view-user.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'user/:id', component: ViewUserComponent },
  { path: 'users', component: UserComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full'  }
];



@NgModule({
  declarations: [
    AppComponent,
    ViewUserComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
	FormsModule,
	 RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
