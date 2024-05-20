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
 errorCedula = false 
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
    const value = (event.target as HTMLInputElement).value;
    if (value.length === 10) {
      this.imgLoading=true
      this.loading = true
      setTimeout(() => {
        this.filtroAderente.filterCedula(value).subscribe({
          next:(result: any) => { 
            
            if(result['mensaje']){
              this.sinadherente = result['mensaje'];
              this.valsinadherente = true;
              this.filtroAderente.getNombreSRI(value)
              // .subscribe({
              //   next:(result:any) =>{
              //     
              //     this.nombres = result.nombre;
              //     this.cedula = value;
              //     this.loading = false;
              //   },error:error => {
              //     this.loading = false;
              //     this.valsinadherente = true;
              //     this.imgLoading = false
              //     this.errorCedula = true;
              //     this.sinadherente = "Numero de cédula incorrecto"
              //   }
              // })
              .then((data:any) => {
                
                if(data['code'] == "422"){
                  this.loading = false;
                    this.valsinadherente = true;
                    this.imgLoading = false
                    this.errorCedula = true;
                    this.sinadherente = "Numero de cédula incorrecto"
                    // this.error = error.message;
                }else{
                  this.nombres = data.nombre;
                  this.cedula = value;
                  this.loading = false;
                }
                 
              }).catch((error:any)=> {
                this.loading = false;
                    this.valsinadherente = true;
                    this.imgLoading = false
                    this.errorCedula = true;
                    this.sinadherente = "Numero de cédula incorrecto"
                    this.error = error.message;
              })
            }
            if (result['cedula']){
              this.adherente = result['tipo'];
              this.cedula = value;
              this.nombres = result['nombre'];
              this.valsinadherente = false;
              this.loading = false;
            }
            this.filtroAderente.datosComplementarios(value).then((data:any) => {
              let codProvincia = data[0].cod_provincia;
              if(codProvincia == 26 || codProvincia == 27 || codProvincia == 28){
                this.pais = "Extranjero"
                this.extrangero = true;
              }else{
                this.pais = "Ecuador";
              }
              this.provincia = data[0].nom_provincia;
              this.canton = data[0].nom_canton;
              this.parroquia = data[0].nom_parroquia;
            }).catch((error:any)=> {
               
            })
          },error:error => {
            this.loading = false;
                  this.valsinadherente = true;
                  this.imgLoading = false
                  this.errorCedula = true;
                  this.sinadherente = "Error del sistema"
                  this.error = error.message;
          }
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
