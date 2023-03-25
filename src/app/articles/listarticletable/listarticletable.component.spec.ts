import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarticletableComponent } from './listarticletable.component';

describe('ListarticletableComponent', () => {
  let component: ListarticletableComponent;
  let fixture: ComponentFixture<ListarticletableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarticletableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarticletableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
