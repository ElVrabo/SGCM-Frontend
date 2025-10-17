import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSpecialitiesComponent } from './create-specialities.component';

describe('CreateSpecialitiesComponent', () => {
  let component: CreateSpecialitiesComponent;
  let fixture: ComponentFixture<CreateSpecialitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSpecialitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSpecialitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
