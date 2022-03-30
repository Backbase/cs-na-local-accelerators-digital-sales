import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectContextComponent } from './select-context/select-context.component';
import { SelectContextWidgetModule } from '@backbase/select-context-widget-ang';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SelectContextComponent,
  },
];

@NgModule({
  declarations: [SelectContextComponent],
  imports: [CommonModule, SelectContextWidgetModule, RouterModule.forChild(routes)],
})
export class SelectContextModule {}
