import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HomeInicioGuard implements CanActivate {
  constructor(private rutas:Router){}
  canActivate(){
    this.rutas.navigate(["/adherentes"]);
    return false
  }
  
}
