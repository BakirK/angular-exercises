/* tslint:disable:no-unused-variable */
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { LoggerService } from './logger.service';
import { Customer } from './model';

@Injectable()
export class DataService {
  private customersUrl = 'api/customers';
  private statesUrl = 'api/states';
  private messagesUrl = 'api/messages';

  constructor(
    private http: Http,  // <-- inject http
    private logger: LoggerService) { }

  /** Get existing customers as a Promise */
  getCustomersP(): Promise<Customer[]> {
    this.logger.log('Getting customers as a Promise via Http ...');

    return this.http.get(this.customersUrl) // <-- returns an observable
      .toPromise()  // <-- convert immediately to a promise
      .then(response => {
        const custs = response.json().data as Customer[]; // <-- extract data from the response
        this.logger.log(`Got ${custs.length} customers`);
        return custs;
      })
      .catch((error: any) => {
        this.logger.log(`An error occurred ${error}`); // for demo purposes only
        // re-throw user-facing message
        return Promise.reject('Something bad happened with customers; please check the console');
      });
  }

  /** Get existing customers as an Observable */
  getCustomers(): Observable<Customer[]> {
    this.logger.log('Getting customers as an Observable via Http ...');

    return this.http.get(this.customersUrl)
      .map(response => response.json().data as Customer[])  // <-- extract data
      .do(custs => this.logger.log(`Got ${custs.length} customers`))
      .catch((error: any) => {
        this.logger.log('Error occured: ${error}');
        return Observable.throw("Failed to get customers");
      });
  }

  getStates(): Observable<string[]> {
    this.logger.log('Getting states as an Observable via Http ...');
    return this.http.get(this.statesUrl)
      .map(response => response.json().data as string[])
      .do(stas => this.logger.log(`Got ${stas.length} states`))
      .catch((error: any) => {
        this.logger.log('Error occured: ${error}');
        return Observable.throw("Failed to get states");
      });
  }

  getMessages(): Observable<string[]> {
    this.logger.log('Getting messages as an Observable via Http ...');
    return this.http.get(this.messagesUrl)
      .map(response => response.json().data as string[])
      .do(stas => this.logger.log(`Got ${stas.length} states`))
      .catch((error: any) => {
        this.logger.log(`Error occured: ${error}`);
        return Observable.throw("Failed to get messages");
      });
  }
}
