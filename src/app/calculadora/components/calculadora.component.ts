import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private numero1: string;
  private numero2: string;
  private resultado: number;
  private operacao: string;

  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit() {
    this.limpar();
  }

  limpar(): void {
    this.numero1 = '0';
    this.numero2 = null;
    this.resultado = null;
    this.operacao = null;
  }

  adicionarNumero(valor: string): void {
    if (this.operacao === null) {
      this.numero1 = this.concatenarNumero(this.numero1, valor);
    } else {
      this.numero2 = this.concatenarNumero(this.numero2, valor);
    }
  }


  concatenarNumero(valorAtual: string, valor: string): string {
    //if(this.operacao === null){}
    if (valorAtual === '0' || valorAtual === null) {
      valorAtual = '';
    }

    if (valor === '.') {
      if (valorAtual === '') {
        valor = '0.';
      } else if (valorAtual.indexOf('.') > -1) {
        return valorAtual;
      }
    }
    return valorAtual + valor;
  }


  definirOperacao(operacao: string): void {
    if (this.operacao === null) {
      this.operacao = operacao;
      return;
    } else {
      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.numero1), parseFloat(this.numero2), this.operacao);
      this.numero1 = this.resultado.toString();
      this.numero2 = null;
      this.operacao = operacao;
      this.resultado = null;
    }
  }

  calcular(): void {
    if (this.numero2 === null) {
      return;
    }

    this.resultado = this.calculadoraService.calcular(
      parseFloat(this.numero1), parseFloat(this.numero2), this.operacao);

  }

  get display(): string{
    if(this.resultado !== null){
      return this.resultado.toString();
    }else if(this.numero2 !== null){
      return this.numero2
    }else{
      return this.numero1
    }
  }



}
