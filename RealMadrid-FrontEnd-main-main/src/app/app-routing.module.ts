import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { CamisaReal2010Component } from './paginas-produto/camisas/camisa-real-2010/camisa-real-2010.component';
import { CamisaReal2011Component } from './paginas-produto/camisas/camisa-real-2011/camisa-real-2011.component';
import { CamisaReal2013Component } from './paginas-produto/camisas/camisa-real-2013/camisa-real-2013.component';
import { CamisaReal2014Component } from './paginas-produto/camisas/camisa-real-2014/camisa-real-2014.component';
import { CamisaReal2015Component } from './paginas-produto/camisas/camisa-real-2015/camisa-real-2015.component';
import { CamisaReal2017Component } from './paginas-produto/camisas/camisa-real-2017/camisa-real-2017.component';
import { CamisaReal2009Component } from './paginas-produto/camisas/camisa-real-2009/camisa-real-2009.component';
import { CamisaReal2012Component } from './paginas-produto/camisas/camisa-real-2012/camisa-real-2012.component';
import { CamisaReal2018Component } from './paginas-produto/camisas/camisa-real-2018/camisa-real-2018.component';
import { ViceroyhombreaceroComponent } from './paginas-produto/acessorios/viceroyhombreacero/viceroyhombreacero.component';
import { ViceroycadeteaceroComponent } from './paginas-produto/acessorios/viceroycadeteacero/viceroycadeteacero.component';
import { ViceroycadeteazulComponent } from './paginas-produto/acessorios/viceroycadeteazul/viceroycadeteazul.component';
import { ViceroycadetepretoComponent } from './paginas-produto/acessorios/viceroycadetepreto/viceroycadetepreto.component';
import { CamaRealMadridComponent } from './paginas-produto/acessorios/cama-real-madrid/cama-real-madrid.component';
import { BonepretoComponent } from './paginas-produto/acessorios/bonepreto/bonepreto.component';
import { MeiaoazulComponent } from './paginas-produto/acessorios/meiaoazul/meiaoazul.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { MochilaRealMadridComponent } from './paginas-produto/acessorios/mochila-real-madrid/mochila-real-madrid.component';
import { MeiaobrancoComponent } from './paginas-produto/acessorios/meiaobranco/meiaobranco.component';
import { MeiaocinzaComponent } from './paginas-produto/acessorios/meiaocinza/meiaocinza.component';
import { Meiaobranco23Component } from './paginas-produto/acessorios/meiaobranco23/meiaobranco23.component';
import { Meiaobranco24Component } from './paginas-produto/acessorios/meiaobranco24/meiaobranco24.component';
import { CanecaComponent } from './paginas-produto/acessorios/caneca/caneca.component';
import { CopoRealMadridComponent } from './paginas-produto/acessorios/copo-real-madrid/copo-real-madrid.component';
import { GarrafaComponent } from './paginas-produto/acessorios/garrafa/garrafa.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'produtos', component: ProdutosComponent},
  { path: 'carrinho', component: CarrinhoComponent},
  { path: 'contato', component: ContatoComponent},
  { path: 'cadastro', component: CadastroComponent},
  { path: 'real2010', component: CamisaReal2010Component},
  { path: 'real2011', component: CamisaReal2011Component},
  { path: 'real2013', component: CamisaReal2013Component},
  { path: 'real2014', component: CamisaReal2014Component},
  { path: 'real2015', component: CamisaReal2015Component},
  { path: 'real2017', component: CamisaReal2017Component},
  { path: 'real2009', component: CamisaReal2009Component},
  { path: 'real2012', component: CamisaReal2012Component},
  { path: 'real2018', component: CamisaReal2018Component},
  { path: 'hombreacero', component: ViceroyhombreaceroComponent},
  { path: 'cadeteacero', component: ViceroycadeteaceroComponent},
  { path: 'cadeteazul', component: ViceroycadeteazulComponent},
  { path: 'cadetepreto', component: ViceroycadetepretoComponent},
  { path: 'camarealmadrid', component: CamaRealMadridComponent},
  { path: 'bonepreto', component: BonepretoComponent},
  { path: 'meiaoazul', component: MeiaoazulComponent},
  { path: 'mochila', component: MochilaRealMadridComponent},
  { path: 'meiaobranco', component: MeiaobrancoComponent},
  { path: 'meiaocinza', component: MeiaocinzaComponent},
  { path: 'meiaobranco23', component: Meiaobranco23Component},
  { path: 'meiaobranco24', component: Meiaobranco24Component},
  { path: 'caneca', component: CanecaComponent},
  { path: 'copo', component: CopoRealMadridComponent},
  { path: 'garrafa', component: GarrafaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
