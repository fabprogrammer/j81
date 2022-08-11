import { Router } from '@angular/router';
import { Usuario } from './../shared/models/usuario';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  private usuarioAutenticado: boolean = false;

  public static mostrarMenu : boolean = false;

  fazerLogin(usuario: Usuario) {
    if (usuario.nome === 'fabio' && usuario.senha === 'fabio') {
      this.usuarioAutenticado = true;

      AuthService.mostrarMenu = true;

      this.router.navigate(['home']);
    } else {
      AuthService.mostrarMenu = false;

      this.usuarioAutenticado = false;
    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
}
