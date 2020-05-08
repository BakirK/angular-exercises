import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AddressComponent } from './address.component';
import { AppComponent } from './app.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { CustomerListComponent } from './customer-list.component';
import { DataService } from './data.service';
import { InMemoryDataService } from './in-memory-data.service';
import { LoggerService } from './logger.service';

// in-mem-web-api and its test-data service
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,

    HttpModule,  // <--  add HttpModule here

    InMemoryWebApiModule.forRoot(InMemoryDataService) // <-- register in-mem-web-api and its data
  ],
  declarations: [
    AppComponent,
    AddressComponent,
    CustomerDetailComponent,
    CustomerListComponent
  ],
  providers: [
    DataService,
    LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
