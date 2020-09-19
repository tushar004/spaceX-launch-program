import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LoaderService } from './shared/loader/loader.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let loader: LoaderService;
  let fixture2: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers:[
        LoaderService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    
    fixture2 = TestBed.createComponent(AppComponent);
    component = fixture2.componentInstance;
    fixture2.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'space-x'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('space-x');
  });

  describe('year change method call', () => {
    beforeEach(() => {
      spyOn(component, 'makeUrlAndUpdateData');
      component.selectedYear = 2006;
      component.yearChange(2009);
    });
    it('check if method to update data was called', () => {
      expect(component.makeUrlAndUpdateData).toHaveBeenCalled();
    });
    it('check if the year was changed', () => {
      expect(component.selectedYear).toEqual(2009);
    }); 
  });
  describe('year change method call for same value', () => {
    beforeEach(() => {
      spyOn(component, 'makeUrlAndUpdateData');
      component.selectedYear = 2009;
      component.yearChange(2009);
    });
    it('check if the year was changed', () => {
      expect(component.selectedYear).toEqual(undefined);
    }); 
  });



  describe('filter change method call for landing success', () => {
    beforeEach(() => {
      spyOn(component, 'makeUrlAndUpdateData');
      component.launchSucc = false;
      component.filterChange('launch',true);
    });
    it('check if method to update data was called', () => {
      expect(component.makeUrlAndUpdateData).toHaveBeenCalled();
    });
    it('check if the year was changed', () => {
      expect(component.launchSucc).toEqual(true);
    });
  });

  describe('filter change method call for landing success for same value', () => {
    beforeEach(() => {
      spyOn(component, 'makeUrlAndUpdateData');
      component.launchSucc = true;
      component.filterChange('launch',true);
    });
    it('check if the year was changed', () => {
      expect(component.launchSucc).toEqual(undefined);
    });
  });



  describe('filter change method call for launch success', () => {
    beforeEach(() => {
      spyOn(component, 'makeUrlAndUpdateData');
      component.landSucc = false;
      component.filterChange('land',true);
    });
    it('check if method to update data was called', () => {
      expect(component.makeUrlAndUpdateData).toHaveBeenCalled();
    });
    it('check if the year was changed', () => {
      expect(component.landSucc).toEqual(true);
    });
  });
  describe('filter change method call for launch success for same value', () => {
    beforeEach(() => {
      spyOn(component, 'makeUrlAndUpdateData');
      component.landSucc = true;
      component.filterChange('land',true);
    });
    it('check if the year was changed', () => {
      expect(component.landSucc).toEqual(undefined);
    });
  });

  describe('check fetch url with all params', () => {
    beforeEach(() => {
      spyOn(window, 'fetch').and.callThrough();
      component.landSucc = true;
      component.launchSucc = true;
      component.selectedYear = 2009;
      component.makeUrlAndUpdateData();
    });
    it('check if parameters in url were updating', () => {
      expect(window.fetch).toHaveBeenCalledWith('https://api.spaceXdata.com/v3/launches?limit=100&launch_year=2009&launch_success=true&land_success=true');
    });
  });

  describe('check fetch url with two params', () => {
    beforeEach(() => {
      spyOn(window, 'fetch').and.callThrough();
      component.landSucc = true;
      component.launchSucc = true;
      component.makeUrlAndUpdateData();
    });
    it('check if parameters in url were updating', () => {
      expect(window.fetch).toHaveBeenCalledWith('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true');
    });
  });  

  describe('check fetch url with one params', () => {
    beforeEach(() => {
      spyOn(window, 'fetch').and.callThrough();
      component.landSucc = true;
      component.makeUrlAndUpdateData();
    });
    it('check if parameters in url were updating', () => {
      expect(window.fetch).toHaveBeenCalledWith('https://api.spaceXdata.com/v3/launches?limit=100&land_success=true');
    });
  });  

  describe('check fetch url with no params', () => {
    beforeEach(() => {
      spyOn(window, 'fetch').and.callThrough();
      component.makeUrlAndUpdateData();
    });
    it('check if parameters in url were updating', () => {
      expect(window.fetch).toHaveBeenCalledWith('https://api.spaceXdata.com/v3/launches?limit=100');
    });
  });  


  afterEach(() => {
    fixture2.destroy();
  });



});
