import { BreakpointObserver } from '@angular/cdk/layout';
import { Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { AuthService } from './login/auth.service';


describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatSidenavModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatDividerModule
      ],
      declarations: [
        AppComponent
      ],
      providers : [
        AuthService,
        BreakpointObserver,
        Renderer2
      ]
    }).compileComponents();
  });


  it('Criação de AppComponent', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
