import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDoctorsComponent } from './detail-doctors.component';

describe('DetailDoctorsComponent', () => {
  let component: DetailDoctorsComponent;
  let fixture: ComponentFixture<DetailDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailDoctorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
