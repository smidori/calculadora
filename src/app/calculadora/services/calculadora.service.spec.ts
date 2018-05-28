import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculadoraService]
    });
  });

  it('should be created', inject([CalculadoraService], (service: CalculadoraService) => {
    expect(service).toBeTruthy();
  }));

  it('deve garantir que 1 + 3 = 4',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let resultado = service.calcular(1, 3, CalculadoraService.SOMA);
      expect(resultado).toEqual(4)
    })
  );

  it('deve garantir que 11 - 6 = 5',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let resultado = service.calcular(11, 6, CalculadoraService.SUBTRACAO);
      expect(resultado).toEqual(5)
    })
  );

  it('deve garantir que 2 * 3 = 6',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let resultado = service.calcular(2, 3, CalculadoraService.MULTIPLICACAO);
      expect(resultado).toEqual(6)
    })
  );

  it('deve garantir que 20 / 4 = 5',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let resultado = service.calcular(20, 4, CalculadoraService.DIVISAO);
      expect(resultado).toEqual(5)
    })
  );


  it('deve garantir que dara erro para operacao invalida',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let resultado = service.calcular(1, 2, '%');
      expect(resultado).toEqual(0)
    })
  );


});
