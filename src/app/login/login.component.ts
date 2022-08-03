import { Usuario } from './../shared/models/usuario';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private usuario: Usuario = {nome:'fabio', senha: 'fabio', permissao: 'adm'};

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  public fazerLogin(){
    this.authService.fazerLogin(this.usuario)
  }

}
