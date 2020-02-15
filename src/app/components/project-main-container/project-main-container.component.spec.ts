import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMainContainerComponent } from './project-main-container.component';

describe('ProjectMainContainerComponent', () => {
  let component: ProjectMainContainerComponent;
  let fixture: ComponentFixture<ProjectMainContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectMainContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMainContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
