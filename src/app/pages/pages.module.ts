import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ProvidersComponent } from './providers/providers.component';

const pages = [
  HomeComponent,
  ProvidersComponent
]

@NgModule({
  declarations: [ProvidersComponent, HomeComponent],
  imports: [CommonModule, PagesRoutingModule, MatTableModule, MatPaginatorModule],
  exports:[
    ...pages
  ]
})
export class PagesModule {}
