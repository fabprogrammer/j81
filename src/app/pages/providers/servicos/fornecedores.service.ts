import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FornecedoresTabela } from 'src/app/shared/models/fornecedores-tabela';

@Injectable({
  providedIn: 'root'
})
export class FornecedoresService {

  constructor(private httpClient: HttpClient ) { }

  getAllFornecedores():any{
    let fornecedores : Array<FornecedoresTabela>  = [
      {id : 0, ativo: true, bairro:'Bairro X', cidade: 'Fortaleza', estado: 'Ceará', cnpj: '48985785000487', complemento:'nenhum', nomeFantasia:'Empresa J', numero:12,rua:'Rua X', tipo:'Fábrica'},
      {id : 0, ativo: true, bairro:'Bairro X', cidade: 'Fortaleza', estado: 'Ceará', cnpj: '48985785000487', complemento:'nenhum', nomeFantasia:'Empresa J', numero:12,rua:'Rua X', tipo:'Fábrica'},
      {id : 0, ativo: true, bairro:'Bairro X', cidade: 'Fortaleza', estado: 'Ceará', cnpj: '48985785000487', complemento:'nenhum', nomeFantasia:'Empresa J', numero:12,rua:'Rua X', tipo:'Fábrica'},
      {id : 0, ativo: true, bairro:'Bairro X', cidade: 'Fortaleza', estado: 'Ceará', cnpj: '48985785000487', complemento:'nenhum', nomeFantasia:'Empresa J', numero:12,rua:'Rua X', tipo:'Fábrica'},
      {id : 0, ativo: true, bairro:'Bairro X', cidade: 'Fortaleza', estado: 'Ceará', cnpj: '48985785000487', complemento:'nenhum', nomeFantasia:'Empresa J', numero:12,rua:'Rua X', tipo:'Fábrica'},
      {id : 0, ativo: true, bairro:'Bairro X', cidade: 'Fortaleza', estado: 'Ceará', cnpj: '48985785000487', complemento:'nenhum', nomeFantasia:'Empresa J', numero:12,rua:'Rua X', tipo:'Fábrica'},
      {id : 0, ativo: true, bairro:'Bairro X', cidade: 'Fortaleza', estado: 'Ceará', cnpj: '48985785000487', complemento:'nenhum', nomeFantasia:'Empresa J', numero:12,rua:'Rua X', tipo:'Fábrica'},
      {id : 0, ativo: true, bairro:'Bairro X', cidade: 'Fortaleza', estado: 'Ceará', cnpj: '48985785000487', complemento:'nenhum', nomeFantasia:'Empresa J', numero:12,rua:'Rua X', tipo:'Fábrica'},
      {id : 0, ativo: true, bairro:'Bairro X', cidade: 'Fortaleza', estado: 'Ceará', cnpj: '48985785000487', complemento:'nenhum', nomeFantasia:'Empresa J', numero:12,rua:'Rua X', tipo:'Fábrica'},
      {id : 0, ativo: true, bairro:'Bairro X', cidade: 'Fortaleza', estado: 'Ceará', cnpj: '48985785000487', complemento:'nenhum', nomeFantasia:'Empresa J', numero:12,rua:'Rua X', tipo:'Fábrica'},
      {id : 0, ativo: true, bairro:'Bairro X', cidade: 'Fortaleza', estado: 'Ceará', cnpj: '48985785000487', complemento:'nenhum', nomeFantasia:'Empresa J', numero:12,rua:'Rua X', tipo:'Fábrica'},
      {id : 0, ativo: true, bairro:'Bairro X', cidade: 'Fortaleza', estado: 'Ceará', cnpj: '48985785000487', complemento:'nenhum', nomeFantasia:'Empresa J', numero:12,rua:'Rua X', tipo:'Fábrica'},
      {id : 0, ativo: true, bairro:'Bairro X', cidade: 'Fortaleza', estado: 'Ceará', cnpj: '48985785000487', complemento:'nenhum', nomeFantasia:'Empresa J', numero:12,rua:'Rua X', tipo:'Fábrica'},
      {id : 0, ativo: true, bairro:'Bairro X', cidade: 'Fortaleza', estado: 'Ceará', cnpj: '48985785000487', complemento:'nenhum', nomeFantasia:'Empresa J', numero:12,rua:'Rua X', tipo:'Fábrica'},
      {id : 0, ativo: true, bairro:'Bairro X', cidade: 'Fortaleza', estado: 'Ceará', cnpj: '48985785000487', complemento:'nenhum', nomeFantasia:'Empresa J', numero:12,rua:'Rua X', tipo:'Fábrica'},
      {id : 0, ativo: true, bairro:'Bairro X', cidade: 'Fortaleza', estado: 'Ceará', cnpj: '48985785000487', complemento:'nenhum', nomeFantasia:'Empresa J', numero:12,rua:'Rua X', tipo:'Fábrica'},
      {id : 0, ativo: true, bairro:'Bairro X', cidade: 'Fortaleza', estado: 'Ceará', cnpj: '48985785000487', complemento:'nenhum', nomeFantasia:'Empresa J', numero:12,rua:'Rua X', tipo:'Fábrica'},
      {id : 0, ativo: true, bairro:'Bairro X', cidade: 'Fortaleza', estado: 'Ceará', cnpj: '48985785000487', complemento:'nenhum', nomeFantasia:'Empresa J', numero:12,rua:'Rua X', tipo:'Fábrica'},
      {id : 0, ativo: true, bairro:'Bairro X', cidade: 'Fortaleza', estado: 'Ceará', cnpj: '48985785000487', complemento:'nenhum', nomeFantasia:'Empresa J', numero:12,rua:'Rua X', tipo:'Fábrica'},
      {id : 0, ativo: true, bairro:'Bairro X', cidade: 'Fortaleza', estado: 'Ceará', cnpj: '48985785000487', complemento:'nenhum', nomeFantasia:'Empresa J', numero:12,rua:'Rua X', tipo:'Fábrica'},
      {id : 0, ativo: true, bairro:'Bairro X', cidade: 'Fortaleza', estado: 'Ceará', cnpj: '48985785000487', complemento:'nenhum', nomeFantasia:'Empresa J', numero:12,rua:'Rua X', tipo:'Fábrica'},
      {id : 0, ativo: true, bairro:'Bairro X', cidade: 'Fortaleza', estado: 'Ceará', cnpj: '48985785000487', complemento:'nenhum', nomeFantasia:'Empresa J', numero:12,rua:'Rua X', tipo:'Fábrica'},
      {id : 0, ativo: true, bairro:'Bairro X', cidade: 'Fortaleza', estado: 'Ceará', cnpj: '48985785000487', complemento:'nenhum', nomeFantasia:'Empresa J', numero:12,rua:'Rua X', tipo:'Fábrica'},
      {id : 0, ativo: true, bairro:'Bairro X', cidade: 'Fortaleza', estado: 'Ceará', cnpj: '48985785000487', complemento:'nenhum', nomeFantasia:'Empresa J', numero:12,rua:'Rua X', tipo:'Fábrica'},
      {id : 0, ativo: true, bairro:'Bairro X', cidade: 'Fortaleza', estado: 'Ceará', cnpj: '48985785000487', complemento:'nenhum', nomeFantasia:'Empresa J', numero:12,rua:'Rua X', tipo:'Fábrica'},
      {id : 0, ativo: true, bairro:'Bairro X', cidade: 'Fortaleza', estado: 'Ceará', cnpj: '48985785000487', complemento:'nenhum', nomeFantasia:'Empresa J', numero:12,rua:'Rua X', tipo:'Fábrica'},
      {id : 0, ativo: true, bairro:'Bairro X', cidade: 'Fortaleza', estado: 'Ceará', cnpj: '48985785000487', complemento:'nenhum', nomeFantasia:'Empresa J', numero:12,rua:'Rua X', tipo:'Fábrica'},
    ]

    return fornecedores;
  }
}