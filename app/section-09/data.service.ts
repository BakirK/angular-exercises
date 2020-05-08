// Observable DataService
import { Injectable } from '@angular/core';

import { createTestCustomers } from '../test-data';
import { LoggerService } from './logger.service';
import { Customer } from './model';

@Injectable()
export class DataService {
  constructor(private loggerService: LoggerService) { }

  getCustomers(): Customer[] {
    const customers: Customer[] = createTestCustomers();
    this.loggerService.log(customers.length.toString());
    return customers;
  }
}

