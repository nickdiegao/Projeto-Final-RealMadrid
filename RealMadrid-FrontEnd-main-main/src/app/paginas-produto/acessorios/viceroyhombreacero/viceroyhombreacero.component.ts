import { Component } from '@angular/core';

@Component({
  selector: 'app-viceroyhombreacero',
  templateUrl: './viceroyhombreacero.component.html',
  styleUrl: './viceroyhombreacero.component.css'
})
export class ViceroyhombreaceroComponent {
  tamanhoSelecionado: string = ''; 

  selecionarTamanho(tamanho: string): void {
    this.tamanhoSelecionado = tamanho;
  }
}
