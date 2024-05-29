import { Component } from '@angular/core';

@Component({
  selector: 'app-copo-real-madrid',
  templateUrl: './copo-real-madrid.component.html',
  styleUrl: './copo-real-madrid.component.css'
})
export class CopoRealMadridComponent {
  tamanhoSelecionado: string = '';

  selecionarTamanho(tamanho: string): void {
    this.tamanhoSelecionado = tamanho;
  }
}
