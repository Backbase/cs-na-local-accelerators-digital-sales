import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowToken, windowProvider } from './window.provider';
import { TagManagerService } from './tag-manager.service';
import { UserInactivityService } from './user-inactivity.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: WindowToken, useFactory: windowProvider },
    TagManagerService,
    UserInactivityService,
  ]
})
export class AnalyticsModule { }
