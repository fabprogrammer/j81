import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { FornecedoresService } from './fornecedores.service';

describe('FornecedoresService', () => {
  let service: FornecedoresService;
  let httpClientStub = {
    post: () => null,
    get: () => null,
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({});

    await TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientTestingModule],
      providers: [],
    }).compileComponents();

    service = TestBed.inject(FornecedoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
