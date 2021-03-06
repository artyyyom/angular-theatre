import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseApi} from '../core/base-api';
import {Observable} from 'rxjs/Observable';
import {Employees} from '../models/employees.model';
import { AuthHttp } from 'angular2-jwt';
import { Router } from '@angular/router';

@Injectable()
export class EmployeesService extends BaseApi {
  constructor (public http: HttpClient, 
    public authHttp: AuthHttp,
    public router: Router) {
    super(http, authHttp, router);
  }
  getEmployees(): Observable<Employees[]> {
      return this.get('employees')
    }

  getEmployee(id: number): Observable<Employees> {
    return this.get(`employees/${id}`)  
  }
  addEmployee(data: any = {}) {
    return this.authPost('employees', data);
  }
  updateEmployee(id: number, data: any = {}) {
    return this.authPut(`employees/${id}`, data);
  }
  deleteEmployee(id: number) {
    return this.authDelete(`employees/${id}`);
  }
  upload(data) {
    return this.authPost('uploadEmployeePhotos', data);
  }
}
