import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
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
import { ViceroycadetepretoComponent } from './paginas-produto/acessorios/viceroycadetepreto/viceroycadetepreto.component';
import { ViceroycadeteazulComponent } from './paginas-produto/acessorios/viceroycadeteazul/viceroycadeteazul.component';
import { ViceroycadeteaceroComponent } from './paginas-produto/acessorios/viceroycadeteacero/viceroycadeteacero.component';
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
import { HttpClientModule } from '@angular/common/http';
import { ListarComponent } from './pages/listar/listar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProdutosComponent,
    ContatoComponent,
    CamisaReal2010Component,
    CamisaReal2011Component,
    CamisaReal2013Component,
    CamisaReal2014Component,
    CamisaReal2015Component,
    CamisaReal2017Component,
    CamisaReal2009Component,
    CamisaReal2012Component,
    CamisaReal2018Component,
    ViceroyhombreaceroComponent,
    ViceroycadetepretoComponent,
    ViceroycadeteazulComponent,
    ViceroycadeteaceroComponent,
    CamaRealMadridComponent,
    BonepretoComponent,
    MeiaoazulComponent,
    CarrinhoComponent,
    MochilaRealMadridComponent,
    MeiaobrancoComponent,
    MeiaocinzaComponent,
    Meiaobranco23Component,
    Meiaobranco24Component,
    CanecaComponent,
    CopoRealMadridComponent,
    GarrafaComponent,
    CadastroComponent,
    ListarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
