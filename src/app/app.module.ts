import { HttpModule } from '@angular/http';
import { SQLite } from '@ionic-native/sqlite';
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
import { M5SqlInjectionPage } from "../pages/m5-sql-injection/m5-sql-injection";
import { M3UnsafeCommunicationPage } from "../pages/m3-unsafe-communication/m3-unsafe-communication";
import { M6UnsafeAuthPage } from "../pages/m6-unsafe-auth/m6-unsafe-auth";
import { M7CodeQualityPage } from "../pages/m7-code-quality/m7-code-quality";
import { M8ChangeCodePage } from "../pages/m8-change-code/m8-change-code";

@NgModule({
  declarations: [
    OWASPApp,
    AboutPage,
    HomePage,
    TabsPage,
    M1LatestReleasesPage,
    M2UnsafeDataPage,
    M5NoEncryptionPage,
    M5SqlInjectionPage,
    M3UnsafeCommunicationPage,
    M6UnsafeAuthPage,
    M7CodeQualityPage,
    M8ChangeCodePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
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
    M5NoEncryptionPage,
    M5SqlInjectionPage,
    M3UnsafeCommunicationPage,
    M6UnsafeAuthPage,
    M7CodeQualityPage,
    M8ChangeCodePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    SQLite,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
