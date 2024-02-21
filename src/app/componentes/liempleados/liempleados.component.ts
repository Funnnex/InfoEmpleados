import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Empleados } from '../../interfaces/empleados';
import { NotificaticionesService } from '../../servicios/notificaciones.service';
import {
  Modal,
  Input,
  Ripple,
  initTE,
} from "tw-elements";
import { FirebaseService } from '../../servicios/firebase.service';

@Component({
  selector: 'app-liempleados',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './liempleados.component.html',
  styleUrl: './liempleados.component.css'
})
export class LiempleadosComponent implements OnInit {
  
  input!: FormGroup;
  edit!: FormGroup;
  summited: boolean = false;
  data: any;
  empleado: any;

  constructor(
    private build: FormBuilder, 
    private notificacion:NotificaticionesService,
    private db:FirebaseService
    ) {
    this.input = this.build.group({
      nombre: new FormControl('', Validators.required),
      departamento: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
    });
    this.edit = this.build.group({
      nombre: new FormControl('', Validators.required),
      departamento: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    initTE({ Modal, Input, Ripple });
    this.obtenerEmpleados();
  }

// Se obtienen todos los empleados
  obtenerEmpleados() {
    this.db.obtenerEmpleados().subscribe(data => {
      this.data = data;
    });
  }

// Se guarda el empleado si cumple con los requisitos de validación
  onSubmit() {
    this.summited = true;
    if (this.input.valid) {
      this.db.nuevoEmpleado(this.input.value).then(() => {
        this.notificacion.showSuccess('El empleado se ha generado correctamente', 'INFORME');
        this.input.reset();
        this.summited = false;
        document.getElementById("closeModal")?.click();
      }).catch(error => {
        console.log(error);
        this.notificacion.showError(`No se pudo crear el registro. ERROR : ${error}`, 'ERROR');
        this.input.reset();
        this.summited = false;
      })
    } else {
      this.notificacion.showError('No se pudo crear el registro, revisa los datos', 'ERROR');
    }
  }

// Se carga el empleado para su edición
  abrirEdiciionEmpleado(id: string) {
    this.db.obtenerEmpleado(id).subscribe((data: any) => {
      this.empleado = data.id;
      this.edit.setValue({
        nombre: data.nombre,
        departamento: data.departamento,
        direccion: data.direccion,
        email: data.email,
        telefono: data.telefono
      });
    });
  }

// Guarda el empleado con los cambios editados
  editarEmpleado(id: string) {
    this.summited = true;
    if (this.edit.valid) {
      this.db.editarEmpleado(id, this.edit.value).then(() => {
        this.notificacion.showSuccess('El empleado se ha actualizado correctamente', 'INFORME');
        this.summited = false;
        document.getElementById("closeEditModal")?.click();
        this.edit.reset();
      })
    } else {
      this.notificacion.showError('No se pudo actualizar el registro, revisa los datos', 'ERROR');
    }
  }

// Elimina el empleado seleccionado
  eliminarEmpleado(id: string) {

  }

}
