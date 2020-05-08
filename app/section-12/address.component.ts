import { Component, Input, OnInit } from '@angular/core';

import { DataService } from './data.service';
import { LoggerService } from './logger.service';
import { Address } from './model';

@Component({
  moduleId: module.id,
  selector: 'my-address',
  templateUrl: 'address.component.html'
})
export class AddressComponent implements OnInit {
  @Input() address: Address;
  isBusy = false;

  constructor(private dataService: DataService, private logger: LoggerService) { }
  ngOnInit(): void {
    this.getMessages();
    this.getStates();
  }

  getStates() {
    this.states = undefined;
    this.isBusy = true;
    this.logger.log('Getting states from address component ...');

    this.dataService.getStates().subscribe(
      stas => {
        this.isBusy = false;
        this.states = stas;
      },
      (error: string) => {
        this.isBusy = false;
        alert(error);
      }
    );
  }

  getMessages() {
    this.messages = undefined;
    this.isBusy = true;
    this.logger.log('Getting messages from address component ...');

    this.dataService.getMessages().subscribe(
      stas => {
        this.isBusy = false;
        this.messages = stas;
      },
      (error: string) => {
        this.isBusy = false;
        alert(error);
      }
    );
  }

  regions = ['East', 'Midwest', 'North', 'South', 'West'];
  states: string[];
  messages: string[];
}
