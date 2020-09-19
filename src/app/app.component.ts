import { Component, OnInit } from '@angular/core';
import { urls } from './url'
import { LoaderService } from './shared/loader/loader.service';

/**
 * Component to show all the filters and content for the space x launch program.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selectedYear;
  years = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
  title = 'space-x';
  data;
  launchSucc: boolean;
  landSucc: boolean;
  page = 1;


  constructor(private readonly loader:LoaderService){

  }

  ngOnInit(): void {
  this.makeUrlAndUpdateData()
  }


  /**
   * Method to change the selected year which is by default undefined, if same year is selected twice then it's
   * set to undefined to remove the year filter and calls the api to fetch the data.
   * 
   * @param {number} year Year selected by the user.
   */
  yearChange(year: number): void {
    this.selectedYear = year===this.selectedYear?undefined:year;
    this.page = 1;
    this.makeUrlAndUpdateData();
  }


  /**
   * Method to change the selected filter for launch success or landing success or both which is by default
   * undefined, if same year is selected twice then it's set to undefined to remove the filter and calls 
   * the api to fetch the data.
   * 
   * @param {string} type Type of filter,i.e, either launch success or landing success.
   * @param {boolean} val Value of the filter in boolean.
   */
  filterChange(type: string, val: boolean): void {
    this.page = 1;
    if (type === 'launch') {
      this.launchSucc = val===this.launchSucc?undefined:val;
    } else {
      this.landSucc = val===this.landSucc?undefined:val;
    }
    this.makeUrlAndUpdateData();
  }


  /**
   * Method to fetch the data from the API with the applied filters.
   * 
   */
  makeUrlAndUpdateData(): void{
    this.loader.showLoader();
    let url = urls.noFilter;
    if(this.selectedYear!==undefined){
      url += `&launch_year=${this.selectedYear}`;
    }
    if(this.launchSucc!==undefined){
      url += `&launch_success=${this.launchSucc}`;
    }
    if(this.landSucc!==undefined){
      url += `&land_success=${this.landSucc}`;
    }
    fetch(url).then(res => {
      return res.json();
    }).then(res => {
      this.data = res;
      this.loader.hideLoader();
    }).catch(err => {
      console.log(err);
      this.loader.hideLoader();
    });
  }


}
