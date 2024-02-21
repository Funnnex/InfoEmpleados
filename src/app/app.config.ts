import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';

export const appConfig: ApplicationConfig = {
  providers: [
    provideToastr(),
    provideAnimations(),
    provideRouter(routes), 
    importProvidersFrom(
      AngularFireModule.initializeApp({
      "projectId":"infoempleados",
      "appId":"1:741783745489:web:8d0e913609b9e40cfaa6f0",
      "storageBucket":"infoempleados.appspot.com",
      "apiKey":"AIzaSyAOiCUcvUSpbhCGbsCw0Lc7q0RAXRK1l0g",
      "authDomain":"infoempleados.firebaseapp.com",
      "messagingSenderId":"741783745489"
    })), 
    importProvidersFrom(provideFirestore(() => getFirestore())), 
    importProvidersFrom(provideDatabase(() => getDatabase()))
  ]
};
