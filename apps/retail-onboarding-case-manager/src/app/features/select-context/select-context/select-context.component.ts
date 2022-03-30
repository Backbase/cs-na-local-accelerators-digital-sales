import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  templateUrl: './select-context.component.html',
})
export class SelectContextComponent {
  public readonly selectContextRedirect = `spa:${environment.landingPageUrl}`;
}
