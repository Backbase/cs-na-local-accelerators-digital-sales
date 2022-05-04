import { InjectionToken } from '@angular/core';
export const WindowToken = new InjectionToken<Window>('WindowToken');
export function windowProvider() {
  return window;
}
