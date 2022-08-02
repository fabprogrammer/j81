import { Component, Renderer2, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit{
  title = 'j81';
  public controlMenuIcon: boolean = false;
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(
    private renderer: Renderer2,
    private observer: BreakpointObserver,
    private router: Router
  ) {}

  ngAfterViewInit() {

      this.observer.observe(['(max-width:800px)']).subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

  }

  animate(): void {
    const image_menu = document.getElementById('img-menu');
    if (this.controlMenuIcon === false) {
      this.renderer.setStyle(image_menu, 'transform', `rotate(180deg)`);
      this.controlMenuIcon = true;
    } else {
      this.controlMenuIcon = false;
      this.renderer.setStyle(image_menu, 'transform', `rotate(360deg)`);
    }
  }

  gotToFornecedoresPage(){
    this.router.navigate(['fornecedores'])
  }
}
