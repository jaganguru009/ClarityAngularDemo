import { Injectable } from '@angular/core';
import { CommonAPIService } from '../shared/common-api-service.service';
import { Http, Response } from '@angular/http';
@Injectable()
export class UsersService extends CommonAPIService {
  userName: string;

  constructor(http: Http) {
    super(http)
  }

  getUsers() {
    return super.getAll();
  }
  getToDos(id: number) {
    return super.getAllById(id);
  }
  setUserName(name: string) { 
      localStorage.setItem("userName", name);
  }
  getUserName() {
    return localStorage.getItem("userName");
  }

}