import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FiltroReporteService {
  urlLocal: string;
  urlAWS: string;
  url:string;
  constructor(private http: HttpClient) {
    this.urlLocal = "http://127.0.0.1:8000/api/";
    this.urlAWS = "https://adherenteservice.revolucionciudadana.com.ec/api/";
    this.url = this.urlAWS;
  }

  filterCedula(cedula:any){
    let url = this.url + 'consultarAdherenteEnPadron?cedula=' + cedula;
    return this.http.get(url);
  }

  datosExtras(cedula:any){
    let url = 'https://yosoyrc5.com/api/padron2023?cedula=eq.'+cedula;
    return this.http.get(url);
  }

  filterCedulaDelegados(delegado:any,cedula:any){
    let url = this.url + 'ConsultaDelegadosProvinciales?provincia='+delegado+'&cedula='+cedula;
    return this.http.get(url);
  }

  getNombreSRI(cedula:any){
    let url = 'https://adherenteservice.revolucionciudadana.com.ec/api/validarcedula?cedula=' + cedula;
    // return this.http.get(url);
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe(res => {
        resolve(res); {
        }
      }, error => {

        reject(error);
      });
    });
  }

  datosComplementarios(cedula:any){
    let url = 'https://adherenteservice.revolucionciudadana.com.ec/api/DataEmpadronado?cedula=' + cedula;
    // return this.http.get(url);
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe(res => {
        resolve(res); {
        }
      }, error => {

        reject(error);
      });
    });
  }

  listProvincia(id:any){
    let url = this.url + 'CargarCicunsOProvincia?paise_id=' + id;
    return this.http.get(url);
  }

  listCanton(id:any){
    let url = this.url + 'Listar_Can_Pais_Cicunscripcion_Pais?prov_circ_id=' + id;
    return this.http.get(url);
  }

  listParroquia(id:any){
    let url = this.url + 'Listar_Parroquia_estado_Canton_Pais?Esta_Cant_id=' + id;
    
    return this.http.get(url);
  }

  registrarRelacionPadron(data:any){
    let url = 'https://adherenteservice.revolucionciudadana.com.ec/api/RegistrarTipoAdherenteYRedes';
    // return this.http.get(url);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return new Promise((resolve, reject) => {
      this.http.get(url,{params:data}).subscribe(res => {
        resolve(res); {
        }
      }, error => {

        reject(error);
      });
    });
  }

  registrarSinRelacionPadron(data:any){
    let url = 'https://adherenteservice.revolucionciudadana.com.ec/api/RegistrarTipoAdherenteYRedes';
    // return this.http.get(url);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return new Promise((resolve, reject) => {
      this.http.get(url,{params:data}).subscribe(res => {
        resolve(res); {
        }
      }, error => {

        reject(error);
      });
    });
  }
}
