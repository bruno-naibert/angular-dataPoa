import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnibusComponent } from './onibus/onibus.component';
import { LotacaoComponent } from './lotacao/lotacao.component';
import { TrajetoComponent } from './trajeto/trajeto.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'onibus', component: OnibusComponent},
  {path: 'lotacao', component: LotacaoComponent},
  {path: 'trajeto/:id', component: TrajetoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
