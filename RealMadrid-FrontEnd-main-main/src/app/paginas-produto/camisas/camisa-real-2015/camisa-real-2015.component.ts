import { Component } from '@angular/core';

@Component({
  selector: 'app-camisa-real-2015',
  templateUrl: './camisa-real-2015.component.html',
  styleUrl: './camisa-real-2015.component.css'
})
export class CamisaReal2015Component {
  tamanhoSelecionado: string = ''; 

  selecionarTamanho(tamanho: string): void {
    this.tamanhoSelecionado = tamanho;
  }
}
