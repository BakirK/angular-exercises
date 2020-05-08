import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AddressComponent } from './address.component';
import { AppComponent } from './app.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { CustomerListComponent } from './customer-list.component';
import { DataService } from './data.service';
import { LoggerService } from './logger.service';


// import { DataService } from './data-p.service';

@NgModule({
  imports: [                  // What stuff do I need?
    BrowserModule,
    FormsModule
  ],
  declarations: [             // What's in my app module?
    AppComponent,
    AddressComponent,
    CustomerDetailComponent,
    CustomerListComponent
  ],
  providers: [DataService, LoggerService], // What services do I provide?
  bootstrap: [AppComponent] // Where do I start?
})
export class AppModule { }
