import { Component } from '@angular/core';

@Component({
  selector: 'app-meiaobranco24',
  templateUrl: './meiaobranco24.component.html',
  styleUrl: './meiaobranco24.component.css'
})
export class Meiaobranco24Component {
  tamanhoSelecionado: string = '';

  selecionarTamanho(tamanho: string): void {
    this.tamanhoSelecionado = tamanho;
}
}
