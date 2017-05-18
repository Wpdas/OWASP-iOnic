import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { OWASPApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';

import { M1LatestReleasesPage } from '../pages/m1-latest-releases/m1-latest-releases';
import { M2UnsafeDataPage } from "../pages/m2-unsafe-data/m2-unsafe-data";
import { M5NoEncryptionPage } from "../pages/m5-no-encryption/m5-no-encryption";

@NgModule({
  declarations: [
    OWASPApp,
    AboutPage,
    HomePage,
    TabsPage,
    M1LatestReleasesPage,
    M2UnsafeDataPage,
    M5NoEncryptionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(OWASPApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    OWASPApp,
    AboutPage,
    HomePage,
    TabsPage,
    M1LatestReleasesPage,
    M2UnsafeDataPage,
    M5NoEncryptionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
