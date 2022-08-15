import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from './../../shared/component/error-dialog/error-dialog.component';
import { FornecedoresTabela } from './../../shared/models/fornecedores-tabela';
import { FornecedoresService } from './servicos/fornecedores.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss'],
})
export class ProvidersComponent implements OnInit {
  //Filtros e seus FormControls
  cnpj: FormControl = new FormControl('');
  nomeFantasia: FormControl = new FormControl('');
  ativo: FormControl = new FormControl('');
  estado: FormControl = new FormControl('');
  cidade: FormControl = new FormControl('');
  bairro: FormControl = new FormControl('');
  rua: FormControl = new FormControl('');
  representante: FormControl = new FormControl('');
  tiposFornecedores: FormControl = new FormControl('');
  //Spinner
  loading: boolean = false;

  formulario: FormGroup = new FormGroup({
    cnpj: new FormControl(''),
  });

  fornecedores$: Observable<Array<FornecedoresTabela>> = [] as any;

  displayedColumns: string[] = [
    'id',
    'nomeFantasia',
    'cnpj',
    'ativo',
    'estado',
    'cidade',
    'bairro',
    'rua',
    'numero',
    'complemento',
    'tipo',
  ];

  dataSource: any = [];

  //Controlador da paginação
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private fornecedoresService: FornecedoresService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nomeFantasia: [''],
      cnpj: [''],
    });

    this.route.data.subscribe((response) => {
      this.dataSource = new MatTableDataSource<FornecedoresTabela>(
        response['fornecedoresTabela']
      );
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  public filtrar() {
    this.loading = true;
    this.fornecedoresService.getAllFornecedores().pipe(
      catchError((error) => {
        console.log('Entrou no catchError');
        this.onError('Erro ao carregar fornecedores.');
        return of([]);
      })
    );
  }

  public limpar() {
    this.loading = false;
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  }
}
