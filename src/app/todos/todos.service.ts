import { Injectable } from '@angular/core';
import { CommonAPIService } from '../shared/common-api-service.service';
import { Http, Response } from '@angular/http';
@Injectable()
export class TodosService extends CommonAPIService {
  userName: string;

  constructor(http: Http) {
    super(http)
  }

  deleteToDo(id:number) {
    return super.deleteAllById(id);
  }

}
