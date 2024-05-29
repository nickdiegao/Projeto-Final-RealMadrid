import { Component } from '@angular/core';

@Component({
  selector: 'app-mochila-real-madrid',
  templateUrl: './mochila-real-madrid.component.html',
  styleUrl: './mochila-real-madrid.component.css'
})
export class MochilaRealMadridComponent {
  tamanhoSelecionado: string = '';

  selecionarTamanho(tamanho: string): void {
    this.tamanhoSelecionado = tamanho;
  }
}
