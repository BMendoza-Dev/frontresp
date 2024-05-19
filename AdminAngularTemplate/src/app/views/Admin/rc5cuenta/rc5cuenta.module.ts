import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Rc5cuentaRoutingModule } from './rc5cuenta-routing.module';
import { FormsNacinalesComponent } from './forms-nacinales/forms-nacinales.component';
import { TableNacionalesComponent } from './table-nacionales/table-nacionales.component';
import { FormsProvincialesComponent } from './forms-provinciales/forms-provinciales.component';
import { TableProvincialesComponent } from './table-provinciales/table-provinciales.component';
import { FormsCantonalesComponent } from './forms-cantonales/forms-cantonales.component';
import { TableCantonalesComponent } from './table-cantonales/table-cantonales.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { IconModule } from '@coreui/icons-angular';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { AccordionModule, AlertModule, BadgeModule, BreadcrumbModule, ButtonGroupModule, ButtonModule, CalloutModule, CardModule, CarouselModule, CollapseModule, DropdownModule, FormModule, GridModule, ListGroupModule, ModalModule, NavModule, PaginationModule, PlaceholderModule, PopoverModule, ProgressModule, SharedModule, SpinnerModule, TableModule, TabsModule, ToastModule, TooltipModule, UtilitiesModule } from '@coreui/angular';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatExpansionModule } from '@angular/material/expansion';
import { FiltroCuentasPipe } from 'src/app/pipes/filtro-cuentas.pipe';
import { AdherenteComponent } from './adherente/adherente.component';
import { ReporteComponent } from './reporte/reporte.component';


@NgModule({
  declarations: [
    FormsNacinalesComponent,
    TableNacionalesComponent,
    FormsProvincialesComponent,
    TableProvincialesComponent,
    FormsCantonalesComponent,
    TableCantonalesComponent,

    AdherenteComponent,
     ReporteComponent
  ],
  imports: [
    CommonModule,
    Rc5cuentaRoutingModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
    DocsComponentsModule,
    IconModule,
    AutocompleteLibModule,
    ButtonGroupModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    FormModule,
    GridModule,
    ListGroupModule,
    SharedModule,
    AccordionModule,
    BadgeModule,
    BreadcrumbModule,
    CarouselModule,
    CollapseModule,
    NavModule,
    PlaceholderModule,
    PopoverModule,
    ProgressModule,
    SpinnerModule,
    TableModule,
    TabsModule,
    TooltipModule,
    UtilitiesModule,
    AlertModule,
    ModalModule,
    ToastModule,
    PaginationModule,
    MatAutocompleteModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    CalloutModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Rc5cuentaModule { }
