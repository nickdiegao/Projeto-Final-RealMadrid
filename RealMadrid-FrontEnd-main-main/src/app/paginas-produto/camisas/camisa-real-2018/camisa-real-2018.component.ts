import { Component } from '@angular/core';

@Component({
  selector: 'app-camisa-real-2018',
  templateUrl: './camisa-real-2018.component.html',
  styleUrl: './camisa-real-2018.component.css'
})
export class CamisaReal2018Component {
  tamanhoSelecionado: string = ''; 

  selecionarTamanho(tamanho: string): void {
    this.tamanhoSelecionado = tamanho;
  }
}
