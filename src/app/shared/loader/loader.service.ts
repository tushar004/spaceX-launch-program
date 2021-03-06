/** Angular Injectable module declaration */

import { Injectable } from '@angular/core';
/** Import Subject */

import { BehaviorSubject } from 'rxjs';
/** Declares it as Injectable */

@Injectable({
  providedIn: "root"
})
export class LoaderService {
  /** Variable initilaise of type subject */

  loaderStatus: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor() {}
  /** if we want to show loader 
   * on browser
  */

  showLoader() {
    this.loaderStatus.next(true);
  }
  /** if we want to hide loader */

  hideLoader() {
    this.loaderStatus.next(false);
  }
  /** Loader status for loader component
   * i.e show or hide the loader
   */

  public getLoaderStatus() {
    return this.loaderStatus.asObservable();
  }
}
