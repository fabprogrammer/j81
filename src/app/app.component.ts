import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, Renderer2, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  //variável de controle do botão ">" para abertura abertura do sideNav(menu vertical)
  public controlMenuIcon: boolean = false;

  //variáveis de controle de comportamentos de css da tela
  public cssDisplay = '';
  public cssContentContainer: string = 'content mat-elevation-z4';

  //váriavel de controle para quando o login é autenticado
  dinamicaPosLogin: boolean = true;

  mostrarMenu: boolean = true;

  constructor(
    private renderer: Renderer2,
    private observer: BreakpointObserver,
    private router: Router,
    private authService: AuthService
  ) {}

  ngAfterViewInit() {
    this.abrirMenuDeAcordoTamanhoTela();
  }

  animacaoRotacionarSetaAbrirMenu(): void {
    const image_menu = document.getElementById('img-menu');
    if (this.controlMenuIcon === false) {
      this.renderer.setStyle(image_menu, 'transform', `rotate(180deg)`);
      this.controlMenuIcon = true;
    } else {
      this.controlMenuIcon = false;
      this.renderer.setStyle(image_menu, 'transform', `rotate(360deg)`);
    }
  }

  abrirMenuDeAcordoTamanhoTela() {
    setTimeout(() => {
      this.observer.observe(['(max-width:800px)']).subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
    }, 100);
  }

  gotToFornecedoresPage() {
    this.router.navigate(['fornecedores']);
  }

  goToHomePage() {
    this.router.navigate(['home']);
  }

  mostrarSideNavESideBar(): boolean {
    if (this.dinamicaPosLogin === true) {
      if (AuthService.mostrarMenu === true) {
        this.cssDisplay = '';
        this.cssContentContainer = 'content mat-elevation-z4';
        this.sidenav.close();
        this.controlMenuIcon = false;
        this.animacaoRotacionarSetaAbrirMenu();
        this.dinamicaPosLogin = false;
        return true;
      } else {
        this.cssDisplay = 'none';
        this.cssContentContainer = '';
        return true;
      }
    }
    return true;
  }
}
