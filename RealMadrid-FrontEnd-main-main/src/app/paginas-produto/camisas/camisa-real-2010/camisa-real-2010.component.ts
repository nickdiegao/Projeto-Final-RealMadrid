import { Component } from '@angular/core';

@Component({
  selector: 'app-camisa-real-2010',
  templateUrl: './camisa-real-2010.component.html',
  styleUrl: './camisa-real-2010.component.css'
})
export class CamisaReal2010Component {
  tamanhoSelecionado: string = ''; 

  selecionarTamanho(tamanho: string): void {
    this.tamanhoSelecionado = tamanho;
  }
}
