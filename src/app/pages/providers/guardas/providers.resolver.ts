import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Resolve } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/component/error-dialog/error-dialog.component';
import { FornecedoresTabela } from 'src/app/shared/models/fornecedores-tabela';

import { FornecedoresService } from './../servicos/fornecedores.service';

@Injectable({ providedIn: 'root' })
export class ProvidersResolver implements Resolve<FornecedoresTabela> {
  constructor(
    private fornecedoresService: FornecedoresService,
    private dialog: MatDialog
  ) {}

  resolve(): Observable<any> {
    return this.fornecedoresService.getAllFornecedores().pipe(
      catchError((error) => {
        console.log('Entrou no catchError');
        console.log('error = ' + JSON.stringify(error.message));
        this.onError(error.message);
        return of([]);
      })
    );
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  }
}
