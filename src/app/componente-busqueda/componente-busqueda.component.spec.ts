import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteBusquedaComponent } from './componente-busqueda.component';

describe('ComponenteBusquedaComponent', () => {
  let component: ComponenteBusquedaComponent;
  let fixture: ComponentFixture<ComponenteBusquedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteBusquedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
