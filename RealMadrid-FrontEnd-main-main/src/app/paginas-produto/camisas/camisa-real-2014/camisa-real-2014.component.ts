import { Component } from '@angular/core';

@Component({
  selector: 'app-camisa-real-2014',
  templateUrl: './camisa-real-2014.component.html',
  styleUrl: './camisa-real-2014.component.css'
})
export class CamisaReal2014Component {
  tamanhoSelecionado: string = ''; 

  selecionarTamanho(tamanho: string): void {
    this.tamanhoSelecionado = tamanho;
  }
}
