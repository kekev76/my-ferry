import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FerryActionComponent } from './ferry-action.component';

describe('FerryActionComponent', () => {
  let component: FerryActionComponent;
  let fixture: ComponentFixture<FerryActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FerryActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FerryActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
