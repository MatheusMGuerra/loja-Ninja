import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduto } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent {

  produto: IProduto | undefined
  quantidade = 1
  constructor(private prodServ: ProdutosService, private route: ActivatedRoute){}

  ngOnInit():void{
    //Isso vai trazer para dentro da variável todos os parâmetros da rota, que por sua vez vai ficar recebendo os produtos pelo ID
    const routeParams = this.route.snapshot.paramMap
    const prodID = Number(routeParams.get("id"))
    this.produto = this.prodServ.getOne(prodID)
  }
}
