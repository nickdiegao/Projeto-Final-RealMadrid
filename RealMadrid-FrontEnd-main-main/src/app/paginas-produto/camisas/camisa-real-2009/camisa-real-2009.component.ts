import { Component } from '@angular/core';

@Component({
  selector: 'app-camisa-real-2009',
  templateUrl: './camisa-real-2009.component.html',
  styleUrl: './camisa-real-2009.component.css'
})
export class CamisaReal2009Component {
  tamanhoSelecionado: string = ''; 

  selecionarTamanho(tamanho: string): void {
    this.tamanhoSelecionado = tamanho;
  }
}
