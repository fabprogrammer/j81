import { AuthService } from './login/auth.service';
import {
  Component,
  Renderer2,
  ViewChild,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'j81';
  //controla a abertura do sideNav
  public controlMenuIcon: boolean = false;
  public display = '';
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  mostrarMenu: boolean = true;

  constructor(
    private renderer: Renderer2,
    private observer: BreakpointObserver,
    private router: Router,
    private authService: AuthService
  ) {}

  OnInit() {}

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
    if (AuthService.mostrarMenu === true) {
      //this.abrirMenuDeAcordoTamanhoTela();
      this.display = ''
      return true;
    } else {
      this.display = 'none';
      return true;
    }
  }
}
