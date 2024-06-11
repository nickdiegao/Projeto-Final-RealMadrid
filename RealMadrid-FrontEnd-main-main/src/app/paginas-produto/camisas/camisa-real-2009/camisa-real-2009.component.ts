import { Component } from '@angular/core';
import { ViaCEPService } from '../../../via-cep.service';

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

  constructor(private viaCEPService: ViaCEPService) { }

  areaBuscarCEP: string = ''
  areaBusca: any = {
    bairro: '',
    localidade: '',
    logradouro: '',
    uf: ''
  }

  buscarCEP() {
    this.viaCEPService.getViaCEPService(this.areaBuscarCEP)
    .subscribe((value) => {
      this.areaBusca.logradouro = JSON.parse(JSON.stringify(value)) ['logradouro'];
      this.areaBusca.bairro = JSON.parse(JSON.stringify(value)) ["bairro"];
      this.areaBusca.localidade = JSON.parse(JSON.stringify(value)) ['localidade'];
      this.areaBusca.uf = JSON.parse(JSON.stringify(value)) ['uf']
    });
  }
}
