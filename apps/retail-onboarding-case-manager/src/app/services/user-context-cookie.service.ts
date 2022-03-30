import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserContextCookieService {
  private _isUserContextCookieSet = new BehaviorSubject(false);
  isUserContextCookieSet = this._isUserContextCookieSet.asObservable();

  setUserContextCookieStatus(value: boolean) {
    this._isUserContextCookieSet.next(value);
  }
}
