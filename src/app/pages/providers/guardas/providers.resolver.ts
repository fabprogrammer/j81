import { FornecedoresService } from './../servicos/fornecedores.service';
import { FornecedoresTabela } from 'src/app/shared/models/fornecedores-tabela';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ProvidersResolver implements Resolve<FornecedoresTabela> {
  constructor(private fornecedoresService: FornecedoresService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.fornecedoresService.getAllFornecedores();
  }
}
