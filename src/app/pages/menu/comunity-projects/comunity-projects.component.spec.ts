import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunityProjectsComponent } from './comunity-projects.component';

describe('ComunityProjectsComponent', () => {
  let component: ComunityProjectsComponent;
  let fixture: ComponentFixture<ComunityProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComunityProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunityProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
