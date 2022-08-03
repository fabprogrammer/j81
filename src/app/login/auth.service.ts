import { Router } from '@angular/router';
import { Usuario } from './../shared/models/usuario';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private router : Router) { }

  private usuarioAutenticado:boolean = false;

  fazerLogin(usuario: Usuario){
    if(usuario.nome === 'fabio' && usuario.senha === 'fabio'){
      this.usuarioAutenticado = true;
      this.router.navigate(['home'])
    } else {
      this.usuarioAutenticado = false;
    }
  }
}
