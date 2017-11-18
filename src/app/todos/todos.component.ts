import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';
import { TodosService } from '../todos/todos.service';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers:[UsersService,TodosService]
})
export class TodosComponent implements OnInit {
  sub: any;
  id: any;
  toDos: any[];
  userName:string;
  constructor(private usersService: UsersService, private router: Router, private route: ActivatedRoute,private todosService:TodosService) { }

  ngOnInit() {
    //get dodos by passing user id
    this.sub = this.route.params.subscribe(params => {
      this.usersService.getToDos(params['id']).subscribe(
        todos => {
          this.toDos = todos;  
        } 
      ) 

    });
  } 
//calling delete from todo service
  deleteToDo(id:number)
  {
    this.todosService.deleteToDo(id).subscribe(result =>
    {
      console.log("Delete executed");
    });
  }
  //get user name from user service 
  getuserName()
  {
    return this.usersService.getUserName();
  }

}