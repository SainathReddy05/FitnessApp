import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantypesComponent } from './plantypes.component';

describe('PlantypesComponent', () => {
  let component: PlantypesComponent;
  let fixture: ComponentFixture<PlantypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
