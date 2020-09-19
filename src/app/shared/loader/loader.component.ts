/** Angular module declaration */

import { Component, OnInit } from '@angular/core';
/** Import service for status */

import { LoaderService } from './loader.service';

/** Component Decorator:
 * selector:it is used to inclide this component via HTML
 * template URL:path of HTML
 * styleUrls:path of css
 */
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
/** class declaration
 */
export class LoaderComponent implements OnInit {
  /** class variable initialise
   */

  public showLoader: boolean;
  /*
    service instance created
   */
  constructor(private readonly loaderService: LoaderService) {}
  /*
    subsribed to observable for getting status for
    loader
   */
  ngOnInit() {
    this.loaderService.getLoaderStatus().subscribe(resp => {
      this.showLoader = resp;
    });
  }
}
