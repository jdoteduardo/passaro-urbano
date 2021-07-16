import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest } from "@angular/common/http";
import { Pedido } from "./shared/pedido.model";
import { Observable } from "rxjs";
import { URL_API } from "./app.api";
import { map } from "rxjs/operators";

@Injectable()
export class OrdemCompraService {

    constructor(private http: HttpClient) {}

    public efetivarCompra(pedido: Pedido): Observable<number> {

        let headers: Headers = new Headers();

        headers.append('Content-type', 'application/json');

        return this.http.post(`${URL_API}/pedidos`, pedido)
            .pipe(map((resposta: Response) => resposta['id'])
          );
    }
}