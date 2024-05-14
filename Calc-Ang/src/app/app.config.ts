import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"project-dc64","appId":"1:1005325722556:web:22dc452ec912871abdc1b9","storageBucket":"project-dc64.appspot.com","apiKey":"AIzaSyALUu2LUS_SGL4YKtvUdRpi2Z2S40gnvNA","authDomain":"project-dc64.firebaseapp.com","messagingSenderId":"1005325722556","measurementId":"G-KLDE7T5VFT"}))), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"project-dc64","appId":"1:1005325722556:web:03089ebaf0339808bdc1b9","storageBucket":"project-dc64.appspot.com","apiKey":"AIzaSyALUu2LUS_SGL4YKtvUdRpi2Z2S40gnvNA","authDomain":"project-dc64.firebaseapp.com","messagingSenderId":"1005325722556","measurementId":"G-06NGZMF9T8"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
