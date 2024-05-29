import { Component } from '@angular/core';

@Component({
  selector: 'app-camisa-real-2017',
  templateUrl: './camisa-real-2017.component.html',
  styleUrl: './camisa-real-2017.component.css'
})
export class CamisaReal2017Component {
  tamanhoSelecionado: string = ''; 

  selecionarTamanho(tamanho: string): void {
    this.tamanhoSelecionado = tamanho;
  }
}
