import { Routes } from '@angular/router';
import { LiempleadosComponent } from './componentes/liempleados/liempleados.component';
import { CrempleadosComponent } from './componentes/crempleados/crempleados.component';

export const routes: Routes = [
  { path: '', component: LiempleadosComponent },
  { path: 'listado', component: LiempleadosComponent },
  { path: 'crud', component: CrempleadosComponent },
];
