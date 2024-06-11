import { Component } from '@angular/core';
import { FiltroReporteService } from 'src/app/servicios/filtro-reporte.service';
import Swal from 'sweetalert2';

export interface datosApis {
  cedula:string;
  cod_parroquia:number;
  cod_provincia:number;
  cod_zona:number;
  junta:number;
  nom_canton:string;
  nom_padron:string;
  nom_parroquia:string;
  nom_provincia:string;
  nom_recinto:string;
  nom_zona:string;
  sexo:string;
}
@Component({
  selector: 'app-adherentes',
  templateUrl: './adherentes.component.html',
  styleUrls: ['./adherentes.component.scss']
})
export class AdherentesComponent {
  imgLoading=false;
  notAdherente:string
 loading = false;
 sinadherente= "";
 adherente= "";
 nombres = "";
 cedula = "";
 pais = "";
 provincia = "";
 canton = "";
 parroquia = "";
 extrangero = false;
 valsinadherente = false
 datosAdherente:any
 errorCedula = false;
 errorCedulaText = "";
  constructor(private filtroAderente:FiltroReporteService) { }

  ngOnInit(): void {
    
  }

  isChecked: boolean = false;

  toggleCheckbox() {
    this.isChecked = !this.isChecked;
  }

  error="";
  datosApi:datosApis;
  checkInputLength(event: Event) {
    this.errorCedula = false
    this.imgLoading = false
    const value = (event.target as HTMLInputElement).value;
    if (value.length === 10) {
      this.imgLoading=true
      this.loading = true

      this.filtroAderente.filterCedula(value).subscribe({
        next:(res:any) => {
          debugger
          if(res['mensaje']){
            this.filtroAderente.datosExtras(value).subscribe({
              next:(res:any) => {
                console.log(res[0]);
                debugger
                this.datosApi = res[0];
                this.valsinadherente = false;
                this.loading = false;
                this.imgLoading = true;
                this.notAdherente = ""+this.datosApi.nom_padron +" CON CI: "+value+" NO PERTENECE A UN ADHERENTE O ADHERENTE PERMANENTE DE LA REVOLUCIÓN CIUDADANA LISTA 5";
              },error:e => {
                console.log(e);
              }
            })
          }else if(res['']){

          }
        },error:e => {
          console.log(e);
        }
      })

      // setTimeout(() => {
      //   this.filtroAderente.getNombreSRI(value).then((rest:any)=>{
      //     let nombre = rest['nombre'];
      //     if(rest['code'] == "422"){
      //       this.errorCedula = true;
      //       this.errorCedulaText = rest['message'];
      //       this.loading = false;
      //       this.imgLoading = true;
      //     }else if(rest['nombre']){
      //       this.filtroAderente.filterCedula(value).subscribe({
      //         next:(rest:any) =>{
      //           if(rest['tipo'] == 'ADHERENTE PERMANENTE' || rest['tipo'] == 'ADHERENTE'){
      //             this.valsinadherente = true;
      //             this.datosAdherente = rest;
      //             this.loading = false;
      //             this.imgLoading = true;
      //             this.errorCedula = false;
      //           }else if(rest['mensaje']){
      //             this.valsinadherente = false;
      //             this.loading = false;
      //             this.imgLoading = true;
      //             this.notAdherente = ""+nombre+" CON CI: "+value+" NO PERTENECE A UN ADHERENTE O ADHERENTE PERMANENTE DE LA REVOLUCIÓN CIUDADANA LISTA 5";
      //           }
      //         },error:error =>{
      //           console.log(error);
      //         }
      //       })
      //     }
      //   }).catch((error:any) =>{
      //     console.log(error);
      //   })
      // }, 1000);
    }
  }

  enviar(){
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Tu información fue guardada",
      showConfirmButton: false,
      timer: 1500
    });
    setTimeout(() => {
      location.reload();
    }, 1750);
    
  }

}
