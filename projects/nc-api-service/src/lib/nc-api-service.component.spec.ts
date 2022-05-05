import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NcApiServiceComponent } from './nc-api-service.component';

describe('NcApiServiceComponent', () => {
  let component: NcApiServiceComponent;
  let fixture: ComponentFixture<NcApiServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NcApiServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NcApiServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
