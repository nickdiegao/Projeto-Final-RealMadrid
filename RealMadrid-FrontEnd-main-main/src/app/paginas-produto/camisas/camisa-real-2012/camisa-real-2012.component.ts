import { Component } from '@angular/core';

@Component({
  selector: 'app-camisa-real-2012',
  templateUrl: './camisa-real-2012.component.html',
  styleUrl: './camisa-real-2012.component.css'
})
export class CamisaReal2012Component {
  tamanhoSelecionado: string = ''; 

  selecionarTamanho(tamanho: string): void {
    this.tamanhoSelecionado = tamanho;
  }
}
