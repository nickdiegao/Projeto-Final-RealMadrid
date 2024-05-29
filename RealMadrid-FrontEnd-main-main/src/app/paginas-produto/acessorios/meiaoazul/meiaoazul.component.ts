import { Component } from '@angular/core';

@Component({
  selector: 'app-meiaoazul',
  templateUrl: './meiaoazul.component.html',
  styleUrl: './meiaoazul.component.css'
})
export class MeiaoazulComponent {
  tamanhoSelecionado: string = ''; 

  selecionarTamanho(tamanho: string): void {
    this.tamanhoSelecionado = tamanho;
  }
}
