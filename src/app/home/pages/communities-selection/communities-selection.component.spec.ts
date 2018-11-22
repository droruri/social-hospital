import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitiesSelectionComponent } from './communities-selection.component';

describe('CommunitiesSelectionComponent', () => {
  let component: CommunitiesSelectionComponent;
  let fixture: ComponentFixture<CommunitiesSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunitiesSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunitiesSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
