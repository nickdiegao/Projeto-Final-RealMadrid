import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private httpClient: HttpClient) { }
  getViaCEPService(cep: string = '') {
    return this.httpClient.get(`https://viacep.com.br/ws/${cep}/json/`)
  }

  areaBuscarCEP: string = ''
  areaBusca: any = {
    bairro: '',
    localidade: '',
    logradouro: '',
    uf: ''
  }

  buscarCEP() {
    this.getViaCEPService(this.areaBuscarCEP)
    .subscribe((value) => {
      this.areaBusca.logradouro = JSON.parse(JSON.stringify(value)) ['logradouro'];
      this.areaBusca.bairro = JSON.parse(JSON.stringify(value)) ["bairro"];
      this.areaBusca.localidade = JSON.parse(JSON.stringify(value)) ['localidade'];
      this.areaBusca.uf = JSON.parse(JSON.stringify(value)) ['uf']
    });
  }
}
