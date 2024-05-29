import { Component } from '@angular/core';

@Component({
  selector: 'app-meiaocinza',
  templateUrl: './meiaocinza.component.html',
  styleUrl: './meiaocinza.component.css'
})
export class MeiaocinzaComponent {
  tamanhoSelecionado: string = '';

  selecionarTamanho(tamanho: string): void {
    this.tamanhoSelecionado = tamanho;
}
}
