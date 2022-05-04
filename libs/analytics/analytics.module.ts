import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowToken, windowProvider } from './window.provider';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: WindowToken, useFactory: windowProvider },
  ]
})
export class AnalyticsModule { }
