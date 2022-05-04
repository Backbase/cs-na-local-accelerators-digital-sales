import { Inject, Injectable } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { WindowToken } from './window.provider';
import { EnvironmentVariables, EnvironmentVariableService } from './environment-variable.service';

type GTMEvent = { [key: string]: any };
interface GTMWindow extends Window {
  dataLayer?: GTMEvent[]
}

@Injectable({
  providedIn: 'root',
})
export class TagManagerService {
  constructor(
    @Inject(WindowToken) private readonly window: GTMWindow,
    private readonly _route: ActivatedRoute,
    private _env: EnvironmentVariableService,
  ) {}

  /**
   * @name loadGTM
   * @description
   * Initializes Google Tag Manager
   *
   */
   async initGTM() {
    if (this.window.dataLayer && this.window.dataLayer.length) { return; }

    try {
        const environmentVariables: EnvironmentVariables = this._env.getEnvironmentVariables();
        if (environmentVariables.googleAnalyticsId) {

        /* This is basically what Google provides as their init script */
        (function(
          windowRef: GTMWindow,
          documentRef: Document,
          tagManagerId: string
        ) {
          windowRef.dataLayer = windowRef.dataLayer || [];
          windowRef.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
          const scriptContainer = documentRef.getElementsByTagName('script')[0];
          const createdScriptElement = documentRef.createElement('script');
          createdScriptElement.async = true;
          createdScriptElement.src = 'https://www.googletagmanager.com/gtm.js?id=' + tagManagerId;
          scriptContainer?.parentNode?.insertBefore(createdScriptElement, scriptContainer);
        })(this.window, document, environmentVariables.googleAnalyticsId);

        /* Since this isn't happening on navigation end, fire it off */
        const route = this.window.location.hash.match(/#\/(.+)\?/)?.[1];
        const queryParams = this._route.snapshot.queryParams;

        /* Send pageview event */
        this.triggerPageView(route || '', queryParams);
      }
      else {
        console.error('Unable to load Google Tag Manager');
      }
    }
    catch(error) {
      console.error(`Unable to load Google Tag Manager`, error);
    }
  }

  /**
   * @name isDataLayerAvailable
   * @description
   * Ensures Google Tag Manager data layer is available
   */
  private isDataLayerAvailable(): boolean | undefined {
    return (
      (<any>this.window).dataLayer &&
      typeof (<any>this.window).dataLayer.push === 'function'
    );
  }

  /**
   * @name emitEvent
   * @description
   * Logs and emits a Google Tag Manager event
   *
   * @param gtmEvent {gtmEvent} Google Tag Manager event to emit
   */
  private async emitEvent(gtmEvent: GTMEvent) {
    const dataLayer = (<any>this.window).dataLayer;
    if (this.isDataLayerAvailable()) {
      console.log(gtmEvent)
      dataLayer.push(gtmEvent);
    }
  }

  /**
   * @name triggerPageView
   * @description
   * Triggers Google Tag Manager custom event "pageviewCustomEvent". Attaches currentStep and queryParams to GTM data layer
   *
   * @param spaURL {string} step URL
   * @param queryParams {Params} query params in Angular Params type from ActivatedRoute.snapshot.queryParams
   */
  triggerPageView(spaURL: string, queryParams?: Params) {

    let gtmEvent: GTMEvent = {
      event: 'pageviewCustomEvent',
      gaEventCategory: 'Page View',
      currentStep: spaURL
    };
    if (queryParams && Object.keys(queryParams).length > 0) {
      gtmEvent['queryParams'] = {
        ...queryParams
      }
    }
    this.emitEvent(gtmEvent);
  }
}
