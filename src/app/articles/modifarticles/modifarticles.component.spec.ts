import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifarticlesComponent } from './modifarticles.component';

describe('ModifarticlesComponent', () => {
  let component: ModifarticlesComponent;
  let fixture: ComponentFixture<ModifarticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifarticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifarticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
