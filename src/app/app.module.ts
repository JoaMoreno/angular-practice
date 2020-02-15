import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectDescriptionComponent } from './components/project-description/project-description.component';
import { ProjectMainContainerComponent } from './components/project-main-container/project-main-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectCardComponent,
    ProjectDescriptionComponent,
    ProjectMainContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
