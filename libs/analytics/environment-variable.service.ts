import { Injectable, Inject } from '@angular/core';
import { WindowToken } from './window.provider';
import { BehaviorSubject } from 'rxjs';

export interface EnvironmentVariables {
  [key: string]: string;
}

/* Quick and dirty way to get host environment and environment variables. Ideally done through remote config */
export enum ProjectEnvironment {
  LOCAL = 'localhost',
  DEV = 'dev.project.com',
  TEST = 'test.project.com',
  UAT = 'uat.project.com',
  PROD = 'project.com'
}

@Injectable({
  providedIn: 'root',
})
export class EnvironmentVariableService {
  private version = '2022.some-cool-version';
  private googleAnalyticsId = 'GTM-T3BFN4X';
  public environmentVariables$: BehaviorSubject<EnvironmentVariables> =
    new BehaviorSubject<EnvironmentVariables>({
      version: this.version,
      googleAnalyticsId: this.googleAnalyticsId,
      environment: this.getEnvironment()
    });

  constructor(
    @Inject(WindowToken) private readonly _window: Window,
  ) {}

  public async init(): Promise<EnvironmentVariables> {
      console.log(`Booting up ${this.version}`);

      return this.environmentVariables$.getValue();

  }

  public getEnvironmentVariables(): EnvironmentVariables {
    return this.environmentVariables$.getValue();
  }

  private getEnvironment(): ProjectEnvironment {
    return this._window.location.hostname as ProjectEnvironment;
  }
}