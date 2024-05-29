import { Component } from '@angular/core';

@Component({
  selector: 'app-camisa-real-2011',
  templateUrl: './camisa-real-2011.component.html',
  styleUrl: './camisa-real-2011.component.css'
})
export class CamisaReal2011Component {
  tamanhoSelecionado: string = ''; 

  selecionarTamanho(tamanho: string): void {
    this.tamanhoSelecionado = tamanho;
  }
}
