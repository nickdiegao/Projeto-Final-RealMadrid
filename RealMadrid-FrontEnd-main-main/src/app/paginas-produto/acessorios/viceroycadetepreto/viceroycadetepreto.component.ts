import { Component } from '@angular/core';

@Component({
  selector: 'app-viceroycadetepreto',
  templateUrl: './viceroycadetepreto.component.html',
  styleUrl: './viceroycadetepreto.component.css'
})
export class ViceroycadetepretoComponent {
  tamanhoSelecionado: string = ''; 

  selecionarTamanho(tamanho: string): void {
    this.tamanhoSelecionado = tamanho;
  }
}
