
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material.module';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ProvidersResolver } from './providers/guardas/providers.resolver';
import { ProvidersComponent } from './providers/providers.component';
import { FornecedoresService } from './providers/servicos/fornecedores.service';

const pages = [HomeComponent, ProvidersComponent];

@NgModule({
  declarations: [ProvidersComponent, HomeComponent],
  imports: [
    PagesRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    AppMaterialModule
  ],
  exports: [...pages],
  providers: [ProvidersResolver, FornecedoresService]
})
export class PagesModule {}
