import { Component, OnInit } from '@angular/core';
import {UsersService} from './users.service'; 
import { Routes, RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[UsersService]
})

export class UsersComponent implements OnInit {
users :any[];
  constructor(private usersService:UsersService, private router: Router) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe(
      users=>
      {
        this.users=users;
      }
    ); 
  }
  onUserSelect(user:any)
  {
    this.router.navigate(["/todos", user.id]);
    this.usersService.setUserName(user.name);
  } 

}