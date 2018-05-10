import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseApi} from '../core/base-api';
import {Observable} from 'rxjs/Observable';
import { Category_Places } from '../models/category_places.model';
import { AuthHttp } from 'angular2-jwt';


@Injectable()
export class Category_PlacesService extends BaseApi {
  constructor (public http: HttpClient, public authHttp: AuthHttp) {
    super(http, authHttp);
  }
  getCategoryPlaces(): Observable<Category_Places[]> {
      return this.get('category_places')
    }

}
