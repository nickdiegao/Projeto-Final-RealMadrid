import { Component } from '@angular/core';

@Component({
  selector: 'app-caneca',
  templateUrl: './caneca.component.html',
  styleUrl: './caneca.component.css'
})
export class CanecaComponent {
  tamanhoSelecionado: string = '';

  selecionarTamanho(tamanho: string): void {
    this.tamanhoSelecionado = tamanho;
  }
}
