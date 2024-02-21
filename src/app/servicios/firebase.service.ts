import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Empleados } from '../interfaces/empleados';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db:AngularFirestore) { }

  obtenerEmpleados(): Observable<any> {
    return this.db.collection('empleados').valueChanges({ idField: 'id' });
  }

  obtenerEmpleado(id: string) {
    return this.db.collection('empleados').doc(id).valueChanges({ idField: 'id' });
  }

  nuevoEmpleado(empleado: Empleados): Promise<any> {
      return this.db.collection('empleados').add(empleado);
  }

  editarEmpleado(id:string , empleado: Empleados) {
    return this.db.collection('empleados').doc(id).update(empleado);
  }

  eliminarEmpleado(id: string) {
    return this.db.collection('empleados').doc(id).delete();
  }


}
