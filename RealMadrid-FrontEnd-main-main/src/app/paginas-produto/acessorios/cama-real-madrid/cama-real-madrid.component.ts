import { Component } from '@angular/core';

@Component({
  selector: 'app-cama-real-madrid',
  templateUrl: './cama-real-madrid.component.html',
  styleUrl: './cama-real-madrid.component.css'
})
export class CamaRealMadridComponent {
  tamanhoSelecionado: string = ''; 

  selecionarTamanho(tamanho: string): void {
    this.tamanhoSelecionado = tamanho;
  }
}
