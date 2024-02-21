import { Routes } from '@angular/router';
import { LiempleadosComponent } from './componentes/liempleados/liempleados.component';

export const routes: Routes = [
  { path: '', component: LiempleadosComponent },
  { path: 'listado', component: LiempleadosComponent },
];
