import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// custom jazz
import { TitleBarComponent } from './ui/app.ui.titlebar';
import { StatusBarComponent } from './ui/app.ui.statusbar';
import { NavigationComponent } from './ui/app.ui.navigation';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, TitleBarComponent, StatusBarComponent, NavigationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }