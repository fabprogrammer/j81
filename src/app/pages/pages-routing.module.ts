import { ProvidersComponent } from './providers/providers.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GuardaRotas } from '../guards/guarda-rotas';
import { ProvidersResolver } from './providers/guardas/providers.resolver';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [GuardaRotas] },
  { path: 'fornecedores', component: ProvidersComponent, canActivate: [GuardaRotas], resolve: {fornecedoresTabela: ProvidersResolver}  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [GuardaRotas]
})
export class PagesRoutingModule {}
