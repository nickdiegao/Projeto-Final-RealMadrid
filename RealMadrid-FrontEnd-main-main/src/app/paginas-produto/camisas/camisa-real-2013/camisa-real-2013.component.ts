import { Component } from '@angular/core';

@Component({
  selector: 'app-camisa-real-2013',
  templateUrl: './camisa-real-2013.component.html',
  styleUrl: './camisa-real-2013.component.css'
})
export class CamisaReal2013Component {
  tamanhoSelecionado: string = ''; 

  selecionarTamanho(tamanho: string): void {
    this.tamanhoSelecionado = tamanho;
  }
}
