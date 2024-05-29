import { Component } from '@angular/core';

@Component({
  selector: 'app-bonepreto',
  templateUrl: './bonepreto.component.html',
  styleUrl: './bonepreto.component.css'
})
export class BonepretoComponent {
  tamanhoSelecionado: string = ''; 

  selecionarTamanho(tamanho: string): void {
    this.tamanhoSelecionado = tamanho;
  }
}
