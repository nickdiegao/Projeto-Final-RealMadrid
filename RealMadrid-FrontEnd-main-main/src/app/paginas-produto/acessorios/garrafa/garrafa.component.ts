import { Component } from '@angular/core';

@Component({
  selector: 'app-garrafa',
  templateUrl: './garrafa.component.html',
  styleUrl: './garrafa.component.css'
})
export class GarrafaComponent {
  tamanhoSelecionado: string = '';

  selecionarTamanho(tamanho: string): void {
    this.tamanhoSelecionado = tamanho;
  }
}
