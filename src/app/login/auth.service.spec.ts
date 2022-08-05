import { HomeComponent } from './../pages/home/home.component';
import { Usuario } from './../shared/models/usuario';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(
        [{path: 'home', component: HomeComponent}]
      )],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('fazerLogin() user authorized', () => {
    let mockUser = {
      nome: 'fabio',
      senha: 'fabio',
      permissao: '1',
    } as Usuario;

    service.fazerLogin(mockUser);
    expect(service['usuarioAutenticado']).toEqual(true);
  });

  it('fazerLogin() user unauthorized', () => {
    let mockUser = {
      nome: 'usuarioJ81Falso',
      senha: 'usuarioJ81Falso',
      permissao: '0',
    } as Usuario;
    expect(service['usuarioAutenticado']).toEqual(false);
  })
});
