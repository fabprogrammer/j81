import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { Usuario } from './../shared/models/usuario';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  nomeUsuario: FormControl = new FormControl('',[Validators.required]);
  senha: FormControl = new FormControl('',[Validators.required]);

  formulario !: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nomeUsuario: this.nomeUsuario,
      senha: this.senha
    })
  }

  public fazerLogin() {
    let usuario: Usuario = {
      nome: this.formulario.get('nomeUsuario')?.value,
      senha: this.formulario.get('senha')?.value,
      permissao:''
    }
    this.authService.fazerLogin(usuario);
  }
}
