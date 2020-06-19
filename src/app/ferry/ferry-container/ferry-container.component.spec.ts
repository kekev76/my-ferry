import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FerryContainerComponent } from './ferry-container.component';

describe('FerryContainerComponent', () => {
  let component: FerryContainerComponent;
  let fixture: ComponentFixture<FerryContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FerryContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FerryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
