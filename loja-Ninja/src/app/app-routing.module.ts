import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Routa já definida na criação do módulo "produtos"
const routes: Routes = [{ path: 'produtos', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule) },
{path: "", redirectTo: "produtos", pathMatch: "full"}];
//Após deixar a classe de rotas pronta, adicionar no app.component.html
@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
