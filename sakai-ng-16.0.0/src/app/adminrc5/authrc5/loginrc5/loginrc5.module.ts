import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { Loginrc5Component } from './loginrc5.component';
import { RouterModule } from '@angular/router';
import { Loginrc5RoutingModule } from './loginrc5-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        FormsModule,
        PasswordModule,
        RouterModule,
        Loginrc5RoutingModule
    ],
    exports: [
        Loginrc5Component // Exporta el componente aquí si es necesario
    ],
    declarations: [Loginrc5Component]
})
export class Loginrc5Module { }
