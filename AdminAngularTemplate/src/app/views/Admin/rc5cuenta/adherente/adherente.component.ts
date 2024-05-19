import { Component } from '@angular/core';
import { FormControl, ValidatorFn, Validators } from '@angular/forms';
import {FiltroReporteService} from './../../../../servicios/filtro-reporte.service'

@Component({
  selector: 'app-adherente',
  templateUrl: './adherente.component.html',
  styleUrls: ['./adherente.component.scss']
})
export class AdherenteComponent {

  cedulaControl: FormControl;
  imgLoading=false;
 loading = false;
 sinadherente= "";
 adherente= "";
 nombres = "";
 cedula = "";
 valsinadherente = false;
 errorCedula = false
  constructor(private filtroAderente:FiltroReporteService) { }

  ngOnInit(): void {
    
  }

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
                  this.nombres = data.nombre;
                    this.cedula = value;
                    this.loading = false;
              }).catch((error:any)=> {
                this.loading = false;
                    this.valsinadherente = true;
                    this.imgLoading = false
                    this.errorCedula = true;
                    this.sinadherente = "Numero de cédula incorrecto"
              })
            }
            if (result['cedula']){
              this.adherente = result['tipo'];
              this.cedula = value;
              this.nombres = result['nombre'];
              this.valsinadherente = false;
              this.loading = false;
            }
          },error:error => {
            console.log(error); 
            this.loading = false;
                  this.valsinadherente = true;
                  this.imgLoading = false
                  this.errorCedula = true;
                  this.sinadherente = "Error del sistema"
          }
        })
      }, 1000);
    }
  }
  
}
