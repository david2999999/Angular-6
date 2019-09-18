import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralTemplateComponent } from './structural-template.component';

describe('StructuralTemplateComponent', () => {
  let component: StructuralTemplateComponent;
  let fixture: ComponentFixture<StructuralTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructuralTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuralTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
