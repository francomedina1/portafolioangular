import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioAdminComponent } from './portfolio-admin.component';

describe('PortfolioAdminComponent', () => {
  let component: PortfolioAdminComponent;
  let fixture: ComponentFixture<PortfolioAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
