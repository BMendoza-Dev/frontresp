import { Component, ElementRef, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FiltroReporteService } from 'src/app/servicios/filtro-reporte.service';
import { SpinnerService } from 'src/app/servicios/spinner.service';
import Swal from 'sweetalert2';

export interface datosApis {
  cedula:string;
  cod_pais:number;
  cod_parroquia:number;
  cod_provincia:number;
  cod_zona:number;
  junta:number;
  nom_pais?:string;
  nom_canton?:string;
  nom_padron:string;
  nom_parroquia?:string;
  nom_provincia?:string;
  nom_recinto:string;
  nom_zona:string;
  sexo:string;
  padronelectoral_id:number;
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
 provincia:any;
 canton:any;
 parroquia:any;
 extrangero = false;
 valsinadherente = false
 datosAdherente:any
 errorCedula = false;
 errorCedulaText = "";
  constructor(private filtroAderente:FiltroReporteService, private titulo:Title, private meta:Meta,private spinnerService: SpinnerService, config: NgbModalConfig, private modalService: NgbModal) { 
    // titulo.setTitle("Sistema de Registro y Consulta de Adherentes 2024");
    // meta.addTag({name:'description', content:'Sistema de Registro y Consulta de Adherentes Revolución Ciudadana 2024'})
    // customize default values of modals used by this component tree
	
		config.keyboard = false;
  }

  ngOnInit(): void {
    this.titulo.setTitle("Sistema de Registro y Consulta de Adherentes 2024");
    this.meta.addTag({name:'description', content:'Sistema de Registro y Consulta de Adherentes Revolución Ciudadana 2024'})
  }

  isChecked: boolean = false;

  toggleCheckbox() {
    this.isChecked = !this.isChecked;
  }

  error="";
  datosApi:datosApis;
  register = false;
  registerFull = true;
  nombresCompletos:string;
  datosPadron = false;
  checkInputLength(event: Event) {
    this.errorCedula = false
    this.imgLoading = false
    const value = (event.target as HTMLInputElement).value;
    if (value.length === 10) {
      this.imgLoading=true
      this.loading = true

      this.filtroAderente.filterCedula(value).subscribe({
        next:(res:any) => {
          
          this.datosPadron = true
          if(res['error'] == "400"){
                this.datosApi = res['data'];
                if(res['data'].nom_pais == "Extranjero"){
                  this.extrangero = true;
                  this.datosApi.cod_pais = 593;
                }else{
                  this.datosApi.cod_pais =52;
                  this.extrangero = false;
                }
                this.valsinadherente = false;
                this.loading = false;
                this.imgLoading = true;
                this.notAdherente = res['mensaje'];
                this.register = true;
                this.registerFull = false
          }else if(res['code']){
            this.valsinadherente = true;
            this.datosAdherente = res;
            this.loading = false;
            this.imgLoading = true;
            this.errorCedula = false;
            this.register = false
            this.registerFull = false
          }else if(res['error'] == "500"){
            this.filtroAderente.getNombreSRI(value).then((resSri:any) => {
              this.datosPadron = false;
              if(resSri['nombre']){
                this.valsinadherente = false;
                this.loading = false;
                this.imgLoading = true;
                this.register = false;
                this.registerFull = true;
                this.nombresCompletos = resSri['nombre'];
                this.notAdherente = res['mensaje'];
              }else if(resSri['code']){
                this.errorCedula = true;
                this.errorCedulaText = "Ingrese un número de cédula valido";
                this.valsinadherente = true;
                this.datosAdherente = res;
                this.loading = false;
                this.imgLoading = true;
                this.register = false
                this.registerFull = false
              }
            })
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

  provinciaSelect(){
    const select = this.selectProvincia.nativeElement as HTMLSelectElement;
    select.value = ''; 
  }

  cantonSelect(){
    const select = this.selectCanton.nativeElement as HTMLSelectElement;
    select.value = ''; 
  }

  parroquiaSelect(){
    const select = this.selectParroquia.nativeElement as HTMLSelectElement;
    select.value = ''; 
  }

  @ViewChild('codigo') codigo: ElementRef;
  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    let codigo = inputElement.value;
    if(codigo.length == 1 && codigo != "+"){
      const select = this.codigo.nativeElement as HTMLSelectElement;
      select.value = "+"+codigo; 
    }
  }

  @ViewChild('selectPais') selectPais: ElementRef;
  @ViewChild('selectProvincia') selectProvincia: ElementRef;
  onCountryChange(e:Event){
    this.provinciaSelect(); this.cantonSelect(); this.parroquiaSelect();
    const selectElement = e.target as HTMLSelectElement;
    let pais = selectElement.value;
    if(pais == "593"){
      this.extrangero = true;
    }else{
      this.extrangero = false;
    }

    this.filtroAderente.listProvincia(pais).subscribe({
      next:rest =>{
        this.provincia = rest;
      },error:e =>{
        console.log(e);
      }
    })
  }

  @ViewChild('selectCanton') selectCanton: ElementRef;
  onProvinciahange(e:Event){
    this.cantonSelect(); this.parroquiaSelect();
    const selectElement = e.target as HTMLSelectElement;
    let provincia = selectElement.value;

    this.filtroAderente.listCanton(provincia).subscribe({
      next:rest =>{
        this.canton = rest;
      },error:e =>{
        console.log(e);
      }
    })
  }

  @ViewChild('selectParroquia') selectParroquia: ElementRef;
  onCantonChange(e:Event){
    this.parroquiaSelect();
    const selectElement = e.target as HTMLSelectElement;
    let parroquia = selectElement.value;

    this.filtroAderente.listParroquia(parroquia).subscribe({
      next:rest =>{
        this.parroquia = rest;
      },error:e =>{
        console.log(e);
      }
    })
  }

  onInputChangeTele(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    let telefonoFrom = inputElement.value;
    const telefono = this.telefono.nativeElement as HTMLSelectElement;
    if(telefonoFrom == "0"){
      telefono.value = "";
    }
  }

  success(dato:any){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: dato,
      showConfirmButton: false,
    }).then((result) => {
      // Se ejecuta cuando el cuadro de diálogo se cierra
      if (result.dismiss === Swal.DismissReason.timer) {
        // Se cierra por el temporizador
        location.reload();
      } else {
        // Se cierra por alguna otra razón, como un clic manual
        location.reload();
      }
    });
  }

  guardarRegistroSinPadron(){
    const email = this.email.nativeElement as HTMLSelectElement;
    const telefono = this.telefono.nativeElement as HTMLSelectElement;
    const teredtwl = this.teredtwl.nativeElement as HTMLSelectElement;
    const redfb = this.redfb.nativeElement as HTMLSelectElement;
    const redit = this.redit.nativeElement as HTMLSelectElement;
    const redttk = this.redttk.nativeElement as HTMLSelectElement;

    const cedulaFil = this.cedulaFil.nativeElement as HTMLSelectElement;

    const pais = this.selectPais.nativeElement as HTMLSelectElement;
    const provincia = this.selectProvincia.nativeElement as HTMLSelectElement;
    const canton = this.selectCanton.nativeElement as HTMLSelectElement;
    const parroquia = this.selectParroquia.nativeElement as HTMLSelectElement;
    if( this.TermCondi == false || parroquia.value == "" || canton.value == "" || provincia.value == "" || pais.value == "" || email.value == "" || telefono.value == "" || teredtwl.value == "" || redfb.value == "" || redit.value == "" || redttk.value == ""){
      this.validatedForm = true;
    }else{
      this.spinnerService.llamarSpinner();
      let numtelefono;
      numtelefono = "+593 "+telefono.value;
      let data = {
        "nom_padron":this.nombresCompletos,
        "provincia_id":provincia.value,
        "cantone_id":canton.value,
        "parroquia_id":parroquia.value,
        "correo":email.value,
        "tel":numtelefono,
        "teredtwl":teredtwl.value,
        "redfb":redfb.value,
        "redit":redit.value,
        "redttk":redttk.value,
        "cedula":cedulaFil.value
      };
      
      this.filtroAderente.registrarSinRelacionPadron(data).then((rest:any) => {
        rest; 
        this.spinnerService.detenerSpinner();
        this.success(rest['message']);
      })
    }
  }


@ViewChild('email') email: ElementRef;
@ViewChild('telefono') telefono: ElementRef;
@ViewChild('teredtwl') teredtwl: ElementRef;
@ViewChild('redfb') redfb: ElementRef;
@ViewChild('redit') redit: ElementRef;
@ViewChild('redttk') redttk: ElementRef;
@ViewChild('cedulaFil') cedulaFil: ElementRef;
validatedForm = false;

  guardarRegistroPadron(){
    const email = this.email.nativeElement as HTMLSelectElement;
    const telefono = this.telefono.nativeElement as HTMLSelectElement;
    const teredtwl = this.teredtwl.nativeElement as HTMLSelectElement;
    const redfb = this.redfb.nativeElement as HTMLSelectElement;
    const redit = this.redit.nativeElement as HTMLSelectElement;
    const redttk = this.redttk.nativeElement as HTMLSelectElement;
    const codigo = this.codigo.nativeElement as HTMLSelectElement;
    if(!this.extrangero){
      codigo.value = "+593"
    }
    if(this.TermCondi == false || email.value == "" || telefono.value == "" || teredtwl.value == "" || redfb.value == "" || redit.value == "" || redttk.value == "" || codigo.value == ""){
      this.validatedForm = true;
    }else{
      this.spinnerService.llamarSpinner();
      let numtelefono;
      if(this.extrangero){
        numtelefono = ""+codigo.value+" "+telefono.value;
      }else{
        numtelefono = "+593 "+telefono.value;
      }
      let data = {
        "correo":email.value,
        "tel":numtelefono,
        "teredtwl":teredtwl.value,
        "redfb":redfb.value,
        "redit":redit.value,
        "redttk":redttk.value,
        "padronelectoral_id":this.datosApi.padronelectoral_id
      };
      
      this.filtroAderente.registrarRelacionPadron(data).then((rest:any) => {
        rest; 
        this.spinnerService.detenerSpinner();
        this.success(rest['message']);
      })
    }
    
  }

  TermCondi = false
  check(event: any) {
    if (event.target.checked) {
      console.log('Checkbox está marcado');
      this.TermCondi = true;
      // Aquí puedes realizar cualquier acción cuando el checkbox se marca
    } else {
      console.log('Checkbox está desmarcado');
      this.TermCondi = false
      // Aquí puedes realizar cualquier acción cuando el checkbox se desmarca
    }
  }

  public visible = false;

  toggleLiveDemo() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  open(politica:any) {
		this.modalService.open(politica, {scrollable: true,backdrop:true, windowClass: 'custom-modal-size', size:'xl'});
	}

}
