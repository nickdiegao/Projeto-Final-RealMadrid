import { Component } from '@angular/core';

@Component({
  selector: 'app-viceroycadeteacero',
  templateUrl: './viceroycadeteacero.component.html',
  styleUrl: './viceroycadeteacero.component.css'
})
export class ViceroycadeteaceroComponent {
  tamanhoSelecionado: string = ''; 

  selecionarTamanho(tamanho: string): void {
    this.tamanhoSelecionado = tamanho;
  }
}
