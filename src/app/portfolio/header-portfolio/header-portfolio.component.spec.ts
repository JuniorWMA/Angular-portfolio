import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPortfolioComponent } from './header-portfolio.component';

describe('HeaderPortfolioComponent', () => {
  let component: HeaderPortfolioComponent;
  let fixture: ComponentFixture<HeaderPortfolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderPortfolioComponent]
    });
    fixture = TestBed.createComponent(HeaderPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
