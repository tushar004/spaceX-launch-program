import { Component, OnInit } from '@angular/core';
import { urls } from './url'
import { LoaderService } from './shared/loader/loader.service';

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


  yearChange(year: number): void {
    this.selectedYear = year===this.selectedYear?undefined:year;
    this.page = 1;
    this.makeUrlAndUpdateData();
  }


  filterChange(type: string, val: boolean): void {
    this.page = 1;
    if (type === 'launch') {
      this.launchSucc = val===this.launchSucc?undefined:val;
    } else {
      this.landSucc = val===this.landSucc?undefined:val;
    }
    this.makeUrlAndUpdateData();
  }

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
