import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsuarioLogadoComponent } from './usuario-logado.component';


describe('UsuarioLogadoComponent', () => {
  let component: UsuarioLogadoComponent;
  let fixture: ComponentFixture<UsuarioLogadoComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ UsuarioLogadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioLogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
