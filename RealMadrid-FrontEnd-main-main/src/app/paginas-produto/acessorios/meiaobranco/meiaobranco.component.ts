import { Component } from '@angular/core';

@Component({
  selector: 'app-meiaobranco',
  templateUrl: './meiaobranco.component.html',
  styleUrl: './meiaobranco.component.css'
})
export class MeiaobrancoComponent {
  tamanhoSelecionado: string = '';

  selecionarTamanho(tamanho: string): void {
    this.tamanhoSelecionado = tamanho;
  }
}
