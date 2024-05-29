import { Component } from '@angular/core';

@Component({
  selector: 'app-viceroycadeteazul',
  templateUrl: './viceroycadeteazul.component.html',
  styleUrl: './viceroycadeteazul.component.css'
})
export class ViceroycadeteazulComponent {
  tamanhoSelecionado: string = ''; 

  selecionarTamanho(tamanho: string): void {
    this.tamanhoSelecionado = tamanho;
  }
}
