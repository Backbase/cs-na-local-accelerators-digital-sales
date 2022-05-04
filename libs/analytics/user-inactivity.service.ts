import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TagManagerService } from './tag-manager.service';

@Injectable({
    providedIn: 'root',
})
export class UserInactivityService {
    constructor(
        private readonly _tagManagerService: TagManagerService
    ) {}

    timeoutId: any;
    userInactive: Subject<any> = new Subject();

    checkUserActivity() {
        clearTimeout(this.timeoutId);
        this.checkTimeOut();
    }

    checkTimeOut() {
        this.timeoutId = setTimeout(
          () => this._tagManagerService.triggerInactivityEvent(), 3000
        );
    }
}
