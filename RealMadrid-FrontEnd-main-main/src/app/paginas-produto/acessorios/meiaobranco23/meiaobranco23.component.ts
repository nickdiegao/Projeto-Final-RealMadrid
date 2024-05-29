import { Component } from '@angular/core';

@Component({
  selector: 'app-meiaobranco23',
  templateUrl: './meiaobranco23.component.html',
  styleUrl: './meiaobranco23.component.css'
})
export class Meiaobranco23Component {
  tamanhoSelecionado: string = '';

  selecionarTamanho(tamanho: string): void {
    this.tamanhoSelecionado = tamanho;
}
}
