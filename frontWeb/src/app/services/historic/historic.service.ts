import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { constantes } from '../../../../../config/constantes';

@Injectable({
  providedIn: 'root'
})
export class HistoricService {

  constructor(private http:HttpClient) { }

  private urlOrder = constantes.urlAPINode + "order/"; // url souhaitée pour la requête de l'API


  getOrderByUser(userId)
  {
    return this.http.post(this.urlOrder + "getOrderByUser", {userId:userId}); // Récupère les données renvoyées par l'API
  }

  getAllOrders()
  {
    return this.http.get(this.urlOrder + "getAllOrders"); // Récupère les données renvoyées par l'API

  }
}
