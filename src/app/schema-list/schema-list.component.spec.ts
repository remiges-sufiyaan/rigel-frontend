import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaListComponent } from './schema-list.component';

describe('SchemaListComponent', () => {
  let component: SchemaListComponent;
  let fixture: ComponentFixture<SchemaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchemaListComponent]
    });
    fixture = TestBed.createComponent(SchemaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
