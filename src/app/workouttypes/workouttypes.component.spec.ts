import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkouttypesComponent } from './workouttypes.component';

describe('WorkouttypesComponent', () => {
  let component: WorkouttypesComponent;
  let fixture: ComponentFixture<WorkouttypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkouttypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkouttypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
