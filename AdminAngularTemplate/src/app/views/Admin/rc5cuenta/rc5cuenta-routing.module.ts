import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsCantonalesComponent } from './forms-cantonales/forms-cantonales.component';
import { FormsNacinalesComponent } from './forms-nacinales/forms-nacinales.component';
import { TableProvincialesComponent } from './table-provinciales/table-provinciales.component';
import { AdminLoginGuard } from 'src/app/guards/admin-login.guard';
import { AdherenteComponent } from './adherente/adherente.component';
import { ReporteComponent } from './reporte/reporte.component';
const routes: Routes = [
  {
    path: '',
    data: {
    title: 'administrador_nav_1_1'
  },
  children: [
    {
      path: 'nacional',
      component: FormsNacinalesComponent,
      canActivate:[AdminLoginGuard],
      data: {
        title: 'Administrador'
      }
    },
    {
      path: 'provincial',
      component: TableProvincialesComponent,
      canActivate:[AdminLoginGuard],
      data: {
        title: 'Administrador'
      }
    },
    {
      path: 'cantonal',
      component: FormsCantonalesComponent,
      canActivate:[AdminLoginGuard],
      data: {
        title: 'Administrador'
      }
    },
  ]
  },
  {
    path: '',
    data: {
    title: 'administrador_nav_1_2'
  },
  children: [
    {
      path: 'adherentes',
      component: AdherenteComponent,
      canActivate:[AdminLoginGuard],
      data: {
        title: 'Administrador'
      }
    },
  ]
},
{
  path: '',
  data: {
  title: 'administrador_nav_1_2'
},
children: [
  {
    path: 'reportes',
    component: ReporteComponent,
    canActivate:[AdminLoginGuard],
    data: {
      title: 'Administrador'
    }
  },
]
}

]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Rc5cuentaRoutingModule { }
