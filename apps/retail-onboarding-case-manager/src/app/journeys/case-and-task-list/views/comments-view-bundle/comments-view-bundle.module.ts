import { NgModule } from '@angular/core';
import {
  CommentsViewConfiguration,
  CommentsViewModule,
  COMMENTS_VIEW_CONFIGURATION,
} from '@backbase/case-manager-ang/case-overview';

const viewProperties = {
  comments: {
    showThreadsSelect: true,
  },
} as CommentsViewConfiguration;

@NgModule({
  imports: [CommentsViewModule],
  providers: [
    {
      provide: COMMENTS_VIEW_CONFIGURATION,
      useValue: viewProperties,
    },
  ],
})
export default class CommentsViewBundleModule {}
