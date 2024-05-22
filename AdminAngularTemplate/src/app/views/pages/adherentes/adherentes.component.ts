import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FiltroReporteService } from 'src/app/servicios/filtro-reporte.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-adherentes',
  templateUrl: './adherentes.component.html',
  styleUrls: ['./adherentes.component.scss']
})
export class AdherentesComponent {
  cedulaControl: FormControl;
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
  checkInputLength(event: Event) {
    this.errorCedula = false
    this.imgLoading = false
    const value = (event.target as HTMLInputElement).value;
    if (value.length === 10) {
      this.imgLoading=true
      this.loading = true
      setTimeout(() => {
        // this.filtroAderente.filterCedula(value).subscribe({
        //   next:(result: any) => { 
            
        //     if(result['mensaje']){
        //       this.sinadherente = result['mensaje'];
        //       this.valsinadherente = true;
        //       this.filtroAderente.getNombreSRI(value)
        //       // .subscribe({
        //       //   next:(result:any) =>{
        //       //     
        //       //     this.nombres = result.nombre;
        //       //     this.cedula = value;
        //       //     this.loading = false;
        //       //   },error:error => {
        //       //     this.loading = false;
        //       //     this.valsinadherente = true;
        //       //     this.imgLoading = false
        //       //     this.errorCedula = true;
        //       //     this.sinadherente = "Numero de cédula incorrecto"
        //       //   }
        //       // })
        //       .then((data:any) => {
                
        //         if(data['code'] == "422"){
        //           this.loading = false;
        //             this.valsinadherente = true;
        //             this.imgLoading = false
        //             this.errorCedula = true;
        //             this.sinadherente = "Numero de cédula incorrecto"
        //             // this.error = error.message;
        //         }else{
        //           this.nombres = data.nombre;
        //           this.cedula = value;
        //           this.loading = false;
        //         }
                 
        //       }).catch((error:any)=> {
        //         this.loading = false;
        //             this.valsinadherente = true;
        //             this.imgLoading = false
        //             this.errorCedula = true;
        //             this.sinadherente = "Numero de cédula incorrecto"
        //             this.error = error.message;
        //       })
        //     }
        //     if (result['cedula']){
        //       this.adherente = result['tipo'];
        //       this.cedula = value;
        //       this.nombres = result['nombre'];
        //       this.valsinadherente = false;
        //       this.loading = false;
        //     }
        //     this.filtroAderente.datosComplementarios(value).then((data:any) => {
        //       let codProvincia = data[0].cod_provincia;
        //       if(codProvincia == 26 || codProvincia == 27 || codProvincia == 28){
        //         this.pais = "Extranjero"
        //         this.extrangero = true;
        //       }else{
        //         this.pais = "Ecuador";
        //       }
        //       this.provincia = data[0].nom_provincia;
        //       this.canton = data[0].nom_canton;
        //       this.parroquia = data[0].nom_parroquia;
        //     }).catch((error:any)=> {
               
        //     })
        //   },error:error => {
        //     this.loading = false;
        //           this.valsinadherente = true;
        //           this.imgLoading = false
        //           this.errorCedula = true;
        //           this.sinadherente = "Error del sistema"
        //           this.error = error.message;
        //   }
        // })


        this.filtroAderente.getNombreSRI(value).then((rest:any)=>{
          
          let nombre = rest['nombre'];
          if(rest['code'] == "422"){
            
            this.errorCedula = true;
            this.errorCedulaText = rest['message'];
            this.loading = false;
            this.imgLoading = true;
          }else if(rest['nombre']){
            this.filtroAderente.filterCedula(value).subscribe({
              next:(rest:any) =>{
                
                if(rest['tipo'] == 'ADHERENTE PERMANENTE' || rest['tipo'] == 'ADHERENTE'){
                  this.valsinadherente = true;
                  this.datosAdherente = rest;
                  this.loading = false;
                  this.imgLoading = true;
                  this.errorCedula = false;
                }else if(rest['mensaje']){
                  this.valsinadherente = false;
                  this.loading = false;
                  this.imgLoading = true;
                  this.notAdherente = ""+nombre+" CON CI: "+value+" NO PERTENECE A UN ADHERENTE O ADHERENTE PERMANENTE DE LA REVOLUCIÓN CIUDADANA LISTA 5";
                }
              },error:error =>{
                console.log(error);
              }
            })
          }
        }).catch((error:any) =>{
          console.log(error);
        })
      }, 1000);
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
